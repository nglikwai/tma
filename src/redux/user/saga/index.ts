import { all, takeLatest } from "redux-saga/effects";
import { getUserAction } from "..";
import { UserActionTypes } from "../type";
import { fetchUserWorker } from "./fetchUserWorker";

export function* userWatcher() {
    yield all([takeLatest(getUserAction(UserActionTypes.fetchUserRequest), fetchUserWorker)]);
}
