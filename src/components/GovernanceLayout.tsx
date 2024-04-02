import { FC } from "react";
import BenchMarkLayout from "./BenchMarkLayout";
import LinkList from "./LinkList";

type props = {
    children: React.ReactNode;
};

const GovernanceLayout: FC<props> = ({ children }) => {
    return (
        <BenchMarkLayout title="Governance">
            <LinkList
                style={{ activeColor: "#1890FF", inactiveColor: "#757575" }}
                list={[
                    { key: "Consultation", href: "consultation", id: "governance/consultation" },
                    {
                        key: "Governance",
                        href: "governance",
                        id: "governance/governance"
                    },
                    { key: "Specifications", href: "specifications", id: "governance/specifications" }
                ]}
            />
            {children}
        </BenchMarkLayout>
    );
};

export default GovernanceLayout;
