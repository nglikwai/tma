import React, { FC } from "react";
import ImportantNote from "../ImportantNote";
import HsitoryLink from "./HistoryLink";
import IndexTableUnit from "./IndexTableUnit";

export type IndexTableType = {
    type?: string;
    title: string;
    data: {
        date: { date: string; index: string }[];
        average: { day: number; backward: string; index: string }[];
        honia: {
            honiaIndex: string;
            honiaDate: string;
        };
    };
    importantNotice?: React.ReactNode;
    href?: string;
};

const IndexTable: FC<{ item: IndexTableType | any }> = ({ item }) => {
    return (
        <div key={item.title} className="flex flex-col items-start">
            <IndexTableUnit
                item={item}
                child={
                    <tbody>
                        <HsitoryLink link={item.href} />
                    </tbody>
                }
            />
            <ImportantNote content={item.importantNotice} />
        </div>
    );
};
export default IndexTable;
