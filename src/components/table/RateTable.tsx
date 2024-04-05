import { FC } from "react";
import ImportantNote from "../ImportantNote";
import HsitoryLink from "./HistoryLink";

export type RateTableType = {
    type?: string;
    title: string;
    data: {
        maturity: string;
        rate: string;
    }[];

    importantNotice?: React.ReactNode;
    href: string;
};
const RateTable: FC<any> = ({ item }) => {
    return (
        <div key={item.title} className="flex flex-col items-start">
            <div className="w-full bg-[#F8F8F8] px-4 market-table">
                <h3 className="market-table-title">{item.title}</h3>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>MATURITY</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.data.map((data: any, index: number) => (
                            <tr key={index}>
                                <td>{data.maturity}</td>
                                <td>{data.rate}</td>
                            </tr>
                        ))}
                        <HsitoryLink link={item.href} />
                    </tbody>
                </table>
            </div>
            {item.importantNotice && <ImportantNote content={item.importantNotice} />}
        </div>
    );
};
export default RateTable;
