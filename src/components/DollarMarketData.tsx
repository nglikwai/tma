import "@/app/benchmark/marketdata/index.css";
import { AccordionPanel } from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import AccordionItemWrapper from "./AccordionItemWrapper";
type props = {
    title: string;
};
const DollarMarketData: FC<props> = ({ title }) => {
    return (
        <AccordionItemWrapper title={title}>
            <AccordionPanel className="!p-4">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                    {[
                        { title: "USD/HKD Spot Rate", href: "history/usd-hk-spot-rate" },
                        { title: "HKD Overnight Index Average (HONIA)", href: "history/hkd-overnight-index-average" }
                    ].map((item, index) => (
                        <div key={item.title}>
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
                            <p className="flex items-center gap-2 py-2">
                                <img src="/images/icon-important.svg" alt="" />
                                <span className="text-[#D33238] text-[14px]">Important notice</span>
                            </p>
                        </div>
                    ))}
                    {[
                        { title: "HKD Interest Settlement Rates", href: "history/hkd-interest-settlement-rates" },
                        { title: "HONIA Compounding and Index", href: "history/honia-compounding-and-index" }
                    ].map(item => (
                        <div key={item.title}>
                            <div className="w-full bg-[#F8F8F8] px-4 market-table">
                                <h3 className="market-table-title">{item.title}</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th>MATURITY</th>
                                            <th>RATE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { maturity: "ON", rate: "7.8223" },
                                            { maturity: "1W", rate: "7.8223" },
                                            { maturity: "1M", rate: "7.8223" },
                                            { maturity: "2M", rate: "7.8223" },
                                            { maturity: "3M", rate: "7.8223" },
                                            { maturity: "6M", rate: "7.8223" },
                                            { maturity: "9M", rate: "7.8223" },
                                            { maturity: "12M", rate: "7.8223" }
                                        ].map(({ maturity, rate }, index) => (
                                            <tr key={maturity}>
                                                <td>{maturity}</td>
                                                <td>{rate}</td>
                                            </tr>
                                        ))}
                                        <HsitoryLink link={item.href} />
                                    </tbody>
                                </table>
                            </div>
                            <p className="flex items-center gap-2 py-2">
                                <img src="/images/icon-important.svg" alt="" />
                                <span className="text-[#D33238] text-[14px]">Important notice</span>
                            </p>
                        </div>
                    ))}
                </div>
            </AccordionPanel>
        </AccordionItemWrapper>
    );
};

const HsitoryLink: FC<{ link: string }> = ({ link }) => {
    return (
        <tr className="justify-end">
            <td colSpan={2} className="">
                <Link href={link} className="text-[14px] text-[#0053B0] font-[700] flex gap-3 justify-end">
                    Historical Rates
                    <img src="/images/icon-arrow.svg" alt="" className="h-[8px] w-[30px] mt-[5px]" />
                </Link>
            </td>
        </tr>
    );
};
export default DollarMarketData;
