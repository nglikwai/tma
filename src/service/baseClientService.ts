import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

type Props = {
    baseURL: string;
    headers?: RawAxiosRequestHeaders;
    withCredentials?: boolean;
};

export const BaseClientService = ({ baseURL, headers, withCredentials }: Props) => {
    const instance = axios.create({
        baseURL,
        // timeout: 15000,
        headers: {
            ...headers
        },
        withCredentials
    });

    instance.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            console.log("error", error.response.data);
            return Promise.reject(error.response.data.message);
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
