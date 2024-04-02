"use client";
import { AccordionButton, AccordionItem } from "@chakra-ui/react";
import { FC } from "react";
import CrossIcon from "./icon/CrossIcon";
type props = {
    children: React.ReactNode;
    title: string;
};
const AccordionItemWrapper: FC<props> = ({ children, title }) => {
    console.log("title", title);
    return (
        <AccordionItem>
            {({ isExpanded }) => (
                <>
                    <div
                        className="bg-[#0053B0] h-[59px] px-4 font-[700] flex items-center text-white"
                        style={{ color: isExpanded ? "#fff" : "#212121", background: isExpanded ? "#0053B0" : "transparent" }}
                    >
                        <h2 className="text-[18px]">
                            <AccordionButton className="hover:!bg-transparent">
                                <div className="mr-4">
                                    <CrossIcon isExpanded={isExpanded} />
                                </div>
                                {title}
                            </AccordionButton>
                        </h2>
                    </div>
                    {children}
                </>
            )}
        </AccordionItem>
    );
};

export default AccordionItemWrapper;
