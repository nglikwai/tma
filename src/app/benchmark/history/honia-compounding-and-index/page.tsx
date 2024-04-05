import "@/app/benchmark/marketdata/index.css";
import Layout from "@/components/Global/Layout";

const table4 = {
    title: "HONIA Compounding and Index",
    href: "history/honia-compounding-and-index",
    data: {
        date: [
            { date: "13/12/2023 to 13/3/2024", index: "4.14613%" },
            { date: "13/9/2023 to 13/3/2024", index: "4.34904%" }
        ],
        average: [
            {
                day: 30,
                backward: "11/2/2024",
                index: "3.97732%"
            },
            {
                day: 90,
                backward: "13/12/2023",
                index: "4.14613%"
            },
            {
                day: 180,
                backward: "14/9/2023",
                index: "4.34904%"
            }
        ]
    }
};
const HistoryUsdHkSpotRatePage: React.FC = () => {
    const title = "HONIA Compounding and Index";
    return (
        <Layout title={title} content="Last revised: 13 Mar 2024" steps={["Benchmark", "HONIA Compounding and Index"]}>
            <div className="grid grid-cols-2 gap-6 bg-[#F8F8F8] px-4">
                {[1, 2, 3, 4, 5].map(item => (
                    <div className="w-full bg-[#F8F8F8] market-table">
                        <h3 className="market-table-title">03-11-2024</h3>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>Index</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table4.data.date.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.date}</td>
                                        <td>{data.index}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th>AVERAGE</th>
                                    <th>Index</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table4.data.average.map((data, index) => (
                                    <tr key={index}>
                                        <td>
                                            <span>{data.day} day </span>
                                            <span className="text-[12px]">(backward to {data.backward})</span>
                                        </td>
                                        <td>{data.index}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <thead>
                                <tr>
                                    <th>HONIA Index (Since 5 Apr 2016)</th>
                                    <th>1.07705805</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default HistoryUsdHkSpotRatePage;
