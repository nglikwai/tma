import { verifyEmail } from "@/service/complaint.service";
import { NextPage } from "next";

type props = {
    searchParams: { code?: string };
    params: any;
};

const VerifyEmailPage: NextPage<props> = async ({ searchParams }) => {
    let res;
    if (searchParams.code) {
        res = await verifyEmail(searchParams.code);
    }

    return <>{res ? <div>Email verified Success</div> : <div>Invalid Code</div>}</>;
};

export default VerifyEmailPage;
