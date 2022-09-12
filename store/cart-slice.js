import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CART_SLICE_STATE = {
    currentTab: 0,
    cartTabPage: 1,
    saveTabPage: 1,
    buyAgainTabPage: 1,
    totalAmount: 0
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

        setTotalAmount(state, action) {
            state.totalAmount = action.payload.totalAmount
        },

        setCheckoutCartItem(state, action) {
            state.checkoutCartItem = action.payload.checkoutCartItem;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;