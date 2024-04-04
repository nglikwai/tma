"use client";
import { Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import { FC } from "react";

type props = {
    content: React.ReactNode;
};
const ImportantNote: FC<props> = ({ content }) => {
    return (
        <Popover arrowSize={10}>
            <PopoverTrigger>
                <div className="flex items-center gap-2 py-2">
                    <img src="/images/icon-important.svg" alt="" />
                    <button className="important-note">Important notice</button>
                </div>
            </PopoverTrigger>
            <PopoverContent width={485} padding={4}>
                <PopoverArrow />
                <PopoverBody padding={0} fontSize={14}>
                    {content}
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};
export default ImportantNote;
