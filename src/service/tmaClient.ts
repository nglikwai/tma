import { BaseClientService } from "./baseClientService";

const tmaClient = BaseClientService({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "",
    withCredentials: false
});

export default { ...tmaClient };
