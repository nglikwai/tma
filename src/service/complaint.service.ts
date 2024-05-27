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

export { sumbitComplaint };
