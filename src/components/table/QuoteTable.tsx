import { FC } from "react";

type props = {
    data: any;
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
                            <th>Title</th>
                            {data.map((item: any) => (
                                <th key={item.date}>{item.date}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PDF</td>
                            {data.map((item: any) => (
                                <td key={item.date}>
                                    <a className="link" href="https://www.tma.org.hk/RMBFile/20231114_TMA_RMB_Bond_Indicative_Quotes.xls">
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
