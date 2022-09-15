import { createSlice } from "@reduxjs/toolkit";

const INITIAL_CHECKOUT_SLICE_STATE = {
    shippingAddress: {},
    shippingMethod: "standard",
    shippingCost: null,
    paymentMethod: "credit",
    creditCard: {},
    pointUsed: 0
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: INITIAL_CHECKOUT_SLICE_STATE,
    reducers: {
        setShippingAddress(state, action) {
            state.shippingAddress = action.payload.shippingAddress;
        },

        setShippingMethod(state, action) {
            state.shippingMethod = action.payload.shippingMethod
        },

        setShippingCost(state, action) {
            state.shippingCost = action.payload.shippingCost
        },

        setPaymentMethod(state, action) {
            state.paymentMethod = action.payload.paymentMethod;
        },

        setCreditCard(state, action) {
            state.creditCard = action.payload.creditCard
        },

        setPointUsed(state, action) {
            state.pointUsed = action.payload.pointUsed
        }
    }
});

export const checkoutActions = checkoutSlice.actions;

export default checkoutSlice.reducer;