import "@/app/benchmark/marketdata/index.css";
import Layout from "@/components/Global/Layout";
import OvernightIndexTable from "@/components/table/OvernightIndexTable";

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
const HistoryUsdHkSpotRatePage: React.FC = () => {
    const title = "HKD Overnight Index Average (HONIA)";
    return (
        // <Layout
        //     title={title}
        //     content="Last revised: 13 Mar 2024"
        //     steps={["Benchmark", "History of HKD Overnight Index Average (HONIA)"]}
        // >
            <OvernightIndexTable title={title} data={tableData} />
        // </Layout>
    );
};

export default HistoryUsdHkSpotRatePage;
