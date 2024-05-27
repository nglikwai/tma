import { IndexTableType } from "@/components/table/IndexTable";
import { RateTableType } from "@/components/table/RateTable";
import { SimpleTableType } from "@/components/table/SimpleTable";
import { DATE_FORMAT } from "@/settings";
import { APIMarketDataType, MarketDataType } from "@/type/data.type";
import { getHONIAData } from "@/utils/formatData";
import moment from "moment";

export type marketDataType = {
    title: string;
    table: (SimpleTableType | RateTableType | IndexTableType)[];
};

export const data = (apiData: APIMarketDataType): marketDataType[] => {
    const getItemByCode = (mktFixcode: string) => {
        // searchDataByFixCode
        const categories = ["SU", "HO", "HH", "IB", "SC", "HONIA", "RMBBI"];

        for (const category of categories) {
            const items = apiData[category as keyof typeof apiData];
            if (Array.isArray(items)) {
                for (const item of items) {
                    if (item.mktFixcode === mktFixcode) {
                        return item;
                    }
                }
            } else {
                if ((items as any).mktFixcode === mktFixcode) {
                    return items;
                }
            }
        }
        return null;
    };

    const value = (mktFixcode: string, decimal = 5) => {
        const item = getItemByCode(mktFixcode) as MarketDataType;
        return item ? parseFloat(item.mktFixvalue).toFixed(decimal) : null;
    };

    const date = (mktFixcode: string) => {
        const item = getItemByCode(mktFixcode) as MarketDataType;
        return item ? moment(item.mktFixdate).format(DATE_FORMAT) : null;
    };

    return [
        {
            title: "Hong Kong Dollar",
            table: [
                {
                    type: "simple",
                    title: "USD/HKD Spot Rate",
                    href: "history/usd-hk-spot-rate",
                    value: value("HKDFIX=", 4),
                    date: date("HKDFIX="),
                    importantNotice: (
                        <p>
                            With effect from 1 August 2016, the official name of the Spot USD/HKD Fixing has been amended to
                            USD/HKD Spot Rate. The benchmark is calculated based on actual transactions executed in a window of 30
                            minutes centred at 11am. Details on the change in calculation methodology can be found at{" "}
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
                    type: "simple",
                    title: "HKD Overnight Index Average (HONIA)",
                    href: "history/hkd-overnight-index-average",
                    value: value("HONIA="),
                    date: date("HONIA="),
                    importantNotice: (
                        <p>
                            The TMA took up the ownership and administration of the HKD Overnight Index Swaps (OIS) from the Hong
                            Kong Inter-Dealer Brokers Association (HKIDBA) with effect from 5 April 2016. The benchmark has been
                            renamed as HKD Overnight Index Average (HONIA).
                        </p>
                    )
                },
                {
                    type: "rate",
                    title: "HKD Interest Settlement Rates",
                    href: "history/hkd-interest-settlement-rates",
                    data: [
                        { maturity: "ON", rate: value("HIHKDOND=") },
                        { maturity: "1W", rate: value("HIHKD1WD=") },
                        { maturity: "2W", rate: value("HIHKD2WD=") },
                        { maturity: "1M", rate: value("HIHKD1MD=") },
                        { maturity: "2M", rate: value("HIHKD2MD=") },
                        { maturity: "3M", rate: value("HIHKD3MD=") },
                        { maturity: "6M", rate: value("HIHKD6MD=") },
                        { maturity: "12M", rate: value("HIHKD1YD=") }
                    ],
                    importantNotice: <p>Owned by The Hong Kong Association of Banks</p>
                },
                {
                    type: "index",
                    title: "HONIA Compounding and Index",
                    href: "history/honia-compounding-and-index",
                    data: getHONIAData(apiData.HONIA),
                    importantNotice: (
                        <div className="flex flex-col gap-2">
                            <p>
                                As administrator of Hong Kong Dollar Overnight Index Average (HONIA), which is the alternative
                                risk-free rate of HIBOR, the TMA decide to publish the following:
                            </p>
                            <p>
                                1.{" "}
                                <a className="text-[#0053B0]" href="https://www.hkab.org.hk/en/home" target="_blank">
                                    Standard market convention of HIBOR
                                </a>
                                1M, 3M and 6M with accrued HONIA;
                            </p>
                            <p>2. {"  "}Fixed 30-day, 90-day and 180-day average HONIA;</p>
                            <p className="ml-4">
                                2-1. Fixed-day count structure: the backward start date may fall on a weekend or public holiday
                            </p>
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
                    value: value("CNHFIX=", 4),
                    date: date("CNHFIX="),
                    importantNotice: (
                        <p>
                            With effect from 1 August 2016, the official name of the Spot USD/CNY(HK) Fixing has been amended to
                            USD/CNY(HK) Spot Rate. The benchmark is calculated based on actual transactions executed in a window
                            of 30 minutes centred at 11am. Details on the change in calculation methodology can be found at{" "}
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
                    type: "simple",
                    title: "RMB Bond Indicative Quotes",
                    href: "/disclaimer/rmb",
                    value: "",
                    date: moment(apiData.RMBBI.dt).format(DATE_FORMAT),
                    importantNotice: <p>Only Indicative Quotes Published at 11:00am will be posted.</p>
                },
                {
                    type: "rate",
                    title: "CNH Hong Kong Interbank Offered Rate",
                    href: "history/cnh-hk-interbank-offered-rate",
                    data: [
                        { maturity: "ON", rate: value("HICNHONDF=") },
                        { maturity: "1W", rate: value("HICNH1WDF=") },
                        { maturity: "2W", rate: value("HICNH2WDF=") },
                        { maturity: "1M", rate: value("HICNH1MDF=") },
                        { maturity: "2M", rate: value("HICNH2MDF=") },
                        { maturity: "3M", rate: value("HICNH3MDF=") },
                        { maturity: "6M", rate: value("HICNH6MDF=") },
                        { maturity: "12M", rate: value("HICNH1YDF=") }
                    ]
                    // importantNotice: <p></p>
                }
            ]
        }
    ];
};
