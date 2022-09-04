import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import PleaseLoginCard from "../../../components/ui/please-login-card";
import OrderDetailsInfo from "../../../components/order-details/order-details-info";

const order = {
    status: "delivered",
    orderAt: "12 August 2022",
    total: 1578,
    shipTo: "Address very long address",
    orderId: "250-0899463-0763017",
    name:"David choulex",
    address: "Sth",
    city: "Oshiage",
    postCode: "124-4321",
    credit: "xxx-xxxx",
    orderItems: [
        {
            name: "Ergotron LX Desk Mount",
            stock: 0,
            price: 5000000,
            point: 1000
        },
        {
            name: "Ergotron LX Desk Mount",
            stock: 1,
            price: 5000000,
            point: 1000
        }
    ]
};

function OrderDetailsPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Order Details";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <OrderDetailsInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"order"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default OrderDetailsPage;