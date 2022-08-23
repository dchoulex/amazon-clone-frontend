import { createSlice } from "@reduxjs/toolkit";

const INITIAL_REVIEW_SLICE_STATE = {
    reviewPage: 1
};

const reviewSlice = createSlice({
    name: "review",
    initialState: INITIAL_REVIEW_SLICE_STATE,
    reducers: {
        changeReviewPage(state, action) {
            state.reviewPage = action.payload.page
        }
    }
});

export const reviewActions = reviewSlice.actions;

export default reviewSlice.reducer;