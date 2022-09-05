import { createSlice } from "@reduxjs/toolkit";

const INITIAL_REVIEW_SLICE_STATE = {
    currentTab: "review",
    reviewPage: 1,
    reviewableProductPage: 1
};

const reviewSlice = createSlice({
    name: "review",
    initialState: INITIAL_REVIEW_SLICE_STATE,
    reducers: {
        changeReviewTabPage(state, action) {
            state.reviewPage = action.payload.page
        },

        changeReviewTabPage(state, action) {
            state.reviewPage = action.payload.page
        },

        changeCurrentTab(state, action) {
            state.currentTab = action.payload.currentTab
        }
    }
});

export const reviewActions = reviewSlice.actions;

export default reviewSlice.reducer;