import { useState } from "react";
import Link from "next/link";
import axios from "axios";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import getAPI from "../../utils/getAPI";
import OrderHistorySummary from "./order-history-summary";
import OrderItemList from "../order/order-item-list";

function OrderPanelList(props) {
    const { items, setSnackbarState } = props;
    const [ expanded, setExpanded ] = useState(0);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return (
        <Box py={2}>
            {items.map((item, index) => {
                const { order, orderItems } = item;
                const orderId = order._id;

                const handleCancelOrder = async() => {
                    const CANCEL_ORDER_API = getAPI(process.env.NEXT_PUBLIC_CANCEL_ORDER_API, { id: orderId });
            
                    try {
                        const res = await axios.delete(CANCEL_ORDER_API);
            
                        if (res.status === 204) {
                            setSnackbarState({ 
                                open: true, 
                                type: "success", 
                                message: "Successfully cancel order."
                            });
                        }
                    } catch(err) {
                        if (err) {
                            setSnackbarState({ 
                                open: true , 
                                type: "error", 
                                message: "Oops... Something went wrong."
                            });
                        }
                    }
                };

                return (
                    <Accordion 
                        key={`order-${index}`}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                        defaultExpanded={index === 0}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={orderId}
                            className="bg-[#b0cae5]"
                        >
                            <OrderHistorySummary
                                orderDate={order.orderDate}
                                total={order.grandTotal}
                                address={`${order.shippingAddress.city}, ${order.shippingAddress.rest}`}
                                id={orderId}
                                orderStatus={order.status}
                                isCanceled={order.isCanceled}
                            />
                        </AccordionSummary>

                        <AccordionDetails>
                            <Stack direction="row">
                                <Link href={`/account/order-history/${orderId}`}>
                                    <Button>
                                        View order details
                                    </Button>
                                </Link>

                                {(order.status === "Ordered" && !order.isCanceled) &&
                                    <Button
                                        variant="text"
                                        color="error"
                                        onClick={handleCancelOrder}
                                        className="ml-auto"
                                    >
                                        Cancel
                                    </Button>
                                }
                            </Stack>

                            <Divider />
                            
                            <OrderItemList 
                                orderItems={orderItems}
                                orderId={orderId}
                                isCanceled={order.isCanceled}
                                setSnackbarState={setSnackbarState}
                            />
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Box>
    )
};

export default OrderPanelList;