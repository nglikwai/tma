"use server";
import GovernanceLayout from "@/components/GovernanceLayout";
import { NextPage } from "next";
import { FC } from "react";

const SpecificationsPage: NextPage = async () => {
    return (
        <GovernanceLayout>
            <>
                <div className="flex flex-col gap-6">
                    <h3 className="text-[26px]">Hong Kong Dollar</h3>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        {[1, 2, 3, 4, 5].map(item => (
                            <SpecificationCard key={item} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-[26px]">Hong Kong Dollar</h3>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        {[1, 2, 3, 4, 5].map(item => (
                            <SpecificationCard key={item} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="text-[26px]">Hong Kong Dollar</h3>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        {[1, 2, 3, 4, 5].map(item => (
                            <SpecificationCard key={item} />
                        ))}
                    </div>
                </div>
            </>
        </GovernanceLayout>
    );
};

const SpecificationCard: FC<any> = () => {
    return (
        <div className="flex gap-4">
            <img src="/images/icon-pdf.svg" alt="" />
            <div className="flex flex-col gap-2">
                <span>HKD Interest Settlement Rates (HKD HIBOR)</span>

                <a href="" className="flex text-[#0053B0] gap-2">
                    <span>Download (367KB)</span>
                    <img src="/images/icon-link.svg" alt="download" />
                </a>
            </div>
        </div>
    );
};
export default SpecificationsPage;
