import { FC } from "react";

type props = {
    data: { date: string; href: string }[];
    title: string;
};
const QuoteTable: FC<props> = ({ data, title }) => {
    return (
        <div>
            <div className="w-full bg-[#F8F8F8] px-4 market-table two-row-table">
                <h3 className="market-table-title">{title}</h3>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Date</th>
                            {data.map((item: any) => (
                                <th key={item.date}>{item.date}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Quotes</td>
                            {data.map((item: any) => (
                                <td key={item.date}>
                                    <a className="link" href={item.href}>
                                        Download
                                    </a>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuoteTable;
