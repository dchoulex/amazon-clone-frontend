import { useState, Fragment } from "react";
import { getCountries } from "node-countries";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import FormikTextField from "../ui/forms/formik-text-field";
import FormikSelect from "../ui/forms/formik-select";
import { STRING_REQUIRED_SCHEMA, NAME_SCHEMA, POST_CODE_SCHEMA, PREFECTURE_SCHEMA, PHONE_NUMBER_SCHEMA } from "../ui/forms/form-schema";

const ADD_ADDRESS_INITIAL_FORM_STATE = {
    name: "",
    country: "Japan",
    postCode: "",
    prefecture: "",
    city: "",
    rest: "",
    phoneNumber: "",
};

const ADD_ADDRESS_FORM_VALIDATION = Yup.object().shape({
    name: NAME_SCHEMA,
    country: STRING_REQUIRED_SCHEMA,
    postCode: POST_CODE_SCHEMA,
    prefecture: PREFECTURE_SCHEMA,
    city: STRING_REQUIRED_SCHEMA,
    rest: STRING_REQUIRED_SCHEMA,
    phoneNumber: PHONE_NUMBER_SCHEMA,
});

function AddAddressForm(props) {
    const { openAddressDialog, setOpenAddressDialog } = props;

    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);

    const countries = getCountries().map(country => country.name).sort();

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(false);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenAddressDialog(false);
    };

    return (
        <Fragment>
            <Dialog open={openAddressDialog}>
                <DialogTitle sx={{ display: "flex" }}>
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">Add a new address </Typography> 

                        <IconButton 
                            sx={{ marginLeft: "auto" }}
                            onClick={handleOpenConfirmCloseDialog}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <Formik
                    initialValues={{ ...ADD_ADDRESS_INITIAL_FORM_STATE }}
                    validationSchema={ADD_ADDRESS_FORM_VALIDATION}
                    onSubmit={values => console.log(values)}
                >
                    <Form>
                        <DialogContent>
                            <DialogContentText>
                                Please input your address information.
                            </DialogContentText>

                            <Grid container direction="vertical">
                                <Grid item xs={12}>
                                    <FormikTextField 
                                        name="name"
                                        label="Name" 
                                        variant="standard"
                                        required
                                    />
                                </Grid>
                        
                                <Grid item xs={6}>
                                    <FormikSelect
                                        name="country"
                                        label="Country"
                                        variant="standard"
                                        options={countries}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl>
                                        <FormLabel component="legend" sx={{ fontSize: "12px" }} required >Post Code</FormLabel>
                                    </FormControl>

                                    <Box sx={{ display: "flex" }}>
                                        <FormikTextField 
                                            name="postCode"
                                            variant="standard"
                                            size="small"
                                            required
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={3}>
                                    <FormikSelect 
                                        name="prefecture"
                                        label="Prefecture"
                                        variant="standard"
                                        required
                                        options={PREFECTURES}
                                        sx={{ mr: "2rem" }}
                                    />                            
                                </Grid>

                                <Grid item xs={9}>
                                    <FormikTextField 
                                        name="city"
                                        label="City" 
                                        required
                                        variant="standard"
                                        sx={{ mr: "2rem" }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormikTextField
                                        name="rest" 
                                        label="Rest of Address"
                                        required 
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormikTextField 
                                        name="phoneNumber"
                                        label="Phone number" 
                                        variant="standard"
                                        sx={{ display: "block" }}
                                    />
                                </Grid>
                            </Grid>                    
                        </DialogContent>

                        <DialogActions>
                            <Button 
                                onClick={handleOpenConfirmCloseDialog} 
                                sx={{ mr: "auto"}}
                                >
                                Cancel
                            </Button>

                            <Button type="submit">Add address</Button>
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>

            <Dialog open={openConfirmCloseDialog}>
                <DialogTitle id="confirm-close-dialog">
                    Are you sure you want to close?
                </DialogTitle>

                <DialogContent id="confirm-close-dialog-title">
                    <DialogContentText id="confirm-close-dialog-description">
                        You will lose all of the information you have input so far if you close.
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCloseConfirmCloseDialog}>No</Button>

                    <Button onClick={handleCloseAllDialog}>Yes</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
};

export default AddAddressForm;