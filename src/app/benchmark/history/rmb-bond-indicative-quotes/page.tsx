import "@/app/benchmark/marketdata/index.css";
import Layout from "@/components/Global/Layout";
import QuoteTable from "@/components/table/QuoteTable";

const tableData = [
    {
        date: "03-11-2024",
        href: "https://www.tma.org.hk/RMBFile/20231114_TMA_RMB_Bond_Indicative_Quotes.xls"
    },
    {
        date: "03-08-2024",
        href: "https://www.tma.org.hk/RMBFile/20231114_TMA_RMB_Bond_Indicative_Quotes.xls"
    },
    {
        date: "03-07-2024",
        href: "https://www.tma.org.hk/RMBFile/20231114_TMA_RMB_Bond_Indicative_Quotes.xls"
    },
    {
        date: "03-06-2024",
        href: "https://www.tma.org.hk/RMBFile/20231114_TMA_RMB_Bond_Indicative_Quotes.xls"
    },
    {
        date: "03-05-2024",
        href: "https://www.tma.org.hk/RMBFile/20231114_TMA_RMB_Bond_Indicative_Quotes.xls"
    }
];
const RmbBondIndicativeQuotesPage: React.FC = () => {
    const title = "RMB Bond Indicative Quotes";
    return (
        <Layout title={title} content="Last revised: 13 Mar 2024" steps={["Benchmark", "History of RMB Bond Indicative Quotes"]}>
            <QuoteTable title={title} data={tableData} />
        </Layout>
    );
};

export default RmbBondIndicativeQuotesPage;
