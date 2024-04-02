"use server";
import BenchMarkLayout from "@/components/BenchMarkLayout";
import DollarMarketData from "@/components/DollarMarketData";
import { Accordion } from "@chakra-ui/react";
import { NextPage } from "next";

const MarketDataPage: NextPage = async () => {
    return (
        <BenchMarkLayout title="Market Data">
            {/* <div className="h-10 bg-[#E6F7FF] text-[#000000D9] text-[14px] flex items-center justify-center">
                    US new home construction surged last month, as mortgage rates stayed high
                </div> */}
            <Accordion allowToggle defaultIndex={0}>
                {[1, 2].map(item => (
                    <DollarMarketData key={item} />
                ))}
            </Accordion>
        </BenchMarkLayout>
    );
};
export default MarketDataPage;
