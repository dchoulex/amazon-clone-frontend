import { createSlice } from "@reduxjs/toolkit";

const INITIAL_PRODUCT_SLICE_STATE = {
    products: []
};

const productSlice = createSlice({
    name: "product",
    initialState: INITIAL_PRODUCT_SLICE_STATE,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload.products
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice.reducer;