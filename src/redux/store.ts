/* Core */
import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";

/* Instruments */
import createSagaMiddleware from "redux-saga";
import { middleware } from "./middleware";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware).concat(sagaMiddleware)
    });

    sagaMiddleware.run(rootSaga); // Now running the saga middleware after store creation

    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;
