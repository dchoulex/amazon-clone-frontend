import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH_SLICE_STATE = {
    isAuthenticated: false,
    OTP: null,
    email: null
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_AUTH_SLICE_STATE,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        
        logout(state) {
            state.isAuthenticated = false;
        },

        setOTP(state, action) {
            state.OTP = action.payload.OTP
        },

        setUserEmail(state, action) {
            state.email = action.payload.email
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;