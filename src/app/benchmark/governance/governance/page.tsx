"use server";
import GovernanceCard from "@/components/GovernanceCard";
import GovernanceLayout from "@/components/GovernanceLayout";
import { Accordion } from "@chakra-ui/react";
import { NextPage } from "next";

export type GovernanceComponentType = {
    type: string;
    title?: string;
    href?: string;
    content?: any[];
};

export type GovernanceData = {
    title: string;
    components: GovernanceComponentType[];
};
const data: GovernanceData[] = [
    {
        title: "Surveillance and Governance Committee (SGC)",
        components: [
            {
                type: "link",
                title: "Terms of Reference",
                href: "https://www.tma.org.hk/FixingsFile/TMA_SGC_Terms_of_Reference.pdf?361"
            },
            {
                type: "link",
                title: "Membership List and Selection Criteria",
                href: "https://www.tma.org.hk/FixingsFile/TMA_SGC_Membership_List_and_Selection_Criteria.pdf?361"
            },
            {
                type: "list",
                title: "Declaration of interest",
                content: [
                    "The forms used by TMA SGC members and TMA Office staff responsible for benchmark administration to report conflict of interest are annexed to the Conflicts of Interest policy.",
                    "At each SGC meeting, members have to declare whether there are conflicts of interest that others and the secretary should be aware of.  Such declarations are documented in SGC meeting minutes which are published on TMA website."
                ]
            },
            {
                type: "table",
                title: "Meeting Minutes",
                content: [
                    {
                        date: "2021-01-01",
                        link: "https://www.google.com"
                    },
                    {
                        date: "2021-02-01",
                        link: "https://www.google.com"
                    },
                    {
                        date: "2021-03-01",
                        link: "https://www.google.com"
                    }
                ]
            }
        ]
    },
    {
        title: `TMA's administered benchmarks are IOSCO-compliant`,
        components: [
            {
                type: "link",
                title: "The International Organization of Securities Commissions (IOSCO)'s Principles for Financial Benchmarks",
                href: "https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf?275"
            },
            {
                type: "link",
                title: "Policy on IOSCO Independent Assurance Review",
                href: "https://www.tma.org.hk/FixingsFile/Policy_on_IOSCO_Independent_Assurance_Review.pdf?275"
            },
            {
                type: "link",
                title: "Independent Assurance Review by external auditor (2022)",
                href: "https://www.tma.org.hk/en_auditRpt_disclaimer.aspx"
            }
        ]
    },
    {
        title: "Code of Conduct",
        components: [
            {
                type: "link",
                title: "Benchmark Submitters (HKD and CNH HIBOR)",
                href: "https://www.hkma.gov.hk/media/eng/doc/key-functions/banking-stability/supervisory-policy-manual/CG-7.pdf?275"
            },
            {
                type: "link",
                title: "➜ Financial benchmarks based on transactions (HONIA and Spot Rates)",
                href: "https://www.tma.org.hk/FixingsFile/Code_of_Conduct_for_TMA_financial_benchmarks_based_on_transactions.pdf?275"
            }
        ]
    },
    {
        title: "Error Correction",
        components: [
            {
                type: "link",
                title: "Error Correction Policy",
                href: "https://www.tma.org.hk/FixingsFile/TMA_Error_Correction_Policy.pdf?275"
            }
        ]
    },
    {
        title: "Conflicts of Interest",
        components: [
            {
                type: "link",
                title: "Conflicts of Interest Policy",
                href: "https://www.tma.org.hk/FixingsFile/TMA%20SGC%20Conflicts%20of%20interest%20policy.pdf?275"
            }
        ]
    },
    {
        title: "Complaints & Whistleblowing",
        components: [
            {
                type: "link",
                title: "Whistleblowing Policy",
                href: "https://www.tma.org.hk/FixingsFile/Whistleblowing_policy.pdf?275"
            },
            {
                type: "link",
                title: "Contacts at TMA",
                href: "https://www.tma.org.hk/en_market_disclaimer.aspx"
            },
            {
                type: "link",
                title: "Complaints Policy",
                href: "https://www.tma.org.hk/FixingsFile/Complaints_policy.pdf?275"
            },
            {
                type: "link",
                title: "Contacts at TMA",
                href: "https://www.tma.org.hk/en_market_disclaimer.aspx"
            }
        ]
    },
    {
        title: "Transition",
        components: [
            {
                type: "link",
                title: "Benchmark Cessation and transition policy",
                href: "https://www.tma.org.hk/FixingsFile/Benchmark_cessation_and_transition_policy.pdf?275"
            }
        ]
    },
    {
        title: "Oversight of third parties",
        components: [
            {
                type: "link",
                title: "Policy on review of performance of third parties",
                href: "https://www.tma.org.hk/FixingsFile/Policy_on_review_of_performance_of_third_parties.pdf?275"
            }
        ]
    },
    {
        title: "Disclosure of incidences of errors",
        components: [
            {
                type: "table",
                content: []
            }
        ]
    }
];

const GovernancePage: NextPage = async () => {
    return (
        <GovernanceLayout>
            <>
                <Accordion allowToggle defaultIndex={0}>
                    {data.map(item => (
                        <GovernanceCard item={item} />
                    ))}
                </Accordion>
            </>
        </GovernanceLayout>
    );
};
export default GovernancePage;
