import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";
import orderHistoryReducer from "./order-history-slice";
import reviewReducer from "./review-slice";
import addressReducer from "./address-slice";
import walletReducer from "./wallet-slice";
import userReducer from "./user-slice";
import productReducer from "./product-slice";
import checkoutReducer from "./checkout-slice";
import snackbarReducer from "./snackbar-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        orderHistory: orderHistoryReducer,
        review: reviewReducer,
        address: addressReducer,
        wallet: walletReducer,
        user: userReducer,
        product: productReducer,
        checkout: checkoutReducer,
        snackbar: snackbarReducer
    }
});

export default store;