import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";
import orderHistoryReducer from "./order-history-slice";
import reviewReducer from "./review-slice";
import addressReducer from "./address-slice";
import walletReducer from "./wallet-slice";
import userReducer from "./user-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        orderHistory: orderHistoryReducer,
        review: reviewReducer,
        address: addressReducer,
        wallet: walletReducer,
        user: userReducer
    }
});

export default store;