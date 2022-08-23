import { createSlice } from "@reduxjs/toolkit";

const INITIAL_ADDRESS_SLICE_STATE = {
    addressPage: 1
};

const addressSlice = createSlice({
    name: "address",
    initialState: INITIAL_ADDRESS_SLICE_STATE,
    reducers: {
        changeAddressPage(state, action) {
            state.addressPage = action.payload.page
        }
    }
});

export const addressActions = addressSlice.actions;

export default addressSlice.reducer;