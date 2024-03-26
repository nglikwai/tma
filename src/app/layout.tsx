import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import Layout from "@/components/Global/Layout";
import "./styles/globals.css";

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <StoreProvider>
            <html lang="en">
                <body>
                    <Layout>{children}</Layout>
                </body>
            </html>
        </StoreProvider>
    );
}
