export enum UserActionTypes {
    fetchUserRequest = "fetchUserRequest",
    fetchUserSuccess = "fetchUserSuccess",
    fetchUserFailure = "fetchUserFailure",
    newJob = "newJob",
    doneJob = "doneJob",
    setSystemError = "setSystemError"
}

export type FetchUserRequestPayload = {
    id: string;
};
