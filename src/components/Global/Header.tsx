const Header = () => {
    return (
        <header className="w-full flex flex-col items-center text-[#212121]">
            <div className="bg-[#0053B0] w-full max-center">
                <div className="max-container h-[32px] flex justify-end items-center text-white gap-5">
                    <span>Email: tma@tma.org.hk</span>
                    <span>Tel: +852 2543 7668</span>
                </div>
            </div>
            <div className="w-full bg-[#F8F8F8] max-center py-4">
                <div className="flex justify-between max-container">
                    <img src="/images/logo.svg" alt="logo" />
                    <div className="flex items-center">
                        <button>Login</button>
                        <span className="text-[#D9D9D9] px-3">|</span>
                        <button>Seminar / Event</button>
                    </div>
                </div>
            </div>
            <div className="h-[56px] flex items-center max-container">Home</div>
            <div className="h-[40px] text-[12px] max-container">
                <span className="text-[#969696]">Home</span>
                <span className="text-[#969696] px-1"> {">"}</span>
                <span className="text-[#0053B0]">Disclaimer</span>
            </div>
        </header>
    );
};

export default Header;
