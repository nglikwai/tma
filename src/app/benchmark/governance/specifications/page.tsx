"use server";
import { NextPage } from "next";
import { FC } from "react";

const SpecificationsPage: NextPage = async () => {
    return (
        <>
            {data.map(cur => (
                <div className="flex flex-col gap-6">
                    <h3 className="text-[26px]">{cur.title}</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-1 gap-x-8 gap-y-6">
                        {cur.content.map(item => (
                            <SpecificationCard key={item} item={item} />
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

const SpecificationCard: FC<any> = ({ item }) => {
    return (
        <a href={item.href} target="_blank" className="flex gap-4 group cursor-pointer items-start">
            <img src="/images/icon-pdf.svg" alt="icon-pdf" />
            <div className="flex flex-col gap-2">
                <span className="group-hover:underline">{item.title}</span>

                <div className="flex text-[#0053B0] group-hover:text-[#0078FF] gap-2">
                    <span>Download (367KB)</span>
                    <img src="/images/icon-link.svg" alt="download" />
                </div>
            </div>
        </a>
    );
};
export default SpecificationsPage;

const data = [
    {
        title: "Hong Kong Dollar",
        content: [
            {
                title: "USD / HKD Spot Rate",
                href: "https://www.tma.org.hk/Specifications_of_Spot_USDHKD_Rate.pdf?252"
            },
            {
                title: "HKD Interest Settlement Rates (HKD HIBOR)",
                href: "https://www.hkab.org.hk/files/page/interest-rates/1/Specifications_of_HKD_HIBOR_(3_Oct_2023)-1696685287.pdf"
            },
            {
                title: "HKD Overnight Index Average",
                href: "https://www.tma.org.hk/Specifications_of_HONIA.pdf?252"
            },
            {
                title: "TMA-recommended convention templates referenced to HONIA",
                href: "https://www.tma.org.hk/TMA-recommended_convention_templates.pdf"
            }
        ]
    },
    {
        title: "Renminbi",
        content: [
            {
                title: " USD/CNY(HK) Spot Rate",
                href: "https://www.tma.org.hk/Specifications_of_Spot_USDCNY(HK)_Rate.pdf?252"
            },
            {
                title: "CNH Hong Kong Interbank Offered Rate (CNH HIBOR)",
                href: "https://www.tma.org.hk/Specifications_of_CNH_HIBOR.pdf?252"
            },
            {
                title: "RMB Bond Indicative Quotes",
                href: "https://www.tma.org.hk/Specifications_of_the_TMA_RMBBondQuotes.pdf?252"
            }
        ]
    },
    {
        title: "Others",
        content: [
            {
                title: "Error Correction Policy",
                href: "https://www.tma.org.hk/download/TMA_Error_correction_policy.pdf?252"
            },
            {
                title: "Special Weather Arrangements",
                href: "https://www.tma.org.hk/Special_Weather_Arrangements_for_TMA_benchmarks.pdf?252"
            }
        ]
    }
];
