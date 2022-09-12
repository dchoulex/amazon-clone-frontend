import { Fragment, useState } from "react";
import useSWR from "swr";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import getAPI from "../../utils/getAPI";
import PageTitle from "../ui/page-title/page-title";
import OrderDetailsSummary from "./order-details-summary";
import OrderDetailsItems from "./order-details-items";
import CustomizedSnackbar from "../ui/customized-snackbar";

function OrderDetailsInfo(props) {
    const { title, orderId } = props;

    const [ snackbarState, setSnackbarState ] = useState({
        open: false,
        type: null,
        message: null
    });

    const GET_ORDER_DETAILS_API = getAPI(process.env.NEXT_PUBLIC_GET_ORDER_DETAILS_API, { id: orderId });

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(GET_ORDER_DETAILS_API, fetcher);

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>

    const { order, orderItems } = data.data;
    const { user, shippingAddress, shippingCost } = order;

    const displayedOrderDate = order.orderDate.split("T")[0];

    const displayedShippingCost = order.isExpedited ? shippingCost.expeditedShippingCost : shippingCost.standardShippingCost;

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />

                <Box className="flex" pl={3} mb={2}>
                    <Typography variant="body1" className="mr-3">
                        Ordered on {displayedOrderDate} 
                    </Typography>  

                    <Divider orientation="vertical" flexItem />

                    <Typography className="ml-3 mr-3">
                        Order# {order._id.slice(0, 10)}
                    </Typography>

                    {order.status === "Canceled" && 
                        <Fragment>
                            <Divider orientation="vertical" flexItem />

                            <Typography className="ml-3 text-red-500">
                                {order.status}
                            </Typography>        
                        </Fragment>
                    }        
                </Box>

                <OrderDetailsSummary 
                    name={user.name}
                    postCode={shippingAddress.postCode}
                    city={shippingAddress.city}
                    rest={shippingAddress.rest}
                    subTotal={order.subTotal}
                    total={order.total}
                    tax={order.tax}
                    grandTotal={order.grandTotal}
                    paymentMethod={order.paymentMethod}
                    creditCard={order.creditCard}
                    shippingCost={displayedShippingCost}
                />
                
                <OrderDetailsItems 
                    orderItems={orderItems}
                    setSnackbarState={setSnackbarState}
                />
            </Paper>

            <CustomizedSnackbar
                snackbarState={snackbarState}
                setSnackbarState={setSnackbarState}
            />
        </Box>
    )
};

export default OrderDetailsInfo;