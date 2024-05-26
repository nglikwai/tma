import { DATE_FORMAT } from "@/settings";
import { HoniaType, MarketDataType } from "@/type/data.type";
import moment from "moment";

export const fetchAndFormatSpotRateData = async (fetchFunction: any, digit = 4) => {
    const apiData = await fetchFunction;
    const tableData = apiData.map((item: MarketDataType) => ({
        date: moment(item.mktFixdate).format(DATE_FORMAT),
        rate: parseFloat(item.mktFixvalue).toFixed(digit)
    }));
    return tableData;
};

export const getHONIADate = (apiData: HoniaType) => {
    const data = [] as any;
    const range = ["On", "_1w", "_2w", "_1m", "_2m", "_3m", "_6m", "_12m"];

    range.forEach(duration => {
        if (apiData[`show${duration}` as keyof typeof apiData] === "Y") {
            data.push({
                date: `${moment(apiData[`sdate${duration}` as keyof typeof apiData]).format(DATE_FORMAT)} to ${moment(apiData[`edate${duration}` as keyof typeof apiData]).format(DATE_FORMAT)}`,
                index: parseFloat(apiData[`rate${duration}` as keyof typeof apiData] as string).toFixed(5) + "%"
            });
        }
    });
    return data;
};

export const getHONIAData = (apiData: HoniaType) => ({
    date: getHONIADate(apiData),
    average: [
        {
            day: 30,
            backward: moment(apiData.bdate_30).format(DATE_FORMAT),
            index: parseFloat(apiData.rateAvg30).toFixed(5) + "%"
        },
        {
            day: 90,
            backward: moment(apiData.bdate_90).format(DATE_FORMAT),
            index: parseFloat(apiData.rateAvg90).toFixed(5) + "%"
        },
        {
            day: 180,
            backward: moment(apiData.bdate_180).format(DATE_FORMAT),
            index: parseFloat(apiData.rateAvg180).toFixed(5) + "%"
        }
    ],
    honia: {
        honiaIndex: apiData.honiaIndex,
        honiaDate: apiData.honiaDate
    }
});

export const getRateDetailTableData = (apiData: MarketDataType[], codes: any) => {
    const { ON, "1WK": _1WK, "2WK": _2WK, "1M": _1M, "2M": _2M, "3M": _3M, "6M": _6M, "12M": _12M } = codes;
    const resultGroupByDate: { [key: string]: MarketDataType[] } = {};

    apiData.forEach(item => {
        if (resultGroupByDate[item.mktFixdate as keyof typeof resultGroupByDate]) {
            resultGroupByDate[item.mktFixdate as keyof typeof resultGroupByDate].push(item);
        } else {
            resultGroupByDate[item.mktFixdate as keyof typeof resultGroupByDate] = [item];
        }
    });

    const tableData = Object.keys(resultGroupByDate).map(key => ({
        date: moment(key).format(DATE_FORMAT),
        rate: (() => {
            const value = (fixCode: string) =>
                parseFloat(resultGroupByDate[key].find(item => item.mktFixcode === fixCode)?.mktFixvalue as string).toFixed(5);

            return {
                ON: value(ON),
                "1WK": value(_1WK),
                "2WK": value(_2WK),
                "1M": value(_1M),
                "2M": value(_2M),
                "3M": value(_3M),
                "6M": value(_6M),
                "12M": value(_12M)
            };
        })()
    }));

    return tableData;
};
