import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "Terms and conditions for accessing this website and usage of the Rates - TMA"
};

type props = {
    children: React.ReactNode;
};

const Page: NextPage<props> = ({ children }) => {
    return <>{children}</>;
};

export default Page;
