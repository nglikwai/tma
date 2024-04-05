import { FC } from "react";

type props = {
    children: React.ReactNode;
    redirect: string;
};

const TermAndCondition: FC<props> = ({ children, redirect }) => {
    return (
        <div className="grid gap-6 justify-items-start">
            <h2>Description</h2>
            <article>{children}</article>

            <form action={redirect} className="grid gap-6 w-full">
                <div className="flex items-center gap-3">
                    <label className="relative w-4 h-4">
                        <input type="checkbox" className="absolute h-4 w-4 top-0" required />
                        {/* <div className="absolute top-0 checkmark h-4 w-4 border border-gray-400 rounded-[2px] z-10"></div> */}
                    </label>
                    <span>I have read and agree to the above Terms and Conditions</span>
                </div>
                <div className="border-[0.5px] border-[#D9D9D9] w-full"></div>
                <input className="ok-button" value="Submit" type="submit" />
            </form>
        </div>
    );
};
export default TermAndCondition;
