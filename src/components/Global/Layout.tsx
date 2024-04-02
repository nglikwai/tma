import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

type props = {
    children: React.ReactNode;
    title: string;
    content?: React.ReactNode;
};
const Layout: FC<props> = ({ children, title, content }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="grow">
                <div className="relative text-white max-center">
                    <div className="absolute w-full z-[-1]">
                        <img src="/images/bg.svg" alt="" className="absolute w-full h-[460px] object-cover" />
                        <img src="/images/mask.svg" alt="" className="absolute w-full h-[460px] object-cover" />
                    </div>
                    <div className="max-container py-[60px] h-[219px]">
                        <h1 className="text-[36px] font-[700] pb-4">{title}</h1>
                        <div>{content}</div>
                    </div>
                    <main className="text-[#212121] p-[60px] flex flex-col grow bg-white shadow-[4px_4px_20px_#00000040] max-container mb-20">
                        {children}
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
