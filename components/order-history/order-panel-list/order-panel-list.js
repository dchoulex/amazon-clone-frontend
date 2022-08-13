import { useState } from "react";
import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import numberWithCommas from "../../../utils/numberWithCommas";

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
                        <Box className="flex flex-col flex-1">
                            <div>
                                <Chip 
                                    color="primary"
                                    label="Test"
                                    className="max-w-[100px]"
                                />
                            </div>

                            <div className="flex">
                                <div className="min-w-[100px] mr-5">
                                    <Typography variant="overline">
                                        Order placed
                                    </Typography>

                                    <Typography variant="body1">
                                        {item.orderAt}
                                    </Typography>
                                </div>

                                <div className="min-w-[50px] mx-5">
                                    <Typography variant="overline">
                                        Total
                                    </Typography>

                                    <Typography variant="body1">
                                        ¥ {numberWithCommas(item.total)}
                                    </Typography>
                                </div>

                                <div className="min-w-[50px] ml-5">
                                    <Typography variant="overline">
                                        Ship to
                                    </Typography>

                                    <Typography variant="body1">
                                        {item.address}
                                    </Typography>
                                </div>

                                <div className="ml-auto mr-5">
                                    <Typography variant="overline">
                                        Order {item.id}
                                    </Typography>

                                    <Stack direction="row" spacing={2}>
                                        <Button disableRipple className="hover:bg-inherit normal-case p-0">
                                            View order details
                                        </Button>

                                        <Button disableRipple className="hover:bg-inherit normal-case p-0">
                                            Invoice
                                        </Button>
                                    </Stack>
                                </div>
                            </div> 
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails  className="bg">
                        <Box p={1}>
                            <Typography variant="h6">
                                Delivered Thursday
                            </Typography>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
};

export default OrderPanelList;