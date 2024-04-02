"use client";

import { usePathname } from "next/navigation";

const StepMenu = () => {
    const pathname = usePathname();
    let name = pathname.split("/").pop();

    if (name) {
        name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    return (
        <div className="h-[40px] text-[12px] max-container">
            <span className="text-[#969696]">Home</span>
            <span className="text-[#969696] px-1"> {">"}</span>
            <span className="text-[#0053B0]">{name}</span>
        </div>
    );
};

export default StepMenu;
