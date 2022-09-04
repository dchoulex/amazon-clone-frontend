import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import PleaseLoginCard from "../../../components/ui/please-login-card";
import OrderHistoryInfo from "../../../components/order-history/order-history-info";

const orders = [
    {
        status: "delivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        total: 1578,
        shipTo: "Address very long address",
        orderId: "250-0899463-0763017",
        isCanceled: false
    },
];

function OrderHistoryPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Order History";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <OrderHistoryInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"order"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default OrderHistoryPage;