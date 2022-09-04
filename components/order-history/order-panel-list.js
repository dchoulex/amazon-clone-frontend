import { useState } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import OrderHistorySummary from "./order-history-summary";
import OrderItemList from "../order/order-item-list";

function OrderPanelList(props) {
    const { items } = props;
    const [ expanded, setExpanded ] = useState(0);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return (
        <Box py={2}>
            {items.map((item, index) => {
                const { order, orderItems } = item;
                const orderId = order._id;

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
                            <Link href={`/account/order-history/${orderId}`}>
                                <Button>
                                    View order details
                                </Button>
                            </Link>

                            <Divider />

                            <OrderItemList 
                                orderItems={orderItems}
                                status={order.status}
                                orderId={orderId}
                                isCanceled={order.isCanceled}
                            />
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Box>
    )
};

export default OrderPanelList;