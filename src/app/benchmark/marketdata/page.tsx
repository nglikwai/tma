"use server";
import DollarMarketData from "@/components/DollarMarketData";
import AccordionClient from "@/components/client/AccordionClient";
import { NextPage } from "next";
import { data } from "./data";

type props = {
    searchParams: URLSearchParams;
    params: any;
};
const MarketDataPage: NextPage<props> = async ({ searchParams, params }) => {
    const _apiData = await fetch(process.env.NEXT_PUBLIC_BASE_API_URL + "/api/web/mkt-data/get-latest-data");
    const apiData = await _apiData.json();

    return (
        <AccordionClient searchParams={searchParams}>
            {data(apiData).map((item: any) => (
                <DollarMarketData key={item} item={item} />
            ))}
        </AccordionClient>
    );
};
export default MarketDataPage;
