import { FC } from "react";
import BenchMarkLayout from "./BenchMarkLayout";
import BenchmarkMenu from "./BenchmarkMenu";

type props = {
    children: React.ReactNode;
};

const menu = [
    { key: "Consultation", href: "consultation", id: "governance/consultation", length: 91 },
    {
        key: "Governance",
        href: "governance",
        id: "governance/governance",
        length: 87
    },
    { key: "Specifications", href: "specifications", id: "governance/specifications", length: 102 }
];

const GovernanceLayout: FC<props> = ({ children }) => {
    return (
        <BenchMarkLayout title="Governance">
            <BenchmarkMenu menu={menu} style={{ activeColor: "#1890FF", inactiveColor: "#757575" }} id="gov" />

            {children}
        </BenchMarkLayout>
    );
};

export default GovernanceLayout;
