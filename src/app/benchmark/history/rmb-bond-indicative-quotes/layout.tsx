import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "RMB Bond Indicative Quotes - TMA"
};

type props = {
    children: React.ReactNode;
};

const Page: NextPage<props> = ({ children }) => {
    return <>{children}</>;
};

export default Page;
