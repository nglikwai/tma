"use client";
import { AccordionButton, AccordionItem } from "@chakra-ui/react";
import { FC } from "react";
import CrossIcon from "./icon/CrossIcon";
type props = {
    children: React.ReactNode;
    title: string;
};
const AccordionItemWrapper: FC<props> = ({ children, title }) => {
    return (
        <AccordionItem borderColor={'#DDE6F1'}>
            {({ isExpanded }) => (
                <>
                    <div
                        className="bg-[#0053B0] h-[59px] px-4 font-[700] flex items-center text-white"
                        style={{ color: isExpanded ? "#fff" : "#212121", background: isExpanded ? "#0053B0" : "transparent" }}
                    >
                        <div className="w-full">
                            <AccordionButton className="hover:!bg-transparent">
                                <div className="flex items-center gap-4">
                                    <CrossIcon isExpanded={isExpanded} />
                                    <h3 className="text-[18px]">{title}</h3>
                                </div>
                            </AccordionButton>
                        </div>
                    </div>
                    {children}
                </>
            )}
        </AccordionItem>
    );
};

export default AccordionItemWrapper;
