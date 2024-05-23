"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push("/disclaimer");
    }, []);
    return <></>;
};

export default HomePage;
