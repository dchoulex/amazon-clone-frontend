import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_SLICE_STATE = {
    name: "Hello, Sign in",
    email: "",
    phoneNumber: "",
    amazonPoints: 0,
    defaultAddress: "",
    cartNumber: 0
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_USER_SLICE_STATE,
    reducers: {
        setUserInfo(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
            state.amazonPoints = action.payload.amazonPoints;
        },
        setDefaultAddress(state, action) {
            state.defaultAddress = action.payload.defaultAddress
        },
        setCartNumber(state, action) {
            state.cartNumber = action.payload.cartNumber
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;