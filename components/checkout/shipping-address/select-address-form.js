import { useState, Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

import { STRING_REQUIRED_SCHEMA, NAME_SCHEMA, POST_CODE_SCHEMA, PREFECTURE_SCHEMA, PHONE_NUMBER_SCHEMA, BOOLEAN_SCHEMA } from "../../ui/forms/form-schema";
import ConfirmCloseDialog from "../../ui/dialog/confirm-close-dialog";
import FormikTextField from "../../ui/forms/formik-text-field";
import FormikSelect from "../../ui/forms/formik-select";
import { PREFECTURES } from "../../../appConfig";
import FormikRadio from "../../ui/forms/formik-radio";
import FormikSubmitButton from "../../ui/forms/formik-submit-button";
import AddAddressForm from "../../address/add-address-form";
import SelectAddressCard from "./select-address-card";

const SELECT_ADDRESS_INITIAL_FORM_STATE = {
    addressId: "",
};

const SELECT_ADDRESS_FORM_VALIDATION = Yup.object().shape({
    addressId: Yup.string()
});

function SelectAddressDialog(props) {
    const { openSelectAddressForm, setOpenSelectAddressForm, addresses } = props;
    const [ openAddAddressForm, setOpenAddAddressForm ] = useState(false);

    const handleCloseDialog = () => {
        setOpenSelectAddressForm(false);
    };

    const handleOpenAddAddressDialog = () => {
        setOpenAddAddressForm(true);
    };

    const handleSubmitSelectAddressForm = async (values) => {
        // await axios.post(process.env.NEXT_PUBLIC_ADD_ADDRESS_API, values);
        console.log("test")
        console.log(values)

        // setOpenSelectAddressForm(false);
    };

    return (
        <Fragment>
            <Dialog open={openSelectAddressForm} maxWidth="xl" fullWidth>
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

                <Formik
                    initialValues={{ ...SELECT_ADDRESS_INITIAL_FORM_STATE }}
                    validationSchema={SELECT_ADDRESS_FORM_VALIDATION}
                    onSubmit={handleSubmitSelectAddressForm}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <DialogContent>
                                <Button 
                                    variant="contained"
                                    size="small"
                                    startIcon={<ControlPointIcon />}
                                    onClick={handleOpenAddAddressDialog}
                                >
                                    Add new address
                                </Button>

                                <AddAddressForm 
                                    openAddAddressForm={openAddAddressForm}
                                    setOpenAddAddressForm={setOpenAddAddressForm}
                                />

                                <DialogContentText sx={{
                                    mt: 4,
                                    mb: 1
                                }}>
                                    Please select an address.
                                </DialogContentText>

                                <Grid container>
                                    {addresses.map((address, index) => (
                                        <Grid 
                                            item 
                                            xs={4} 
                                            key={`select-address-${index}`}
                                            sx={{
                                                p: 2
                                            }}
                                        >
                                            <SelectAddressCard address={address} />
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
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </Fragment>
    )
};

export default SelectAddressDialog;