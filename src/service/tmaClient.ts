import { BaseClientService } from "./baseClientService";

const kdpEShopClient = BaseClientService({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "",
    withCredentials: false
});

export default { ...kdpEShopClient };
