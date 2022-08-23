import { useState } from "react";
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import OrderHistorySummary from "./order-history-summary";
import OrderItemList from "../../ui/order-item-list";

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
    }
];

function OrderPanelList(props) {
    const { items } = props;

    const [ expanded, setExpanded ] = useState(0);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    };

    return (
        <Box py={2}>
            {items.map((item, index) => (
                <Accordion 
                    key={`order-${index}`}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    defaultExpanded={index === 0}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id={item.id}
                        className="bg-[#b0cae5]"
                    >
                        <OrderHistorySummary
                            orderAt={item.orderAt}
                            total={item.total}
                            address={item.address}
                            id={item.id}
                        />
                    </AccordionSummary>

                    <AccordionDetails>
                        <OrderItemList 
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