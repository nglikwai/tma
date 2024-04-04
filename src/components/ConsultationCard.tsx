import { consultationStatus } from "@/type/consultation";
import { FC } from "react";

type props = {
    status: consultationStatus;
};

const style = {
    Closed: {
        color: "#787878",
        backgroundColor: "#EEEEEE"
    },
    Progress: {
        color: "#3D8700",
        backgroundColor: "#EEF7E2"
    }
};
const ConsultationCard: FC<props> = ({ status }) => {
    return (
        <div className="flex flex-col gap-2 items-start py-4 last:border-b-0 group">
            <div style={style[status]} className="rounded-[4px] text-[14px] leading-[21px] py-[2px] px-[6px] inline-block">
                {status}
            </div>
            <p className="group-hover:underline cursor-pointer">
                Industry stakeholders consultation on issues relating to the alternative reference rate (“ARR”) for Hong Kong
                Interbank Offered Rate
            </p>
            <button className="text-[#0053B0] flex items-center gap-2 group-hover:text-[#0078FF]">
                <span>Conclusion</span>
                <img src="/images/icon-link.svg" alt="" />
            </button>
        </div>
    );
};

export default ConsultationCard;
