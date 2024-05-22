import "@/app/benchmark/marketdata/index.css";
import IndexTableUnit from "@/components/table/IndexTableUnit";
import { getHistoryData } from "@/service/market.service";
import { HoniaType } from "@/type/data.type";
import { getHONIAData } from "@/utils/formatData";
import moment from "moment";
import { FC } from "react";

const HistoryUsdHkSpotRatePage: FC = async () => {
    const apiData = await getHistoryData<HoniaType>("HONIA");

    const table = apiData.map(item => ({
        title: moment(item.postdate).format("DD-MM-YYYY"),
        data: getHONIAData(item)
    }));

    return (
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 bg-[#F8F8F8] px-4">
            {table.map(item => (
                <IndexTableUnit key={item.title} item={item} />
            ))}
        </div>
    );
};

export default HistoryUsdHkSpotRatePage;
