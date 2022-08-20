import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import WalletCard from "./wallet-card";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";

function WalletInfo(props) {
    const { title, creditCards } = props;
    const numberOfPages = 4;
    const [ openCreditCardForm , setOpenCreditCardForm ] = useState(false);

    const handleOpenCreditCardForm = () => {
        setOpenCreditCardForm(true);
    }

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />

                <Divider className="border-gray-400 mb-5"/>

                <Button 
                    variant="contained"
                    className="ml-5 mb-4"
                    size="small"
                    startIcon={<ControlPointIcon />}
                    onClick={handleOpenCreditCardForm}
                >
                    Add new credit card
                </Button>

                <Box px={5} my={2}>
                    <Grid container spacing={3}>
                        {creditCards.map((card, index) => (
                            <Grid 
                                key={`address-card-${index}`} 
                                item 
                                xs={12} 
                                md={6} 
                                lg={4} 
                                xl={3}
                                className="flex justify-center items-center"
                            >
                                <WalletCard card={card} />
                            </Grid>
                        ))}   
                    </Grid>
                </Box>

                <PaginationButtons numberOfPages={numberOfPages} />
            </Paper>
        </Box>
    )
};

export default WalletInfo;