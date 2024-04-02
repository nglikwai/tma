import { FC } from "react";

type props = {
    isExpanded: boolean;
};
const CrossIcon: FC<props> = ({ isExpanded }) => {
    return (
        <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: isExpanded ? "rotate(90deg)" : "rotate(405deg)", transition: "all 0.6s ease" }}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.421 1.07906C12.8115 1.46958 12.8115 2.10274 12.421 2.49327L2.99288 11.9214C2.60236 12.3119 1.96919 12.3119 1.57867 11.9214C1.18815 11.5308 1.18815 10.8977 1.57867 10.5071L11.0068 1.07906C11.3973 0.688531 12.0304 0.688531 12.421 1.07906Z"
                fill={isExpanded ? "#fff" : ""}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.57854 1.07893C1.96906 0.688409 2.60223 0.688409 2.99275 1.07893L12.4208 10.507C12.8114 10.8975 12.8114 11.5307 12.4208 11.9212C12.0303 12.3118 11.3972 12.3118 11.0066 11.9212L1.57854 2.49315C1.18801 2.10262 1.18801 1.46946 1.57854 1.07893Z"
                fill={isExpanded ? "#fff" : ""}
            />
        </svg>
    );
};

export default CrossIcon;
