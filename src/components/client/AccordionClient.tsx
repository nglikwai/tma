"use client";
import { Accordion } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

type props = {
    children: React.ReactNode;
};

const AccordionClient: FC<props> = ({ children }) => {
    const query = useSearchParams();

    const getIndex = () => {
        switch (query.get("index")) {
            case "Renminbi":
                return 1;
            case "Hong Kong Dollar":
                return 0;
            default:
                return [0, 1];
        }
    };
    return (
        // <Accordion allowToggle allowMultiple defaultIndex={query.get("index") === "Renminbi" ? 1 : 0}>
        <Accordion allowToggle allowMultiple defaultIndex={getIndex()}>
            {children}
        </Accordion>
    );
};

export default AccordionClient;
