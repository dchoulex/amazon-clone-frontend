import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import PleaseLoginCard from "../../../components/ui/please-login-card";
import OrderHistoryInfo from "../../../components/order-history/order-history-info";

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