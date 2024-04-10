import { Accordion } from "@chakra-ui/react";
import { FC } from "react";

type props = {
    children: React.ReactNode;
    searchParams: any;
};

const AccordionClient: FC<props> = ({ children, searchParams }) => {
    const getIndex = () => {
        switch (searchParams.index) {
            case "Renminbi":
                return [1];
            case "Hong Kong Dollar":
                return [0];
            default:
                return [0, 1];
        }
    };
    return (
        // <Accordion allowToggle allowMultiple defaultIndex={query.get("index") === "Renminbi" ? 1 : 0}>
        <Accordion allowMultiple defaultIndex={getIndex()}>
            {children}
        </Accordion>
    );
};

export default AccordionClient;
