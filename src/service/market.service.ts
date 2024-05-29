import { APIMarketDataType, MarketDataType } from "@/type/data.type";
import tmaClient from "./tmaClient";

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

const getLatestData = async (): Promise<APIMarketDataType> => {
    const { data }: { data: APIMarketDataType } = await tmaClient.get("/api/web/mkt-data/get-latest-data");
    // const res = await fetch(`${baseUrl}/api/web/mkt-data/get-latest-data`, { next: { tags: ["market-data"] } });
    // const data = await res.json();
    return data;
};

const getHistoryData = async <T = MarketDataType>(fixType: string): Promise<T[]> => {
    // const { data }: { data: T[] } = await tmaClient.get(`/api/web/mkt-data/get-historical-data?fixType=${fixType}`);
    const res = await fetch(`${baseUrl}/api/web/mkt-data/get-historical-data?fixType=${fixType}`, {
        cache: "no-store"
    });
    const data = await res.json();
    return data;
};

// const getLatestData = async (): Promise<APIMarketDataType> => {
//     const res = await fetch(`${baseUrl}/api/web/mkt-data/get-latest-data`);
//     const data = await res.json();
//     return data;
// };

export { getHistoryData, getLatestData };
