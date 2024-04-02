import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import { ChakraProvider } from "@chakra-ui/react";
import "./styles/globals.css";
import { Metadata } from "next";

interface Props {
    readonly children: ReactNode;
}

// export const metadata: Metadata = {
//     title: "TMA"
// };

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <ChakraProvider>{children}</ChakraProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
