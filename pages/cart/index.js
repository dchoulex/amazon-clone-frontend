import Box from "@mui/material/Box";

import PleaseLoginCard from "../../components/ui/please-login-card";
import CartInfo from "../../components/cart/cart-info";

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
    const pageTitle = "Shopping Cart";

    return (
        <Box p={3} className="bg-gray-200 w-screen">
            {isLogin ? 
                <CartInfo cartItems={cartItems} numberOfResults={numberOfResults} title={pageTitle} /> :
                <PleaseLoginCard page={"cart"} title={pageTitle} />
            }
        </Box>
    )
};

export default CartPage;