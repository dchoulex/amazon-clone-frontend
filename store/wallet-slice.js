import { createSlice } from "@reduxjs/toolkit";

const INITIAL_WALLET_SLICE_STATE = {
    walletPage: 1
};

const walletSlice = createSlice({
    name: "wallet",
    initialState: INITIAL_WALLET_SLICE_STATE,
    reducers: {
        changeWalletPage(state, action) {
            state.walletPage = action.payload.page
        }
    }
});

export const walletActions = walletSlice.actions;

export default walletSlice.reducer;