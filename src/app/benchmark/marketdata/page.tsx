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
    console.log(params);
    return (
        <AccordionClient searchParams={searchParams}>
            {data.map((item: any) => (
                <DollarMarketData key={item} item={item} />
            ))}
        </AccordionClient>
    );
};
export default MarketDataPage;
