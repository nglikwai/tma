import { all, fork } from "redux-saga/effects";

import { userWatcher } from "./user/saga";

const combineSagas = (sagas: any) =>
    function* rootSaga() {
        try {
            yield all(sagas.map(fork));
        } catch (err) {
            console.log("react saga error");
        }
    };

const rootSaga = combineSagas([userWatcher]);

export default rootSaga;
