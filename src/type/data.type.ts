export type MarketDataType = {
    id: number;
    createdAt: string;
    createdBy: null | string;
    updatedAt: string;
    updatedBy: null | string;
    mktFixcode: string;
    fixDateTime: string;
    mktFixdate: string;
    mktFixtime: string;
    mktFixvalue: string;
    mktFixyield: null | string;
    mktFixrmk: null | string;
    mktIsrefix: string;
    mktIsweather: string;
    mktIssuedate: null | string;
    deletedAt: null | string;
    lastuser: string;
    lastupdate: string;
};

export type HoniaType = {
    id: number;
    createdAt: string;
    createdBy: null | string;
    updatedAt: string;
    updatedBy: null | string;
    honiaDate: string;
    sdateOn: string;
    edateOn: string;
    sdate_1w: string;
    edate_1w: string;
    sdate_2w: string;
    edate_2w: string;
    sdate_1m: string;
    edate_1m: string;
    sdate_2m: string;
    edate_2m: string;
    sdate_3m: string;
    edate_3m: string;
    sdate_6m: string;
    edate_6m: string;
    sdate_12m: string;
    edate_12m: string;
    rateOn: string | null;
    rate_1w: string | null;
    rate_2w: string | null;
    rate_1m: string | null;
    rate_2m: string | null;
    rate_3m: string | null;
    rate_6m: string | null;
    rate_12m: string | null;
    showOn: string;
    show_1w: string;
    show_2w: string;
    show_1m: string;
    show_2m: string;
    show_3m: string;
    show_6m: string;
    show_12m: string;
    honiaIndex: string;
    rateAvg30: string;
    rateAvg90: string;
    rateAvg180: string;
    bdate_30: string;
    bdate_90: string;
    bdate_180: string;
    status: string;
    postdate: string;
    createdate: string;
    lastupdate: string;
    deletedAt: null | string;
};

type RMBBIType = {
    dt: string;
    excelUrl: string;
    data: MarketDataType[];
};

export type APIMarketDataType = {
    SU: MarketDataType[];
    HO: MarketDataType[];
    HH: MarketDataType[];
    IB: MarketDataType[];
    SC: MarketDataType[];
    HONIA: HoniaType;
    RMBBI: RMBBIType;
};

export type RMBMIType = {
    dt: string;
    excelUrl: string;
    data: any;
};
