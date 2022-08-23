import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART_SLICE_STATE = {
    currentTab: "cart",
    cartTabPage: 1,
    saveTabPage: 1,
    buyAgainTabPage: 1
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_CART_SLICE_STATE,
    reducers: {
        changeCartTabPage(state, action) {
            state.cartTabPage = action.payload.page
        },

        changeSaveTabPage(state, action) {
            state.saveTabPage = action.payload.page
        },

        changeBuyAgainTabPage(state, action) {
            state.buyAgainTabPage = action.payload.page
        },

        changeCurrentTab(state, action) {
            state.currentTab = action.payload.currentTab
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;