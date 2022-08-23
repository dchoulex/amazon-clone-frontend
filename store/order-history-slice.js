import { createSlice } from "@reduxjs/toolkit";

const INITIAL_ORDER_HISTORY_SLICE_STATE = {
    currentTab: "history",
    orderHistoryTabPage: 1,
    cancelTabPage: 1
};

const orderHistorySlice = createSlice({
    name: "orderHistory",
    initialState: INITIAL_ORDER_HISTORY_SLICE_STATE,
    reducers: {
        changeCancelTabPage(state, action) {
            state.cancelTabPage = action.payload.page
        },

        changeOrderHistoryTabPage(state, action) {
            state.orderHistoryTabPage = action.payload.page
        },

        changeCurrentTab(state, action) {
            state.currentTab = action.payload.currentTab
        }
    }
});

export const orderHistoryActions = orderHistorySlice.actions;

export default orderHistorySlice.reducer;