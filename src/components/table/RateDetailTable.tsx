import { FC } from "react";

type RateDetailTableDataType = {
    date: string;
    rate: {
        ON: string;
        "1WK": string;
        "2WK": string;
        "1M": string;
        "2M": string;
        "3M": string;
        "6M": string;
        "12M": string;
    };
};

type props = {
    data: RateDetailTableDataType[];
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
                                <th>Date</th>
                                {data.map((item: RateDetailTableDataType) => (
                                    <th key={item.date}>{item.date}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data[0].rate).map(key => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    {data.map((item: RateDetailTableDataType) => (
                                        <td key={item.date}>{item.rate[key as keyof typeof item.rate]}</td>
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
