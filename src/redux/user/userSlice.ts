import { User } from "@/type/user.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserActionTypes } from "./type";

const initialState: UserSliceState = {
    user: null,
    job: 0,
    windowHistory: {
        systemError: false
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        [UserActionTypes.fetchUserRequest]: state => {
            state;
        },
        [UserActionTypes.fetchUserSuccess]: (state, action) => {
            state.user = action.payload;
        },
        [UserActionTypes.fetchUserFailure]: state => {
            state;
        },
        [UserActionTypes.newJob]: state => {
            state.job += 1;
        },
        [UserActionTypes.doneJob]: state => {
            state.job -= 1;
        },
        [UserActionTypes.setSystemError]: (state, action: PayloadAction<boolean>) => {
            state.windowHistory.systemError = action.payload;
        }
    }
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFailure, doneJob, newJob, setSystemError } = userSlice.actions;

export const getUserAction = (type: UserActionTypes) => `${userSlice.name}/${type}`;

export interface UserSliceState {
    user: User | null;
    job: number;
    windowHistory: {
        systemError: boolean;
    };
}
