import { PATHS } from "@/constants/path";
import Link from "next/link";
import { FC } from "react";
export type StepsProps = { steps?: string[] };

const StepMenu: FC<StepsProps> = ({ steps }) => {
    return (
        <div className="h-[40px] text-[12px] max-container text-[#969696] flex items-center">
            <div>
                <Link href="/disclaimer">Home</Link>
                {steps?.map((step, index) => (
                    <span key={step}>
                        <span>{" > "}</span>
                        <Link
                            href={PATHS[step as keyof typeof PATHS]}
                            className="text-[#]"
                            style={{ color: index === steps.length - 1 ? "#0053B0" : "" }}
                        >
                            {step}
                        </Link>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default StepMenu;
