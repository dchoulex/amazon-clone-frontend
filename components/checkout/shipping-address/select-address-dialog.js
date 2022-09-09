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

import AddAddressForm from "../../address/add-address-form";
import SelectAddressCard from "./select-address-card";

function SelectAddressDialog(props) {
    const { openSelectAddressDialog, setOpenSelectAddressDialog, addresses, shippingAddress } = props;
    const [ openAddAddressForm, setOpenAddAddressForm ] = useState(false);

    const handleCloseDialog = () => {
        setOpenSelectAddressDialog(false);
    };

    const handleOpenAddAddressDialog = () => {
        setOpenAddAddressForm(true);
    };

    return (
        <Fragment>
            <Dialog 
                open={openSelectAddressDialog} 
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
                            Select Shipping Address
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
                        onClick={handleOpenAddAddressDialog}
                        sx= {{ mt: 2 }}
                    >
                        Add new address
                    </Button>

                    <AddAddressForm 
                        openAddAddressForm={openAddAddressForm}
                        setOpenAddAddressForm={setOpenAddAddressForm}
                    />

                    <DialogContentText sx={{ mt: 3 }}>
                        Please select an address.
                    </DialogContentText>

                    <Grid container>
                        {addresses.map((address, index) => (
                            <Grid 
                                item 
                                xs={4} 
                                key={`select-address-${index}`}
                                sx={{ p: 2 }}
                            >
                                <SelectAddressCard 
                                    address={address} 
                                    shippingAddress={shippingAddress}
                                    setOpenSelectAddressDialog={setOpenSelectAddressDialog}
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