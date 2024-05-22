"use client";

import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { StepsProps } from "./StepMenu";

type props = {
    children: React.ReactNode;
    title: string;
    content?: React.ReactNode;
} & StepsProps;
const Layout: FC<props> = ({ children, title, content, steps }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header steps={steps} />
            <div className="grow bg-[#F0F2F5]">
                <div className="relative text-white max-center">
                    <div className="absolute w-full z-0">
                        <div className="relative">
                            <img src="/images/bg.svg" alt="" className="absolute w-full h-[460px] object-cover z-0" />
                            <img src="/images/mask.svg" alt="" className="absolute w-full h-[460px] object-cover z-0" />
                            <div className="triangle"></div>
                        </div>
                    </div>
                    <div className="max-container py-[60px] sm:py-6 h-[219px] sm:h-auto flex flex-col justify-start z-[2]">
                        <h1 className="text-[36px] font-[700] pb-4">{title}</h1>
                        <div>{content}</div>
                    </div>
                    <main className="text-[#212121] w-full p-[60px] flex flex-col grow bg-white shadow-[4px_4px_20px_#00000040] content-container mb-20 z-[2]">
                        {children}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
