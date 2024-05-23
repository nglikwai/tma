import "@/app/benchmark/marketdata/index.css";
import QuoteTable from "@/components/table/QuoteTable";
import { getHistoryData } from "@/service/market.service";
import { DATE_FORMAT } from "@/settings";
import { RMBMIType } from "@/type/data.type";
import moment from "moment";
import { NextPage } from "next";

const RmbBondIndicativeQuotesPage: NextPage = async () => {
    const title = "RMB Bond Indicative Quotes";
    const data = await getHistoryData<RMBMIType>("RMBBI");

    const tableData = data.map(item => ({
        date: moment(item.dt).format(DATE_FORMAT),
        href: item.excelUrl
    }));
    return <QuoteTable title={title} data={tableData} />;
};

export default RmbBondIndicativeQuotesPage;
