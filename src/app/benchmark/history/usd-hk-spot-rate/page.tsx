import "@/app/benchmark/marketdata/index.css";
import Layout from "@/components/Global/Layout";

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
    return (
        <Layout title="USD/HKD Spot Rate" content="Last revised: 13 Mar 2024">
            <div>
                <div className="w-full bg-[#F8F8F8] px-4 market-table">
                    <h3 className="market-table-title">USD/HKD Spot Rate</h3>
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
                            <tr>
                                <td>Rate</td>
                                {tableData.map(item => (
                                    <td key={item.date}>{item.date}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default HistoryUsdHkSpotRatePage;
