import { createSlice } from "@reduxjs/toolkit";

const INITIAL_PRODUCT_SLICE_STATE = {
    products: [],
    categoryProducts: []
};

const productSlice = createSlice({
    name: "product",
    initialState: INITIAL_PRODUCT_SLICE_STATE,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload.products
        },

        setCategoryProducts(state, action) {
            state.categoryProducts = action.payload.categoryProducts
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice.reducer;