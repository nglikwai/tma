import "@/app/benchmark/marketdata/index.css";
import { AccordionPanel } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import AccordionItemWrapper from "./AccordionItemWrapper";
import ImportantNote from "./ImportantNote";
type props = {
    title: string;
};

const table3 = {
    title: "HKD Interest Settlement Rates",
    href: "history/hkd-interest-settlement-rates",
    data: [
        { maturity: "ON", rate: "7.8223" },
        { maturity: "1W", rate: "7.8223" },
        { maturity: "1M", rate: "7.8223" },
        { maturity: "2M", rate: "7.8223" },
        { maturity: "3M", rate: "7.8223" },
        { maturity: "6M", rate: "7.8223" },
        { maturity: "9M", rate: "7.8223" },
        { maturity: "12M", rate: "7.8223" }
    ]
};
const table4 = {
    title: "HONIA Compounding and Index",
    href: "history/honia-compounding-and-index",
    data: {
        date: [
            { date: "13/12/2023 to 13/3/2024", index: "4.14613%" },
            { date: "13/9/2023 to 13/3/2024", index: "4.34904%" }
        ],
        average: [
            {
                day: 30,
                backward: "11/2/2024",
                index: "3.97732%"
            },
            {
                day: 90,
                backward: "13/12/2023",
                index: "4.14613%"
            },
            {
                day: 180,
                backward: "14/9/2023",
                index: "4.34904%"
            }
        ]
    }
};
const DollarMarketData: FC<props> = ({ title }) => {
    return (
        <AccordionItemWrapper title={title}>
            <AccordionPanel className="!p-4">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                    {[
                        {
                            title: "USD/HKD Spot Rate",
                            href: "history/usd-hk-spot-rate",
                            content: (
                                <p>
                                    With effect from 1 August 2016, the official name of the Spot USD/HKD Fixing has been amended
                                    to USD/HKD Spot Rate. The benchmark is calculated based on actual transactions executed in a
                                    window of 30 minutes centred at 11am. Details on the change in calculation methodology can be
                                    found at{" "}
                                    <a
                                        className="text-[#0053B0]"
                                        href="https://www.tma.org.hk/en_newsevents_n1.aspx?Back=T&newsId=282"
                                        target="_blank"
                                    >
                                        press release
                                    </a>
                                    . This content may not be reproduced, altered, transmitted, disseminated, distributed or
                                    redistributed, without prior written permission from TMA.
                                </p>
                            )
                        },
                        {
                            title: "HKD Overnight Index Average (HONIA)",
                            href: "history/hkd-overnight-index-average",
                            content: (
                                <p>
                                    The TMA took up the ownership and administration of the HKD Overnight Index Swaps (OIS) from
                                    the Hong Kong Inter-Dealer Brokers Association (HKIDBA) with effect from 5 April 2016. The
                                    benchmark has been renamed as HKD Overnight Index Average (HONIA).
                                </p>
                            )
                        }
                    ].map((item, index) => (
                        <div key={item.title} className="flex flex-col items-start">
                            <div className="bg-[#F8F8F8] px-4 market-table">
                                <h3 className="market-table-title">{item.title}</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="!text-start">12/3/2024</td>
                                            <td className="!text-end">7.8223</td>
                                        </tr>
                                        <HsitoryLink link={item.href} />
                                    </tbody>
                                </table>
                            </div>
                            <ImportantNote content={item.content} />
                        </div>
                    ))}
                    <div key={table3.title} className="flex flex-col items-start">
                        <div className="w-full bg-[#F8F8F8] px-4 market-table">
                            <h3 className="market-table-title">{table3.title}</h3>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>MATURITY</th>
                                        <th>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table3.data.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.maturity}</td>
                                            <td>{data.rate}</td>
                                        </tr>
                                    ))}
                                    <HsitoryLink link={table3.href} />
                                </tbody>
                            </table>
                        </div>
                        <ImportantNote content={<p>Owned by The Hong Kong Association of Banks</p>} />
                    </div>

                    <div key={table4.title} className="flex flex-col items-start">
                        <div className="w-full bg-[#F8F8F8] px-4 market-table">
                            <h3 className="market-table-title">{table4.title}</h3>
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th>DATE</th>
                                        <th>Index</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table4.data.date.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.date}</td>
                                            <td>{data.index}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>average</th>
                                        <th>Index</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {table4.data.average.map((data, index) => (
                                        <tr key={index}>
                                            <td>
                                                <span>{data.day} day </span>
                                                <span className="text-[12px]">(backward to {data.backward})</span>
                                            </td>
                                            <td>{data.index}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <thead>
                                    <tr>
                                        <th>HONIA Index (Since 5 Apr 2016)</th>
                                        <th>1.07705805</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <HsitoryLink link={table4.href} />
                                </tbody>
                            </table>
                        </div>
                        <ImportantNote
                            content={
                                <div className="flex flex-col gap-2">
                                    <p>
                                        As administrator of Hong Kong Dollar Overnight Index Average (HONIA), which is the
                                        alternative risk-free rate of HIBOR, the TMA decide to publish the following:
                                    </p>
                                    <p>
                                        1.
                                        <a className="text-[#0053B0]" href="https://www.hkab.org.hk/en/home" target="_blank">
                                            Standard market convention of HIBOR
                                        </a>
                                         1M, 3M and 6M with accrued HONIA;
                                    </p>
                                    <p>2. Fixed 30-day, 90-day and 180-day average HONIA;</p>
                                    <p>
                                        2-1. Fixed-day count structure: the backward start date may fall on a weekend or public
                                        holiday
                                    </p>
                                    <p>3. HONIA Index as of 5 April 2016</p>
                                </div>
                            }
                        />
                    </div>
                </div>
            </AccordionPanel>
        </AccordionItemWrapper>
    );
};

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
export default DollarMarketData;
