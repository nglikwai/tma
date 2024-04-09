"use server";
import DollarMarketData from "@/components/DollarMarketData";
import AccordionClient from "@/components/client/AccordionClient";
import { NextPage } from "next";
import { Suspense } from "react";
import { data } from "./data";

const MarketDataPage: NextPage = async () => {
    return (
        <Suspense>
            <AccordionClient>
                {data.map((item: any) => (
                    <DollarMarketData key={item} item={item} />
                ))}
            </AccordionClient>
        </Suspense>
    );
};
export default MarketDataPage;
