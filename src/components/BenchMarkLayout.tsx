import { FC } from "react";
import BenchmarkMenu from "./BenchmarkMenu";
import Layout from "./Global/Layout";

type props = {
    title: string;
    children: React.ReactNode;
};

const menu = [
    {
        key: "Market Data",
        href: "/benchmark/marketdata",
        id: "marketdata",
        length: 88
    },
    {
        key: "Governance",
        href: "/benchmark/governance/consultation",
        id: "governance",
        length: 87
    },
    {
        key: "Complaints & Whistleblowing",
        href: "/benchmark/complaints-whistleblowing",
        id: "complaints-whistleblowing",
        length: 211
    }
];
const BenchMarkLayout: FC<props> = ({ title, children }) => {
    return (
        <Layout title="Benchmark" content={<BenchmarkMenu menu={menu} id="main" />} steps={["Benchmark"]}>
            <div className="grid gap-y-6">
                {/* <div className="h-10 bg-[#E6F7FF] text-[#000000D9] text-[14px] flex items-center justify-center">
                US new home construction surged last month, as mortgage rates stayed high
            </div> */}
                <h2>{title}</h2>
                {children}
            </div>
        </Layout>
    );
};

export default BenchMarkLayout;
