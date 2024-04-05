import React, { FC } from "react";
import ImportantNote from "../ImportantNote";
import HsitoryLink from "./HistoryLink";

export type SimpleTableType = {
    type?: string;
    title: string;
    importantNotice: React.ReactNode;
    href: string;
};
const SimpleTable: FC<any> = ({ item }) => {
    return (
        <div key={item.title} className="flex flex-col items-start">
            <div className="bg-[#F8F8F8] px-4 market-table">
                <h3 className="market-table-title">{item.title}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td className="!text-start">12/3/2024</td>
                            <td className="!text-end">7.8223</td>
                        </tr>
                        <HsitoryLink link={item.href} />
                    </tbody>
                </table>
            </div>
            <ImportantNote content={item.importantNotice} />
        </div>
    );
};

export default SimpleTable;
