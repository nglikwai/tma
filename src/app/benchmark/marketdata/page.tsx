"use server";
import DollarMarketData from "@/components/DollarMarketData";
import AccordionClient from "@/components/client/AccordionClient";
import { getLatestData } from "@/service/market.service";
import { NextPage } from "next";
import { data } from "./data";

type props = {
    searchParams: URLSearchParams;
    params: any;
};
const MarketDataPage: NextPage<props> = async ({ searchParams }) => {
    const apiData = await getLatestData();

    return (
        <AccordionClient searchParams={searchParams}>
            {data(apiData).map((item: any) => (
                <DollarMarketData key={item} item={item} />
            ))}
        </AccordionClient>
    );
};
export default MarketDataPage;
