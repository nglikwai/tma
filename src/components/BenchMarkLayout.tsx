import { FC } from "react";
import Layout from "./Global/Layout";
import LinkItem from "./LinkItem";

type props = {
    title: string;
    children: React.ReactNode;
};
const BenchMarkLayout: FC<props> = ({ title, children }) => {
    return (
        <Layout
            title="Benchmark"
            content={
                <div className="flex gap-8">
                    {[
                        {
                            key: "Market Data",
                            href: "/benchmark/marketdata",
                            id: "marketdata"
                        },
                        {
                            key: "Governance",
                            href: "/benchmark/governance/consultation",
                            id: "governance"
                        },
                        {
                            key: "Complaints & Whistleblowing",
                            href: "/benchmark/complaints-whistleblowing",
                            id: "complaints-whistleblowing"
                        }
                    ].map((item, index) => (
                        <LinkItem key={index} item={item} />
                    ))}
                </div>
            }
        >
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
