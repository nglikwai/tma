const Footer = () => {
    return (
        <footer className="text-white">
            <div className="bg-[#133D6C] max-center h-[109px] py-6">
                <div className="max-container  flex items-center gap-14">
                    <div className="w-[142px] flex flex-col items-center">
                        <img src="/images/footer-logo.svg" alt="logo" />
                        <span className="text-[10px] py-3">Treasury Markets Association </span>
                    </div>
                    <div className="h-full grid">
                        <div className="flex items-start">
                            <span>Follow us :</span>
                            <div className="flex gap-3 px-2">
                                <button>
                                    <img src="/images/icon-facebook.svg" alt="" />
                                </button>
                                <button>
                                    <img src="/images/icon-ig.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <span>Terms and Conditions of Use | Sitemap</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1A2F46] py-2 max-center justify-center">
                <div className="max-container">
                    <span className="text-[14px]">
                        Copyright © 2024 Treasury Markets Association, a company incorporated with limited liability. All rights
                        reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
