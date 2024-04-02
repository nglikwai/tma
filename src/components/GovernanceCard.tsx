import "@/app/benchmark/governance/governance/index.css";
import { GovernanceComponentType, GovernanceData } from "@/app/benchmark/governance/governance/page";
import { AccordionPanel } from "@chakra-ui/react";
import { FC } from "react";
import AccordionItemWrapper from "./AccordionItemWrapper";

type props = {
    item: GovernanceData;
};

const GovernanceCard: FC<props> = ({ item }) => {
    return (
        <AccordionItemWrapper title={item.title}>
            <AccordionPanel className="!px-4 !py-8">
                <div className="flex flex-col gap-4">
                    {item.components.map((component: GovernanceComponentType) => (
                        <ComponentCard key={component.title} component={component} />
                    ))}
                </div>
            </AccordionPanel>
        </AccordionItemWrapper>
    );
};
export default GovernanceCard;

const ComponentCard: FC<{ component: GovernanceComponentType }> = ({ component }) => {
    if (component.type === "link") {
        return (
            <a className="text-[#0053B0]" href={component.href} target="_blank">
                <span className="mr-1">➜</span>
                <span>{component.title}</span>
            </a>
        );
    }
    if (component.type === "list") {
        return (
            <div className="flex flex-col gap-2">
                <h3>{component.title}</h3>
                <ul className="flex flex-col gap-2">{component.content?.map((item: string) => <li key={item}>{item}</li>)}</ul>
            </div>
        );
    }
    if (component.type === "table") {
        return (
            <div className="governance-table w-full flex flex-col gap-2">
                <h3>{component.title}</h3>
                <table>
                    <thead>
                        <tr>
                            <th className="w-[150px]">Years</th>
                            <th className="grow" colSpan={3}>
                                Minutes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023</td>
                            <td><a href="/">March</a></td>
                            <td><a href="/">July</a></td>
                            <td><a href="/">November</a></td>
                        </tr>
                        <tr>
                            <td>2022</td>
                            <td><a href="/">March</a></td>
                            <td><a href="/">July</a></td>
                            <td><a href="/">November</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
};
