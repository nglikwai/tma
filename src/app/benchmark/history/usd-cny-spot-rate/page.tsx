import "@/app/benchmark/marketdata/index.css";
import SpotRateTable from "@/components/table/SpotRateTable";
import { getHistoryData } from "@/service/market.service";
import { fetchAndFormatSpotRateData } from "@/utils/formatData";
import { NextPage } from "next";

const HistoryUsdCnySpotRatePage: NextPage = async () => {
    const tableData = await fetchAndFormatSpotRateData(getHistoryData("SC"));
    return <SpotRateTable data={tableData} title="USD/CNY(HK) Spot Rate" />;
};

export default HistoryUsdCnySpotRatePage;
