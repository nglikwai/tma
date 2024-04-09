import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Specifications - TMA"
};

type props = {
    children: React.ReactNode;
};

const Page: NextPage<props> = ({ children }) => {
    return <>{children}</>;
};

export default Page;
