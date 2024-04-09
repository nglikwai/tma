import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import AppLayout from "@/components/Global/AppLayout";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles/globals.css";

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <ChakraProvider>
                        <AppLayout>{children}</AppLayout>
                    </ChakraProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
