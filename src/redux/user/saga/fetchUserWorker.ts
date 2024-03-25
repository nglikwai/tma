import * as userApi from "@/service/user.service";
import { jobWrapper } from "@/utils";
import { call, put } from "redux-saga/effects";
import { fetchUserFailure, fetchUserSuccess } from "..";

export function* fetchUserWorker() {
    yield jobWrapper(
        function* () {
            const { data } = yield call({ context: userApi, fn: userApi.loadUser });
            yield put(fetchUserSuccess(data));
        },
        function* () {
            yield put(fetchUserFailure());
        }
    );
}
