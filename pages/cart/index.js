import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import axios from "axios";

import getAPI from "../../utils/getAPI";
import PleaseLoginCard from "../../components/ui/please-login-card";
import CartInfo from "../../components/cart/cart-info";

const cartItems = [
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: false
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: false
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: false
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: false
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000,
        isSaved: true
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 1,
        price: 5000000,
        point: 1000,
        isSaved: true
    }
]

function CartPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Shopping Cart";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <CartInfo 
                    cartItems={cartItems}  
                    title={pageTitle} 
                /> :
                <PleaseLoginCard 
                    page={"cart"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default CartPage;

// export async function getServerSideProps(context) {
//     const { params, req, res } = context;

    

//     const GET_ALL_CART_ITEMS_API = getAPI(process.env.NEXT_PUBLIC_GET_ALL_CART_ITEMS_API, { query: "isSaved=false"});
//     console.log(process.env.DEV_URL + GET_ALL_CART_ITEMS_API)

//     const apiRes = await fetch(process.env.DEV_URL + GET_ALL_CART_ITEMS_API);

//     console.log(apiRes)
//     const data = await apiRes.json();

//     console.log(data);

//     return {
//         props: {
//             carts: apiRes.data
//         }
//     }

// }