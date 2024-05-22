import "@/app/benchmark/marketdata/index.css";
import OvernightIndexTable from "@/components/table/OvernightIndexTable";
import { getHistoryData } from "@/service/market.service";
import { fetchAndFormatSpotRateData } from "@/utils/formatData";
import { NextPage } from "next";

const HistoryUsdHkSpotRatePage: NextPage = async () => {
    const title = "HKD Overnight Index Average (HONIA)";
    const tableData = await fetchAndFormatSpotRateData(getHistoryData("HO"));

    return <OvernightIndexTable title={title} data={tableData} />;
};

export default HistoryUsdHkSpotRatePage;
