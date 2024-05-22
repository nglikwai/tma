import { HoniaType, MarketDataType } from "@/type/data.type";
import moment from "moment";

export const fetchAndFormatSpotRateData = async (fetchFunction: any) => {
    const apiData = await fetchFunction;
    const tableData = apiData.map((item: MarketDataType) => ({
        date: moment(item.fixDateTime).format("D-M-YYYY"),
        rate: parseFloat(item.mktFixvalue).toFixed(5)
    }));
    return tableData;
};

export const getHONIADate = (apiData: HoniaType) => {
    const data = [] as any;
    const range = ["On", "_1w", "_2w", "_1m", "_2m", "_3m", "_6m", "_12m"];

    range.forEach(duration => {
        if (apiData[`show${duration}` as keyof typeof apiData] === "Y") {
            data.push({
                // date: "13/12/2023 to 13/3/2024",
                date: `${moment(apiData[`sdate${duration}` as keyof typeof apiData]).format("D/M/YYYY")} to ${moment(apiData[`edate${duration}` as keyof typeof apiData]).format("D/M/YYYY")}`,

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
            backward: moment(apiData.bdate_30).format("D/M/YYYY"),
            index: parseFloat(apiData.rateAvg30).toFixed(5) + "%"
        },
        {
            day: 90,
            backward: moment(apiData.bdate_90).format("D/M/YYYY"),
            index: parseFloat(apiData.rateAvg90).toFixed(5) + "%"
        },
        {
            day: 180,
            backward: moment(apiData.bdate_180).format("D/M/YYYY"),
            index: parseFloat(apiData.rateAvg180).toFixed(5) + "%"
        }
    ],
    honia: {
        honiaIndex: apiData.honiaIndex,
        honiaDate: apiData.honiaDate
    }
});
