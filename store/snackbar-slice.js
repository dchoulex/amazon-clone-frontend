import { createSlice } from "@reduxjs/toolkit";

const INITIAL_SNACKBAR_SLICE_STATE = {
    open: false,
    type: null,
    message: null
};

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState: INITIAL_SNACKBAR_SLICE_STATE,
    reducers: {
        setSnackbarState(state, action) {
            state.open = action.payload.open,
            state.type = action.payload.type,
            state.message = action.payload.message
        },

        closeSnackbar(state) {
            state.open = false
        }
    }
});

export const snackbarActions = snackbarSlice.actions;

export default snackbarSlice.reducer;