import { IndexTableType } from "@/components/table/IndexTable";
import { RateTableType } from "@/components/table/RateTable";
import { SimpleTableType } from "@/components/table/SimpleTable";

export type marketDataType = {
    title: string;
    table: (SimpleTableType | RateTableType | IndexTableType)[];
};

export const data: marketDataType[] = [
    {
        title: "Hong Kong Dollar",
        table: [
            {
                type: "simple",
                title: "USD/HKD Spot Rate",
                href: "history/usd-hk-spot-rate",
                importantNotice: (
                    <p>
                        With effect from 1 August 2016, the official name of the Spot USD/HKD Fixing has been amended to USD/HKD
                        Spot Rate. The benchmark is calculated based on actual transactions executed in a window of 30 minutes
                        centred at 11am. Details on the change in calculation methodology can be found at{" "}
                        <a
                            className="text-[#0053B0]"
                            href="https://www.tma.org.hk/en_newsevents_n1.aspx?Back=T&newsId=282"
                            target="_blank"
                        >
                            press release
                        </a>
                        . This content may not be reproduced, altered, transmitted, disseminated, distributed or redistributed,
                        without prior written permission from TMA.
                    </p>
                )
            },
            {
                type: "simple",
                title: "HKD Overnight Index Average (HONIA)",
                href: "history/hkd-overnight-index-average",
                importantNotice: (
                    <p>
                        The TMA took up the ownership and administration of the HKD Overnight Index Swaps (OIS) from the Hong Kong
                        Inter-Dealer Brokers Association (HKIDBA) with effect from 5 April 2016. The benchmark has been renamed as
                        HKD Overnight Index Average (HONIA).
                    </p>
                )
            },
            {
                type: "rate",
                title: "HKD Interest Settlement Rates",
                href: "history/hkd-interest-settlement-rates",
                data: [
                    { maturity: "ON", rate: "4.13833" },
                    { maturity: "1W", rate: "4.13833" },
                    { maturity: "1M", rate: "4.13833" },
                    { maturity: "2M", rate: "4.13833" },
                    { maturity: "3M", rate: "4.13833" },
                    { maturity: "6M", rate: "4.13833" },
                    { maturity: "9M", rate: "4.13833" },
                    { maturity: "12M", rate: "4.13833" }
                ],
                importantNotice: <p>Owned by The Hong Kong Association of Banks</p>
            },
            {
                type: "index",
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
                },
                importantNotice: (
                    <div className="flex flex-col gap-2">
                        <p>
                            As administrator of Hong Kong Dollar Overnight Index Average (HONIA), which is the alternative
                            risk-free rate of HIBOR, the TMA decide to publish the following:
                        </p>
                        <p>
                            1.
                            <a className="text-[#0053B0]" href="https://www.hkab.org.hk/en/home" target="_blank">
                                Standard market convention of HIBOR
                            </a>
                            1M, 3M and 6M with accrued HONIA;
                        </p>
                        <p>2. Fixed 30-day, 90-day and 180-day average HONIA;</p>
                        <p>2-1. Fixed-day count structure: the backward start date may fall on a weekend or public holiday</p>
                        <p>3. HONIA Index as of 5 April 2016</p>
                    </div>
                )
            }
        ]
    },
    {
        title: "Renminbi",
        table: [
            {
                type: "simple",
                title: "USD/CNY(HK) Spot Rate",
                href: `history/usd-cny-spot-rate`,
                importantNotice: (
                    <p>
                        With effect from 1 August 2016, the official name of the Spot USD/CNY(HK) Fixing has been amended to
                        USD/CNY(HK) Spot Rate. The benchmark is calculated based on actual transactions executed in a window of 30
                        minutes centred at 11am. Details on the change in calculation methodology can be found at{" "}
                        <a
                            className="text-[#0053B0]"
                            href="https://www.tma.org.hk/en_newsevents_n1.aspx?Back=T&newsId=282"
                            target="_blank"
                        >
                            press release
                        </a>
                        . This content may not be reproduced, altered, transmitted, disseminated, distributed or redistributed,
                        without prior written permission from TMA.
                    </p>
                )
            },
            {
                type: "simple",
                title: "RMB Bond Indicative Quotes",
                href: "/disclaimer/rmb",
                importantNotice: <p>Only Indicative Quotes Published at 11:00am will be posted.</p>
            },
            {
                type: "rate",
                title: "CNH Hong Kong Interbank Offered Rate",
                href: "history/cnh-hk-interbank-offered-rate",
                data: [
                    { maturity: "ON", rate: "2.54591" },
                    { maturity: "1W", rate: "2.54591" },
                    { maturity: "1M", rate: "2.54591" },
                    { maturity: "2M", rate: "2.54591" },
                    { maturity: "3M", rate: "2.54591" },
                    { maturity: "6M", rate: "2.54591" },
                    { maturity: "9M", rate: "2.54591" },
                    { maturity: "12M", rate: "2.54591" }
                ],
                // importantNotice: <p></p>
            }
        ]
    }
];
