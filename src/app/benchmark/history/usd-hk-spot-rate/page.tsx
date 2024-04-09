import "@/app/benchmark/marketdata/index.css";
import SpotRateTable from "@/components/table/SpotRateTable";
import { NextPage } from "next";

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
const HistoryUsdHkSpotRatePage: NextPage = () => {
    return (
        // <Layout
        //     title="USD/HKD Spot Rate"
        //     content="Last revised: 13 Mar 2024"
        //     steps={["Benchmark", "History of USD and HKD Spot Rate"]}
        // >
        <SpotRateTable data={tableData} />
        // </Layout>
    );
};

export default HistoryUsdHkSpotRatePage;
