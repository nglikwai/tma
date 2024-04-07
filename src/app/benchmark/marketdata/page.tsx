"use server";
import BenchMarkLayout from "@/components/BenchMarkLayout";
import DollarMarketData from "@/components/DollarMarketData";
import AccordionClient from "@/components/client/AccordionClient";
import { NextPage } from "next";
import { Suspense } from "react";
import { data } from "./data";

const MarketDataPage: NextPage = async () => {
    return (
        <BenchMarkLayout title="Market Data">
            {/* <div className="h-10 bg-[#E6F7FF] text-[#000000D9] text-[14px] flex items-center justify-center">
                    US new home construction surged last month, as mortgage rates stayed high
                </div> */}
            <Suspense>
                <AccordionClient>
                    {data.map((item: any) => (
                        <DollarMarketData key={item} item={item} />
                    ))}
                </AccordionClient>
            </Suspense>
        </BenchMarkLayout>
    );
};
export default MarketDataPage;
