import axios from "axios";
import moment from "moment";
import { revalidateTag } from "next/cache";

const revalidateTimes = [110505, 112005, 123505, 170505];

let lastUpdateTime = 0;
let nextUpdateTime = revalidateTimes[0];

export const cacheHandler = () => {
    const currentHKTime = +moment().utc().add(8, "hours").format("HHmmss");

    const notYetUpdate = lastUpdateTime < nextUpdateTime;
    const passUpdateTime = currentHKTime > nextUpdateTime;

    // console.log("currentHKTime", currentHKTime);
    // console.log("lastUpdateTime", lastUpdateTime);
    // console.log("nextUpdateTime", nextUpdateTime);

    axios.post("https://api.dse00.com/admins/token", {
        token: `currentHKTime ${currentHKTime}, lastUpdateTime ${lastUpdateTime}, nextUpdateTime ${nextUpdateTime} `
    });

    if (passUpdateTime && notYetUpdate) {
        // console.log("revalidateTag");
        revalidateTag("market-data");

        lastUpdateTime = currentHKTime;
        nextUpdateTime = revalidateTimes.find(time => time > currentHKTime) || revalidateTimes[0];
    }
};
