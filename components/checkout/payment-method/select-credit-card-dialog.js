import { useState, Fragment } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import AddCreditCardForm from "../../wallet/add-credit-card-form";
import SelectCreditCard from "./select-credit-card";

function SelectAddressDialog(props) {
    const { openSelectCreditCardDialog, setOpenSelectCreditCardDialog, creditCards, creditCardUsed } = props;

    const [ openAddCreditCardForm, setOpenAddCreditCardForm ] = useState(false);

    const handleCloseDialog = () => {
        setOpenSelectCreditCardDialog(false);
    };

    const handleOpenAddCreditCardDialog = () => {
        setOpenAddCreditCardForm(true);
    };

    return (
        <Fragment>
            <Dialog 
                open={openSelectCreditCardDialog} 
                maxWidth="xl" 
                fullWidth
            >
                <DialogTitle              
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider" 
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">
                            Select Credit Card
                        </Typography> 

                        <IconButton 
                            sx={{ marginLeft: "auto" }}
                            onClick={handleCloseDialog}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <DialogContent>
                    <Button 
                        variant="contained"
                        size="small"
                        startIcon={<ControlPointIcon />}
                        onClick={handleOpenAddCreditCardDialog}
                        sx= {{ mt: 2 }}
                    >
                        Add new credit card
                    </Button>

                    <AddCreditCardForm 
                        openAddCreditCardForm={openAddCreditCardForm}
                        setOpenAddCreditCardForm={setOpenAddCreditCardForm}
                    />

                    <DialogContentText sx={{ mt: 3 }}>
                        Please select a credit card.
                    </DialogContentText>

                    <Grid container>
                        {creditCards.map((card, index) => (
                            <Grid 
                                item 
                                xs={4} 
                                key={`payment-credit-card-${index}`}
                                sx={{ p: 2 }}
                            >
                                <SelectCreditCard
                                    setOpenSelectCreditCardDialog={setOpenSelectCreditCardDialog} 
                                    creditCard={card} 
                                    creditCardUsed={creditCardUsed}
                                />
                            </Grid>
                        ))}
                    </Grid>                    
                </DialogContent>

                <DialogActions>
                    <Button 
                        onClick={handleCloseDialog} 
                        sx={{ mr: "auto"}}
                    >
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
};

export default SelectAddressDialog;