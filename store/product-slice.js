import { createSlice } from "@reduxjs/toolkit";

const INITIAL_PRODUCT_SLICE_STATE = {
    products: [],
    categoryProducts: [],
    productCategoryPage: 1,
    searchProductPage: 1
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
        },

        setProductCategoryPage(state, actions) {
            state.productCategoryPage = actions.payload.page
        },

        setSearchProductPage(state, actions) {
            state.searchProductPage = actions.payload.page
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice.reducer;