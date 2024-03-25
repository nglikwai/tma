import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
import * as R from "ramda";
import { logging } from "./user.service";

type Props = {
    baseURL: string;
    headers?: RawAxiosRequestHeaders;
    withCredentials?: boolean;
};

const getBearerToken = async (config?: any) => {
    if (config?.refresh) localStorage.removeItem("token");
    const token = localStorage.getItem("token");
    if (token) return token;
};

export const BaseClientService = ({ baseURL, headers, withCredentials }: Props) => {
    const instance = axios.create({
        baseURL,
        timeout: 15000,
        headers: {
            ...headers
        },
        withCredentials
    });

    instance.interceptors.request.use(
        async config => {
            // Function to get the bearer token
            const token = await getBearerToken();

            // Attach the token to the request if it exists
            if (token) {
                config.headers["Authorization"] = `Bearer ${token}`;
            }

            return config;
        },
        error => {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        response => response.data,
        error => {
            logging(JSON.stringify({ error }));
            // getBearerToken({ refresh: true });
            if (error.response.data.meta.code === 403 || error.response.data.meta.code === 401) {
                localStorage.removeItem("token");
                // kdpAction.webviewClose();
            }
            if (!localStorage.getItem("token")) {
                // kdpAction.webviewClose();
            }
            const config: AxiosRequestConfig = error.config;

            const data = R.path(["response", "data"], error);

            const message = {
                url: `[${R.toUpper(config.method ?? "")}] ${config.url}`,
                status: R.pathOr(R.toLower(String(error.code)), ["response", "status"], error),
                code: R.propOr("unknown", "errorCode", data),
                message: R.propOr(error.message, "message", data),
                response: error?.response?.data?.meta
            };

            logging(JSON.stringify({ error, message }));

            console.error(
                `{error on api calling | url: ${message.url} | status: ${message.status} | code: ${message.code} | message: ${message.message}}`
            );

            // should return error for handle error
            return Promise.reject(message);
        }
    );

    const apis = {
        request: <T>(config: AxiosRequestConfig): Promise<T> => {
            return instance.request<T, T>(config);
        },
        get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
            return instance.get<T, T>(url, config);
        },
        delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
            return instance.delete<T, T>(url, config);
        },
        head: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
            return instance.head<T, T>(url, config);
        },
        options: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
            return instance.options<T, T>(url, config);
        },
        post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
            return instance.post<T, T, T>(url, data, config);
        },
        put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
            return instance.put<T, T, T>(url, data, config);
        },
        patch: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
            return instance.patch<T, T, T>(url, data, config);
        }
    };

    return { ...instance, ...apis };
};
