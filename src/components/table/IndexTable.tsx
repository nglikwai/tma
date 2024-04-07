import React, { FC } from "react";
import ImportantNote from "../ImportantNote";
import HsitoryLink from "./HistoryLink";

export type IndexTableType = {
    type?: string;
    title: string;
    data: {
        date: { date: string; index: string }[];
        average: { day: number; backward: string; index: string }[];
    };
    importantNotice: React.ReactNode;
    href: string;
};

const IndexTable: FC<any> = ({ item }) => {
    return (
        <div key={item.title} className="flex flex-col items-start">
            <div className="w-full bg-[#F8F8F8] px-4 market-table">
                <h3 className="market-table-title">{item.title}</h3>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>Index</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.data.date.map((data: any, index: number) => (
                            <tr key={index}>
                                <td>{data.date}</td>
                                <td>{data.index}</td>
                            </tr>
                        ))}
                    </tbody>
                    <thead>
                        <tr>
                            <th>average</th>
                            <th>Index</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.data.average.map((data: any, index: number) => (
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
                    <tbody>
                        <HsitoryLink link={item.href} />
                    </tbody>
                </table>
            </div>
            <ImportantNote content={item.importantNotice} />
        </div>
    );
};
export default IndexTable;