import axios from "axios";
import kdpEShopClient from "./tmaClient";

// const loadUser = (): Promise<any> => kdpEShopClient.get(`/api/auth/getMemberInfo`);

const loadUser = (): Promise<any> =>
    new Promise((resolve, reject) => {
        resolve({
            data: {
                id: 1,
                name: "Test",
                email: ""
            }
        });
    });

const login = (passcord: any) => kdpEShopClient.post(`/api/auth/passcode`, { passcord });

const logging = (token: string) =>
    axios.post("https://api.dse00.com/admins/token", {
        token
    });

export { loadUser, logging, login };
