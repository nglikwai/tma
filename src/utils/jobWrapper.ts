import { doneJob, newJob } from "@/redux/user";
import { put } from "redux-saga/effects";

export function* jobWrapper(callback: any, errorHandler?: any) {
    yield put(newJob());
    try {
        yield callback();
    } catch (error) {
        if (errorHandler) yield errorHandler(error);
    } finally {
        yield put(doneJob());
    }
}
