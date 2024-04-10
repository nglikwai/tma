"use client";
import { AccordionButton, AccordionItem } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import CrossIcon from "./icon/CrossIcon";
type props = {
    children: React.ReactNode;
    title: string;
    rememberIndex?: boolean;
};
const AccordionItemWrapper: FC<props> = ({ children, title, rememberIndex }) => {
    const router = useRouter();
    const handleOnClick = (isExpanded: boolean) => {
        if (isExpanded) return;
        rememberIndex && router.push(`?index=${title}`);
    };
    return (
        <AccordionItem borderColor={"#DDE6F1"}>
            {({ isExpanded }) => (
                <>
                    <div
                        onClick={() => handleOnClick(isExpanded)}
                        className={`bg-[#0053B0] h-[59px] sm:h-auto px-4 sm:px-0 font-[700] flex items-center text-white transition ${isExpanded ? "accordion-active" : "accordion-inactive"}`}
                    >
                        <div className="w-full">
                            <AccordionButton className="hover:!bg-transparent">
                                <div className="flex items-center gap-4">
                                    <div className="w-4">
                                        <CrossIcon isExpanded={isExpanded} />
                                    </div>
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
