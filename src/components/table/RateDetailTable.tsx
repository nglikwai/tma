import { FC } from "react";

type props = {
    data: any;
    title: string;
};
const RateDetailTable: FC<props> = ({ data, title }) => {
    return (
        <div>
            <div className="w-full bg-[#F8F8F8] px-4 market-table multi-row-table">
                <h3 className="market-table-title">{title}</h3>
                <div className="multi-row-table-scroll">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Title</th>
                                {data.map((item: any) => (
                                    <th key={item.date}>{item.date}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data[0].rate).map(key => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    {data.map((item: any) => (
                                        <td key={item.date}>3.70929</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RateDetailTable;
