import { Fragment } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import PleaseLoginCard from "../components/ui/please-login-card";
import CartInfo from "../components/cart/cart-info";
import PageTitle
 from "../components/ui/page-title";

const cartItems = [
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 1,
        price: 5000000,
        point: 1000
    },
]

function CartPage() {
    const isLogin = true;
    const numberOfResults = 0;

    return (
        <Box p={3} className="bg-gray-200 w-screen">
            {isLogin ? 
                <CartInfo cartItems={cartItems} numberOfResults={numberOfResults} /> :
                <PleaseLoginCard page={"cart"} title="Shopping Cart" />
            }
        </Box>
    )
};

export default CartPage;