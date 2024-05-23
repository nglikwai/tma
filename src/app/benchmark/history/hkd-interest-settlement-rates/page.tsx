import "@/app/benchmark/marketdata/index.css";
import RateDetailTable from "@/components/table/RateDetailTable";
import { getHistoryData } from "@/service/market.service";
import { getRateDetailTableData } from "@/utils/formatData";
import { FC } from "react";

const HistoryHkdInterestRatePage: FC = async () => {
    const title = "HKD Interest Settlement Rates";

    const apiData = await getHistoryData("HH");

    const tableData = getRateDetailTableData(apiData, {
        ON: "HIHKDOND=",
        "1WK": "HIHKD1WD=",
        "2WK": "HIHKD2WD=",
        "1M": "HIHKD1MD=",
        "2M": "HIHKD2MD=",
        "3M": "HIHKD3MD=",
        "6M": "HIHKD6MD=",
        "12M": "HIHKD1YD="
    });

    return <RateDetailTable data={tableData} title={title} />;
};

export default HistoryHkdInterestRatePage;
