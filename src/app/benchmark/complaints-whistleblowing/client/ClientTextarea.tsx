"use client";

import { useState } from "react";

const ClientTextarea = () => {
    const [text, setText] = useState("");
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (text.length > 1000) return;
        setText(e.target.value);
    };
    return (
        <div className="flex flex-col items-end grow gap-[10px] sm:w-full">
            <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={1000}
                className="!h-[76px] !py-[5px] !px-3 w-full"
                value={text}
                onChange={handleInput}
            ></textarea>
            <span className="text-[14px] text-[#BFBFBF]">{text.length}/1000</span>
        </div>
    );
};

export default ClientTextarea;
