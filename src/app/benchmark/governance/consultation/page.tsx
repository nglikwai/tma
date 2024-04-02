"use server";
import ConsultationCard from "@/components/ConsultationCard";
import GovernanceLayout from "@/components/GovernanceLayout";
import { consultationStatus } from "@/type/consultation";
import { NextPage } from "next";

const ConsultationPage: NextPage = async () => {
    return (
        <GovernanceLayout>
            <>
                <div className="flex justify-between items-center">
                    <h1 className="font-[700] text-[26px] leading-[39px]">Consultation and Survey</h1>
                    <select name="" id="">
                        {[
                            { key: "all", title: "All" },
                            {
                                key: "progress",
                                title: "Progress"
                            },
                            {
                                key: "closed",
                                title: "Closed"
                            }
                        ].map(item => (
                            <option key={item.key} value={item.key}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="[&>div]:border-b-[#D9D9D9] [&>div]:border-b ">
                    {[
                        consultationStatus.progress,
                        consultationStatus.closed,
                        consultationStatus.closed,
                        consultationStatus.progress,
                        consultationStatus.closed
                    ].map(item => (
                        <ConsultationCard key={item} status={item} />
                    ))}
                </div>
                <button className="text-[#0053B0] bg-[#F3F8FF] py-2">READ MORE</button>
                <p>
                    Suggestions/Opinion from general public are welcome. (Email to{" "}
                    <a href="mailto:tma@tma.org.hk" className="text-[#0053B0]">
                        tma@tma.org.hk
                    </a>
                    )
                </p>
            </>
        </GovernanceLayout>
    );
};
export default ConsultationPage;
