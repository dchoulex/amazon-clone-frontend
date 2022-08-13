import Box from "@mui/material/Box";

import PleaseLoginCard from "../../components/ui/please-login-card";
import OrderHistoryInfo from "../../components/order-history/order-history-info";

const orderItems = [
    {
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017"
    },
    {
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017"
    },
]

function OrderHistoryPage() {
    const isLogin = true;
    const numberOfResults = 0;
    const pageTitle = "Your Orders"

    return (
        <Box p={3} className="bg-gray-200 w-screen">
            {isLogin ? 
                <OrderHistoryInfo orderItems={orderItems} numberOfResults={numberOfResults} title={pageTitle} /> :
                <PleaseLoginCard page={"order"} title={pageTitle} />
            }
        </Box>
    )
};

export default OrderHistoryPage;