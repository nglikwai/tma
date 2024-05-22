import "@/app/benchmark/marketdata/index.css";
import SpotRateTable from "@/components/table/SpotRateTable";
import { getHistoryData } from "@/service/market.service";
import { fetchAndFormatSpotRateData } from "@/utils/formatData";
import { NextPage } from "next";

const HistoryUsdHkSpotRatePage: NextPage = async () => {
    const tableData = await fetchAndFormatSpotRateData(getHistoryData("SU"));
    return <SpotRateTable data={tableData} title="USD/HKD Spot Rate" />;
};

export default HistoryUsdHkSpotRatePage;
