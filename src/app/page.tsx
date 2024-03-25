import Header from "@/components/Global/Header";
import type { Metadata } from "next";

export default function IndexPage() {
    return (
        <div>
            <Header />
        </div>
    );
}

export const metadata: Metadata = {
    title: "TMA"
};
