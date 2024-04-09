import "@/app/benchmark/marketdata/index.css";
import SpotRateTable from "@/components/table/SpotRateTable";
import { NextPage } from "next";

const HistoryUsdCnySpotRatePage: NextPage = () => {
    return (
        // <Layout
        //     title="USD/CNY(HK) Spot Rate"
        //     content="Last revised: 13 Mar 2024"
        //     steps={["Benchmark", "History of USD/CNY(HK) Spot Rate"]}
        // >
        <SpotRateTable data={tableData} title="USD/CNY(HK) Spot Rate" />
        // </Layout>
    );
};

export default HistoryUsdCnySpotRatePage;

const tableData = [
    {
        date: "03-11-2024",
        rate: 3.70929
    },
    {
        date: "03-08-2024",
        rate: 3.70929
    },
    {
        date: "03-07-2024",
        rate: 3.70929
    },
    {
        date: "03-06-2024",
        rate: 3.70929
    },
    {
        date: "03-05-2024",
        rate: 3.70929
    }
];
