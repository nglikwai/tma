import { combineSlices } from "@reduxjs/toolkit";

import { userSlice } from "./user";

const reducer = combineSlices({
    user: userSlice.reducer
});

export default reducer;
