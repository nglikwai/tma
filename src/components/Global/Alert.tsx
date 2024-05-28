import { FC } from "react";

type props = {
    conent: string;
    bg?: string;
};
const Alert: FC<props> = ({ conent, bg = "#E6F7FF" }) => {
    return (
        <div
            className="h-10  text-[#000000D9] text-[14px] flex items-center justify-center sm:p-2 sm:h-auto"
            style={{ backgroundColor: bg }}
        >
            {conent}
        </div>
    );
};

export default Alert;
