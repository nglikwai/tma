"use client";
import { AccordionButton, AccordionItem } from "@chakra-ui/react";
import { FC } from "react";
import CrossIcon from "./icon/CrossIcon";
type props = {
    children: React.ReactNode;
};
const AccordionItemWrapper: FC<props> = ({ children }) => {
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
                                    {/* <img
                                        src="/images/icon-cross.svg"
                                        style={{ transform: isExpanded ? "rotate(405deg)" : "rotate(90deg)", transition: "0.6s" }}
                                    ></img> */}
                                </div>
                                Hong Kong Dollar
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
