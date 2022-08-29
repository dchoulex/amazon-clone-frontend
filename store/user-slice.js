import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_SLICE_STATE = {
    name: "Hello, Sign in",
    email: "",
    phoneNumber: "",
    amazonPoints: 0,
    defaultAddressPostCode: "",
    defaultAddressLine: "",
    defaultCreditCard: {},
    cartNumber: 0
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_USER_SLICE_STATE,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
            state.amazonPoints = action.payload.amazonPoints;
        },

        setDefaultAddress(state, action) {
            state.defaultAddressPostCode = action.payload.defaultAddressPostCode
            state.defaultAddressLine = action.payload.defaultAddressLine
        },

        setDefaultCreditCard(state, action) {
            state.defaultCreditCard = action.payload.defaultCreditCard
        },
        
        setCartNumber(state, action) {
            state.cartNumber = action.payload.cartNumber
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;