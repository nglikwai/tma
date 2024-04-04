import "@/app/benchmark/marketdata/index.css";
import Layout from "@/components/Global/Layout";

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
    const title = "HKD Interest Settlement Rates";
    return (
        <Layout
            title={title}
            content="Last revised: 13 Mar 2024"
            steps={["Benchmark", "History of HKD Interest Settlement Rates"]}
        >
            <div>
                <div className="w-full bg-[#F8F8F8] px-4 market-table">
                    <h3 className="market-table-title">{title}</h3>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Title</th>
                                {tableData.map(item => (
                                    <th key={item.date}>{item.date}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(tableData[0].rate).map(key => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    {tableData.map(item => (
                                        <td key={item.date}>3.70929</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default HistoryUsdHkSpotRatePage;
