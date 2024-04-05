import { marketDataType } from "@/app/benchmark/marketdata/data";
import "@/app/benchmark/marketdata/index.css";
import { AccordionPanel } from "@chakra-ui/react";
import { FC } from "react";
import AccordionItemWrapper from "./AccordionItemWrapper";
import IndexTable, { IndexTableType } from "./table/IndexTable";
import RateTable, { RateTableType } from "./table/RateTable";
import SimpleTable, { SimpleTableType } from "./table/SimpleTable";
type props = {
    item: marketDataType;
};

const DollarMarketData: FC<props> = ({ item }) => {
    const getTable = (table: SimpleTableType | RateTableType | IndexTableType) => {
        switch (table.type) {
            case "simple":
                return <SimpleTable item={table} />;
            case "rate":
                return <RateTable item={table} />;
            case "index":
                return <IndexTable item={table} />;
        }
    };
    return (
        <AccordionItemWrapper title={item.title}>
            <AccordionPanel className="!p-4">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                    {item.table.map(table => (
                        <div key={table.title}>{getTable(table)}</div>
                    ))}
                </div>
            </AccordionPanel>
        </AccordionItemWrapper>
    );
};

export default DollarMarketData;
