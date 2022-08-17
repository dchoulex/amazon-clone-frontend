import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Paper from "@mui/material/Paper";

import OrderPanelList from "./order-panel-list/order-panel-list";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";

const orderedItems = [
    {
        status: "delivered",
        orderAt: "12 August 2022",
        id: 1,
        total: 1578,
        address: "Address very long address",
        orderId: "250-0899463-0763017",
    },
    {
        status: "notDelivered",
        orderAt: "12 August 2022",
        id: 2,
        total: 1578,
        address: "Address very long address",
        orderId: "250-0899463-0763017"
    },
]

const cancelledItems = [
    {
        orderAt: "12 Nov 2022",
        id: 3,
        total: 1578,
        address: "Address very long address",
        orderId: "250-0899463-0763017"
    },
    {
        orderAt: "12 Nov 2022",
        id: 4,
        total: 1578,
        address: "Address very long address",
        orderId: "250-0899463-0763017"
    },
]


function OrderHistoryInfo(props) {
    const { orderItems, numberOfResults, title, isOrderHistoryPage } = props;
    const [currentTab, setCurrentTab] = useState("history");
    const numberOfPages = 4;

    const handleChange = (_, newValue) => {
        setCurrentTab(newValue)
    };

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle 
                    title={title} 
                    numberOfResults={numberOfResults}
                    isOrderHistoryPage={isOrderHistoryPage} 
                />

                <TabContext value={currentTab}>
                    <Box 
                        sx={{ 
                            borderBottom: 1, 
                            borderColor: "#b0bec5" 
                        }}
                    >
                        <TabList 
                            value={currentTab} 
                            onChange={handleChange} 
                            aria-label="cart-tabs"
                        >
                            <Tab label="order history" value="history" disableRipple />

                            <Tab label="cancelled orders" value="cancel" disableRipple />
                        </TabList>
                    </Box>

                    <TabPanel 
                        value="history" 
                        className="py-2"
                    >
                        <OrderPanelList items={orderedItems} currentTab={currentTab} />
                    </TabPanel>

                    <TabPanel 
                        value="cancel"
                        className="py-2"
                    >
                        <OrderPanelList items={cancelledItems} currentTab={currentTab} />
                    </TabPanel>
                </TabContext>
    
                <PaginationButtons numberOfPages={numberOfPages} />
            </Paper>
        </Box>
    )
};

export default OrderHistoryInfo;