import { FC } from "react";
import StepMenu, { StepsProps } from "./StepMenu";

const Header: FC<StepsProps> = ({ steps }) => {
    return (
        <header className="w-full flex flex-col items-center">
            <div className="bg-[#133D6C] w-full max-center">
                <div className="max-container h-[10px] flex justify-end items-center text-white gap-5">
                    {/* <span>Email: tma@tma.org.hk</span>
                    <span>Tel: +852 2543 7668</span> */}
                </div>
            </div>
            <div className="w-full max-center py-4">
                <div className="flex justify-between max-container">
                    <img src="/images/logo.svg" alt="logo" />
                    {/* <div className="flex items-center">
                        <button>Login</button>
                        <span className="text-[#D9D9D9] px-3">|</span>
                        <button>Seminar / Event</button>
                    </div> */}
                </div>
            </div>
            <div className="h-[56px] flex items-center max-container">Home</div>
            <div className="border-b border-[#F0F0F0] w-full"></div>
            <StepMenu steps={steps} />
        </header>
    );
};

export default Header;
