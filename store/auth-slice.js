import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH_SLICE_STATE = {
    isLogin: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_AUTH_SLICE_STATE,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;