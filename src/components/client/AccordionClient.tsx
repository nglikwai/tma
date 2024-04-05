"use client";
import { Accordion } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

type props = {
    children: React.ReactNode;
};

const AccordionClient: FC<props> = ({ children }) => {
    const query = useSearchParams();
    return (
        <Accordion allowToggle defaultIndex={query.get("index") === "Renminbi" ? 1 : 0}>
            {children}
        </Accordion>
    );
};

export default AccordionClient;
