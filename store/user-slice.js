import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USER_SLICE_STATE = {
    name: "Hello, Sign in",
    email: "",
    phoneNumber: "",
    amazonPoints: 0,
    defaultAddress: {},
    defaultCreditCard: {}
};

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_USER_SLICE_STATE,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phoneNumber = action.payload.phoneNumber;
            state.amazonPoints = action.payload.amazonPoints,
            state.defaultAddress = action.payload.defaultAddress,
            state.defaultCreditCard = action.payload.defaultCreditCard
        },
        
        changeUserDefaultAddress(state, action) {
            state.defaultAddress = action.payload.defaultAddress
        },

        changeUserDefaultCreditCard(state, action) {
            state.defaultCreditCard = action.payload.defaultCreditCard
        },

        changeUserName(state, action) {
            state.name = action.payload.name
        },

        changeAmazonPoints(state, action) {
            state.amazonPoints = action.payload.amazonPoints
        },

        reinitialize(state) {
            state.name = "Hello, Sign in",
            state.email = "",
            phoneNumber = "",
            amazonPoints = 0,
            defaultAddress = {},
            defaultCreditCard = {}
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;