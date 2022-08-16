import { useState } from "react";
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import OrderSummary from "./order-summary";
import OrderDetails from "./order-details";

const products = [
    {
        name: "Something"
    },
    {
        name: "Something2"
    },
    {
        name: "Something3"
    },
    {
        name: "Something4"
    },
    {
        name: "Something5"
    },
]
function OrderPanelList(props) {
    const { items, currentTab } = props;

    const [ expanded, setExpanded ] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return (
        <Box py={2}>
            {items.map(item => (
                <Accordion 
                    key={item.id}
                    expanded={expanded === item.id}
                    onChange={handleChange(item.id)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id={item.id}
                        className="bg-[#b0cae5]"
                    >
                        <OrderSummary
                            orderAt={item.orderAt}
                            total={item.total}
                            address={item.address}
                            id={item.id}
                        />
                    </AccordionSummary>

                    <AccordionDetails>
                        <OrderDetails 
                            products={products}
                            status={item.status}
                        />
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
};

export default OrderPanelList;