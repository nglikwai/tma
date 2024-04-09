import { FC } from "react";

const SpotRateTable: FC<any> = ({ data, title }) => {
    return (
        <div>
            <div className="w-full bg-[#F8F8F8] px-4 market-table two-row-table">
                <h3 className="market-table-title">{title}</h3>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            {data.map((item: any) => (
                                <th key={item.date}>{item.date}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rate</td>
                            {data.map((item: any) => (
                                <td key={item.date}>{item.date}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SpotRateTable;
