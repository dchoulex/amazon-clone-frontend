import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";
import orderHistoryReducer from "./order-history-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        orderHistory: orderHistoryReducer
    }
});

export default store;