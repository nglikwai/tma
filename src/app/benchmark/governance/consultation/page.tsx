// "use server";
import ConsultationCard from "@/components/ConsultationCard";
import DropMenu from "@/components/DropMenu";
import { consultationStatus } from "@/type/consultation.type";
import { NextPage } from "next";
import { Suspense } from "react";

type props = {
    searchParams: any;
};

const ConsultationPage: NextPage<props> = async ({ searchParams }) => {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-[700] text-[26px] leading-[39px]">Consultation and Survey</h1>
                <Suspense>
                    <DropMenu
                        menu={[
                            { key: "all", title: "All" },
                            {
                                key: "progress",
                                title: "Progress"
                            },
                            {
                                key: "closed",
                                title: "Closed"
                            }
                        ]}
                    />
                </Suspense>
            </div>
            <div className="[&>div]:border-b-[#D9D9D9] [&>div]:border-b ">
                {[
                    consultationStatus.progress,
                    consultationStatus.closed,
                    consultationStatus.closed,
                    consultationStatus.progress,
                    consultationStatus.closed
                ]
                    .filter(i => {
                        if (searchParams.filter === "all" || !searchParams.filter) {
                            return true;
                        }
                        return i.toLowerCase() === searchParams.filter;
                    })
                    .map(item => (
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
    );
};
export default ConsultationPage;
