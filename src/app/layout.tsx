import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import AppLayout from "@/components/Global/AppLayout";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import "./styles/globals.css";

interface Props {
    readonly children: ReactNode;
}

export const metadata = {
    title: "Treasury Markets Association",
    description:
        "The Treasury Markets Association (TMA) was incorporated through the institutionalisation of the Treasury Markets Forum of Hong Kong and the merger with ACI-The Financial Markets Association of Hong Kong in 2005. Principal functions of the TMA include promoting co-operation and synergy among market practitioners with a view to enhancing professionalism and the overall competitiveness of the treasury markets in Hong Kong, thereby maintaining the role as an international financial centre."
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <Script src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} />
                <StoreProvider>
                    <ChakraProvider>
                        <AppLayout>{children}</AppLayout>
                    </ChakraProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
