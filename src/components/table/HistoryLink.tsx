import Link from "next/link";
import { FC } from "react";

const HsitoryLink: FC<{ link: string }> = ({ link }) => {
    return (
        <tr className="justify-end">
            <td colSpan={2} className="">
                <Link href={link} className="text-[14px] text-[#0053B0] font-[700] flex gap-3 justify-end group">
                    Historical Rates
                    <img
                        src="/images/icon-arrow.svg"
                        alt=""
                        className="h-[8px] w-[30px] mt-[5px] group-hover:translate-x-3 transition-transform duration-300"
                    />
                </Link>
            </td>
        </tr>
    );
};

export default HsitoryLink;
