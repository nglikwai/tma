"use client";
import { usePathname } from "next/navigation";
import BenchmarkMenu from "../BenchmarkMenu";
import Layout from "./Layout";

type Props = {
    children: React.ReactNode;
};
const AppLayout: React.FC<Props> = ({ children }) => {
    const pathname = usePathname();

    console.log("pathname", pathname);
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

    const governanceMenu = [
        { key: "Consultation", href: "consultation", id: "governance/consultation", length: 91 },
        {
            key: "Governance",
            href: "governance",
            id: "governance/governance",
            length: 87
        },
        { key: "Specifications", href: "specifications", id: "governance/specifications", length: 102 }
    ];

    const PATHS: any = {
        "/disclaimer": {
            title: "Terms and conditions for accessing this website and usage of the Rates",
            content: <p>Last revised: 9 December 2016</p>,
            steps: ["Disclaimer"],
            subTitle: "Description"
        },
        "/benchmark/marketdata": {
            title: "Benchmark",
            content: <BenchmarkMenu menu={menu} id="main" />,
            steps: ["Benchmark"],
            subTitle: "Market Data"
        },
        "/benchmark/governance/consultation": {
            title: "Benchmark",
            content: <BenchmarkMenu menu={menu} id="main" />,
            steps: ["Benchmark"],
            subTitle: "Governance",
            subMenu: (
                <BenchmarkMenu
                    menu={governanceMenu}
                    style={{ activeColor: "#1890FF", inactiveColor: "#757575", hoverColor: "hover:text-[#212121]" }}
                    id="gov"
                />
            )
        },
        "/benchmark/governance/governance": {
            title: "Benchmark",
            content: <BenchmarkMenu menu={menu} id="main" />,
            steps: ["Benchmark"],
            subTitle: "Governance",
            subMenu: (
                <BenchmarkMenu
                    menu={governanceMenu}
                    style={{ activeColor: "#1890FF", inactiveColor: "#757575", hoverColor: "hover:text-[#212121]" }}
                    id="gov"
                />
            )
        },
        "/benchmark/governance/specifications": {
            title: "Benchmark",
            content: <BenchmarkMenu menu={menu} id="main" />,
            steps: ["Benchmark"],
            subTitle: "Governance",
            subMenu: (
                <BenchmarkMenu
                    menu={governanceMenu}
                    style={{ activeColor: "#1890FF", inactiveColor: "#757575", hoverColor: "hover:text-[#212121]" }}
                    id="gov"
                />
            )
        },
        "/benchmark/complaints-whistleblowing": {
            title: "Benchmark",
            content: <BenchmarkMenu menu={menu} id="main" />,
            steps: ["Benchmark"],
            subTitle: "Complaints & Whistleblowing"
        },
        "/benchmark/history/usd-hk-spot-rate": {
            title: "USD/HKD Spot Rate",
            content: "Last revised: 13 Mar 2024",
            steps: ["Benchmark", "History of USD and HKD Spot Rate"]
        },
        "/benchmark/history/hkd-overnight-index-average": {
            title: "HKD Overnight Index Average (HONIA)",
            content: "Last revised: 13 Mar 2024",
            steps: ["Benchmark", "History of HKD Overnight Index Average (HONIA)"]
        },
        "/benchmark/history/hkd-interest-settlement-rates": {
            title: "HKD Interest Settlement Rates",
            content: "Last revised: 13 Mar 2024",
            steps: ["Benchmark", "History of HKD Interest Settlement Rates"]
        },
        "/benchmark/history/honia-compounding-and-index": {
            title: "HONIA Compounding and Index",
            content: "Last revised: 13 Mar 2024",
            steps: ["Benchmark", "HONIA Compounding and Index"]
        },
        "/benchmark/history/usd-cny-spot-rate": {
            title: "USD/CNY(HK) Spot Rate",
            content: "Last revised: 13 Mar 2024",
            steps: ["Benchmark", "History of USD/CNY(HK) Spot Rate"]
        },
        "/disclaimer/rmb": {
            title: "Terms and conditions for accessing this website and usage of the Rates",
            content: <p>Last revised: 9 December 2016</p>,
            steps: ["Disclaimer"],
            subTitle: "Description"
        },
        "/benchmark/history/rmb-bond-indicative-quotes": {
            title: "RMB Bond Indicative Quotes",
            content: "Last revised: 13 Mar 2024",
            steps: ["Benchmark", "History of RMB Bond Indicative Quotes"]
        },
        "/benchmark/history/cnh-hk-interbank-offered-rate": {
            title: "CNH-HK Interbank Offered Rate",
            content: "Last revised: 13 Mar 2024",
            steps: ["Benchmark", "History of CNH Hong Kong Interbank Offered Rate"]
        },
        "/disclaimer/audit-report": {
            title: "Third Party Release Agreement",
            content: <p>Last revised: 21 December 2022</p>,
            steps: ["Disclaimer"],
            subTitle: "Description"
        }
    };

    const currentPath = (() => {
        if (PATHS.hasOwnProperty(pathname)) {
            return PATHS[pathname as keyof typeof PATHS];
        } else {
            return PATHS["/disclaimer"];
        }
    })();

    return (
        <Layout title={currentPath.title} content={currentPath.content} steps={currentPath.steps}>
            <div className="grid gap-y-6">
                {/* <div className="h-10 bg-[#E6F7FF] text-[#000000D9] text-[14px] flex items-center justify-center">
        US new home construction surged last month, as mortgage rates stayed high
    </div> */}
                <h2>{currentPath.subTitle}</h2>
                {currentPath.subMenu && currentPath.subMenu}
                {children}
            </div>
        </Layout>
    );
};
export default AppLayout;
