import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import PleaseLoginCard from "../../components/ui/please-login-card";
import CartInfo from "../../components/cart/cart-info";

// const cartItems = [
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: false
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: false
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: false
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: false
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 1,
//         price: 5000000,
//         point: 1000,
//         isSaved: true
//     }
// ]

function CartPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Shopping Cart";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <CartInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"cart"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default CartPage;