import type { Metadata, NextPage } from "next";
import Script from "next/script";
import { Suspense } from "react";
import ClientSideComponent from "./client/Toast";

export const metadata: Metadata = {
    title: "Complaints & Whistleblowing - TMA"
};

type props = {
    children: React.ReactNode;
};

const Page: NextPage<props> = ({ children }) => {
    return (
        <>
            <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
            {children}
            <Suspense>
                <ClientSideComponent />
            </Suspense>
        </>
    );
};

export default Page;
