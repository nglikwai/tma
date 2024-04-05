import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
    title: "HKD Overnight Index Average (HONIA)"
};

type props = {
    children: React.ReactNode;
};

const Page: NextPage<props> = ({ children }) => {
    return <>{children}</>;
};

export default Page;
