import "@/app/benchmark/marketdata/index.css";
import RateDetailTable from "@/components/table/RateDetailTable";
import { getHistoryData } from "@/service/market.service";
import { MarketDataType } from "@/type/data.type";
import moment from "moment";
import { FC } from "react";

const HistoryUsdHkSpotRatePage: FC = async () => {
    const title = "HKD Interest Settlement Rates";

    const apiData = await getHistoryData("HH");

    const resultGroupByDate: { [key: string]: MarketDataType[] } = {};

    apiData.forEach(item => {
        if (resultGroupByDate[item.fixDateTime as keyof typeof resultGroupByDate]) {
            resultGroupByDate[item.fixDateTime as keyof typeof resultGroupByDate].push(item);
        } else {
            resultGroupByDate[item.fixDateTime as keyof typeof resultGroupByDate] = [item];
        }
    });

    const tableData = Object.keys(resultGroupByDate).map(key => ({
        date: moment(key).format("DD-MM-YYYY"),
        rate: (() => {
            const value = (fixCode: string) =>
                parseFloat(resultGroupByDate[key].find(item => item.mktFixcode === fixCode)?.mktFixvalue as string).toFixed(5);

            return {
                ON: value("HIHKDOND="),
                "1WK": value("HIHKD1WD="),
                "2WK": value("HIHKD2WD="),
                "1M": value("HIHKD1MD="),
                "2M": value("HIHKD2MD="),
                "3M": value("HIHKD3MD="),
                "6M": value("HIHKD6MD="),
                "12M": value("HIHKD1YD=")
            };
        })()
    }));
    return <RateDetailTable data={tableData} title={title} />;
};

export default HistoryUsdHkSpotRatePage;
