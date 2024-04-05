import "@/app/benchmark/marketdata/index.css";
import Layout from "@/components/Global/Layout";
import RateDetailTable from "@/components/table/RateDetailTable";

const tableData = [
    {
        date: "03-11-2024",
        rate: {
            ON: 3.70929,
            "1WK": 3.70929,
            "2WK": 3.70929,
            "1M": 3.70929,
            "2M": 3.70929,
            "3M": 3.70929,
            "6M": 3.70929,
            "12M": 3.70929
        }
    },
    {
        date: "03-08-2024",
        rate: {
            ON: 3.70929,
            "1WK": 3.70929,
            "2WK": 3.70929,
            "1M": 3.70929,
            "2M": 3.70929,
            "3M": 3.70929,
            "6M": 3.70929,
            "12M": 3.70929
        }
    },
    {
        date: "03-07-2024",
        rate: {
            ON: 3.70929,
            "1WK": 3.70929,
            "2WK": 3.70929,
            "1M": 3.70929,
            "2M": 3.70929,
            "3M": 3.70929,
            "6M": 3.70929,
            "12M": 3.70929
        }
    },
    {
        date: "03-06-2024",
        rate: {
            ON: 3.70929,
            "1WK": 3.70929,
            "2WK": 3.70929,
            "1M": 3.70929,
            "2M": 3.70929,
            "3M": 3.70929,
            "6M": 3.70929,
            "12M": 3.70929
        }
    },
    {
        date: "03-05-2024",
        rate: {
            ON: 3.70929,
            "1WK": 3.70929,
            "2WK": 3.70929,
            "1M": 3.70929,
            "2M": 3.70929,
            "3M": 3.70929,
            "6M": 3.70929,
            "12M": 3.70929
        }
    }
];
const HistoryUsdHkSpotRatePage: React.FC = () => {
    const title = "CNH Hong Kong Interbank Offered Rate";
    return (
        <Layout
            title={title}
            content="Last revised: 13 Mar 2024"
            steps={["Benchmark", "History of CNH Hong Kong Interbank Offered Rate"]}
        >
            <RateDetailTable data={tableData} title={title} />
        </Layout>
    );
};

export default HistoryUsdHkSpotRatePage;
