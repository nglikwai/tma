import { APIMarketDataType } from "@/type/data.type";
import tmaClient from "./tmaClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const sumbitComplaint = async (formData: any): Promise<APIMarketDataType | any> => {
    // const res = await fetch(`${baseUrl}/api/web/complains`, { method: "POST", body: JSON.stringify(formData) });
    // const data = await res.json();

    try {
        const data = await tmaClient.post("/api/web/complains", formData);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

const verifyEmail = async (code: string): Promise<any> => {
    try {
        const data = await tmaClient.get(`/api/web/complains/verify-complain-email?verificationCode=${code}`);
        return data;
    } catch (error) {}
};
export { sumbitComplaint, verifyEmail };
