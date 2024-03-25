import { setSystemError } from "@/redux/user";
import { call, delay, put } from "redux-saga/effects";

interface FuntionInterface {
    apiFn: any;
    id: number;
    successStatus: string[];
    successFn: any;
    failFn?: any;
    timeLimit?: number;
    failStatus?: string[];
}

export function* timeLimitWrapper({ apiFn, id, successFn, failFn, timeLimit = 15, successStatus, failStatus }: FuntionInterface) {
    let continuePolling = 0;
    while (continuePolling < timeLimit) {
        yield delay(1000);
        const { data } = yield call(apiFn, id);

        if (successStatus.includes(data.status)) {
            continuePolling = 15;
            yield put(successFn);
        }

        if (failStatus?.includes(data.status)) {
            continuePolling = 15;
            yield put(failFn);
        }

        continuePolling++;
        if (continuePolling === timeLimit) {
            yield put(setSystemError(true));
            throw new Error("time out");
        }
    }
}
