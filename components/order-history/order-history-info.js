import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Paper from "@mui/material/Paper";

import { orderHistoryActions } from "../../store/order-history-slice";
import getPaginatedItems from "../../utils/getPaginatedItems";
import OrderPanelList from "./order-panel-list/order-panel-list";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import NoItemInfo from "../ui/no-item-info";

// const orderedItems = [
//     {
//         status: "delivered",
//         orderAt: "12 August 2022",
//         id: 1,
//         total: 1578,
//         address: "Address very long address",
//         orderId: "250-0899463-0763017",
//     },
//     {
//         status: "notDelivered",
//         orderAt: "12 August 2022",
//         id: 2,
//         total: 1578,
//         address: "Address very long address",
//         orderId: "250-0899463-0763017"
//     },
// ]

// const cancelledItems = [
//     {
//         orderAt: "12 Nov 2022",
//         id: 3,
//         total: 1578,
//         address: "Address very long address",
//         orderId: "250-0899463-0763017"
//     },
//     {
//         orderAt: "12 Nov 2022",
//         id: 4,
//         total: 1578,
//         address: "Address very long address",
//         orderId: "250-0899463-0763017"
//     },
// ];

function OrderHistoryInfo(props) {
    const { orders, title } = props;
    const dispatch = useDispatch();

    const orderHistoryTabItems = orders.filter(order => !order.isCanceled);
    const cancelTabItems = orders.filter(order => order.isCanceled);

    const currentTab = useSelector(state => state.orderHistory.currentTab)
    const currentOrderHistoryTabPage = useSelector(state => state.orderHistory.orderHistoryTabPage);
    const currentCancelTabPage = useSelector(state => state.orderHistory.cancelTabPage);

    const tabItems = {
        history: {
            numOfResults: orderHistoryTabItems.length,
            handleChange: (_, value) => {
                dispatch(orderHistoryActions.changeOrderHistoryTabPage({ page: value }))
            },
            isEmpty: currentTab === "history" && orderHistoryTabItems.length === 0,
            page: currentOrderHistoryTabPage,
            paginatedItems: getPaginatedItems(orderHistoryTabItems, currentOrderHistoryTabPage)
        },
        cancel: {
            numOfResults: cancelTabItems.length,
            handleChange: (_, value) => {
                dispatch(orderHistoryActions.changeCancelTabPage({ page: value }))
            },
            isEmpty: currentTab === "cancel" && cancelTabItems.length === 0,
            page: currentCancelTabPage,
            paginatedItems: getPaginatedItems(cancelTabItems, currentCancelTabPage)
        }
    };

    const handleChangeTab = (_, value) => {
        dispatch(orderHistoryActions.changeCurrentTab({ currentTab: value }));
    };

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle 
                    title={title} 
                    numOfResults={tabItems[currentTab].numOfResults}
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
                            onChange={handleChangeTab} 
                            aria-label="cart-tabs"
                        >
                            <Tab label="order history" value="history" disableRipple />

                            <Tab label="canceled orders" value="cancel" disableRipple />
                        </TabList>
                    </Box>

                    {!tabItems[currentTab].isEmpty &&
                        <Fragment>
                            <TabPanel 
                                value="history" 
                                className="py-2"
                            >
                                <OrderPanelList 
                                    items={tabItems["history"].
                                    paginatedItems} currentTab={currentTab} 
                                />
                            </TabPanel>

                            <TabPanel 
                                value="cancel"
                                className="py-2"
                            >
                                <OrderPanelList 
                                    items={tabItems["cancel"].
                                    paginatedItems} currentTab={currentTab} 
                                />
                            </TabPanel>
                        </Fragment>
                    }
                </TabContext>

                {tabItems[currentTab].isEmpty ?
                    <NoItemInfo /> :
                    <PaginationButtons 
                        numOfResults={tabItems[currentTab].numOfResults} 
                        page={tabItems[currentTab].page}
                        onChange={tabItems[currentTab].handleChange}
                    />
                }
            </Paper>
        </Box>
    )
};

export default OrderHistoryInfo;