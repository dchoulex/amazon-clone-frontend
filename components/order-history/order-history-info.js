import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import useSWR from "swr";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Paper from "@mui/material/Paper";

import { orderHistoryActions } from "../../store/order-history-slice";
import getPaginatedItems from "../../utils/getPaginatedItems";
import OrderPanelList from "./order-panel-list";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import NoItemInfo from "../ui/dogs-info/no-item-info";
import CustomizedSnackbar from "../ui/customized-snackbar";
import ErrorInfo from "../ui/dogs-info/error-info";
import PageSpinner from "../ui/pageSpinner";

function OrderHistoryInfo(props) {
    const { title } = props;
    const dispatch = useDispatch();

    const [ snackbarState, setSnackbarState ] = useState({
        open: false,
        type: null,
        message: null
    });

    const currentTab = useSelector(state => state.orderHistory.currentTab)
    const currentOrderHistoryTabPage = useSelector(state => state.orderHistory.orderHistoryTabPage);
    const currentCancelTabPage = useSelector(state => state.orderHistory.cancelTabPage);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_ORDERS_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />
    
    const orders = data.data;

    const orderHistoryTabItems = orders.filter(data => !data.order.isCanceled);
    const cancelTabItems = orders.filter(data => data.order.isCanceled);

    const tabItems = [
        {
            numOfResults: orderHistoryTabItems.length,
            handleChange: (_, value) => {
                dispatch(orderHistoryActions.changeOrderHistoryTabPage({ page: value }))
            },
            isEmpty: currentTab === 0 && orderHistoryTabItems.length === 0,
            page: currentOrderHistoryTabPage,
            paginatedItems: getPaginatedItems(orderHistoryTabItems, currentOrderHistoryTabPage)
        },
        {
            numOfResults: cancelTabItems.length,
            handleChange: (_, value) => {
                dispatch(orderHistoryActions.changeCancelTabPage({ page: value }))
            },
            isEmpty: currentTab === 1 && cancelTabItems.length === 0,
            page: currentCancelTabPage,
            paginatedItems: getPaginatedItems(cancelTabItems, currentCancelTabPage)
        }
    ];

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
                            <Tab label="order history" value={0} disableRipple />

                            <Tab label="canceled orders" value={1} disableRipple />
                        </TabList>
                    </Box>

                    {!tabItems[currentTab].isEmpty &&
                        <Fragment>
                            <TabPanel 
                                value={0} 
                                className="py-2"
                            >
                                <OrderPanelList 
                                    items={tabItems[0].paginatedItems} 
                                    currentTab={currentTab} 
                                    setSnackbarState={setSnackbarState}
                                />
                            </TabPanel>

                            <TabPanel 
                                value={1}
                                className="py-2"
                            >
                                <OrderPanelList 
                                    items={tabItems[1].paginatedItems} 
                                    currentTab={currentTab}
                                    setSnackbarState={setSnackbarState} 
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

            <CustomizedSnackbar
                snackbarState={snackbarState}
                setSnackbarState={setSnackbarState}
            />
        </Box>
    )
};

export default OrderHistoryInfo;