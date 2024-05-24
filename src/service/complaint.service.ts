import { APIMarketDataType } from "@/type/data.type";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const sumbitComplaint = async (formData: any): Promise<APIMarketDataType> => {
    console.log("formData", formData);
    const res = await fetch(`${baseUrl}/api/web/complains`, { method: "POST", body: JSON.stringify(formData) });
    const data = await res.json();
    return data;
};

export { sumbitComplaint };