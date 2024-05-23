"use server";

import "@/app/benchmark/marketdata/index.css";
import RateDetailTable from "@/components/table/RateDetailTable";
import { getHistoryData } from "@/service/market.service";
import { getRateDetailTableData } from "@/utils/formatData";
import { NextPage } from "next";

const HistoryCnhHkInterbankPage: NextPage = async () => {
    const title = "CNH Hong Kong Interbank Offered Rate";

    const apiData = await getHistoryData("IB");

    const tableData = getRateDetailTableData(apiData, {
        ON: "HICNHONDF=",
        "1WK": "HICNH1WDF=",
        "2WK": "HICNH2WDF=",
        "1M": "HICNH1MDF=",
        "2M": "HICNH2MDF=",
        "3M": "HICNH3MDF=",
        "6M": "HICNH6MDF=",
        "12M": "HICNH1YDF="
    });

    return <RateDetailTable data={tableData} title={title} />;
};

export default HistoryCnhHkInterbankPage;
