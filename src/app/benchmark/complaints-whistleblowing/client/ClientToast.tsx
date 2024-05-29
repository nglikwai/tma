"use client";

import { useToast } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ClientSideComponent = () => {
    const toast = useToast();
    const query = useSearchParams();
    const success = query.get("submit");
    useEffect(() => {
        if (success === "success") {
            toast({
                duration: 9000,
                position: "top",
                render: () => (
                    <div className="bg-[#deffe6] flex justify-center py-2 rounded-md shadow-sm text-[#185828]">
                        Form submitted successfully
                    </div>
                )
            });
        }
    }, []);
    return <></>;
};

export default ClientSideComponent;
