import moment from "moment";
import { FC, ReactNode } from "react";
import { IndexTableType } from "./IndexTable";

type props = {
    item: IndexTableType;
    child?: ReactNode;
};
const IndexTableUnit: FC<props> = ({ item, child }) => {
    return (
        <div className="w-full bg-[#F8F8F8] px-4 market-table">
            <h3 className="market-table-title">{item.title}</h3>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Period</th>
                        <th>Compounding Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {item.data.date.map((data: any, index: number) => (
                        <tr key={index}>
                            <td>{data.date}</td>
                            <td>{data.index}</td>
                        </tr>
                    ))}
                </tbody>
                <thead>
                    <tr>
                        <th>Period</th>
                        <th>Compounding Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {item.data.average.map((data: any, index: number) => (
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
                        <th>HONIA Index (Since {moment(item.data.honia.honiaDate).format("D MMM YYYY")})</th>
                        <th>{item.data.honia.honiaIndex}</th>
                    </tr>
                </thead>
                {child}
            </table>
        </div>
    );
};
export default IndexTableUnit;
