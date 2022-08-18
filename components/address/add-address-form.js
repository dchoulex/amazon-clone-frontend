import { useState, Fragment } from "react";
import { getCountries } from "node-countries";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import validator from "validator";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

import FormikTextField from "../ui/forms/formik-text-field";
import FormikSelect from "../ui/forms/formik-select";

const ADD_ADDRESS_INITIAL_FORM_STATE = {
    fullName: "",
    country: "Japan",
    postCode1: "",
    postCode2: "",
    prefecture: "",
    city: "",
    rest: "",
    phoneNumber: "",
};

const REQUIRED_ERROR_MESSAGE = "This field is required.";
const ADD_ADDRESS_FORM_VALIDATION = Yup.object().shape({
    fullName: Yup.string().required(REQUIRED_ERROR_MESSAGE),
    phone: Yup.number().integer().typeError("Please enter a valid phon e number.").required(REQUIRED_ERROR_MESSAGE)

});

function AddAddressForm(props) {
    const { country, setCountry, openAddressDialog, setOpenAddressDialog } = props;
    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);
    const [ postCode, setPostCode ] = useState("");

    const countries = getCountries().map(country => country.name).sort();

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 300
            }
        },
    };

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(false);
    };

    const handleChangeCountry = event => {
        setCountry(event.target.value);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenAddressDialog(false);
    };

    const handleSetPostCode = event => {
        setPostCode(event.target.value);
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

                <DialogContent>
                    <DialogContentText>
                        Please input your address information.
                    </DialogContentText>

                    <Formik
                        initialValues={{ ...ADD_ADDRESS_INITIAL_FORM_STATE }}
                        validationSchema={ADD_ADDRESS_FORM_VALIDATION}
                        onSubmit={values => {
                            console.log(values)
                        }}
                    >
                        <Form>
                            <Grid container direction="vertical">
                                <Grid item xs={12}>
                                    <FormikTextField 
                                        name="fullName"
                                        label="Full name" 
                                        variant="standard"
                                        required
                                    />
                                </Grid>
                        

                                <Grid item xs={6}>
                                    <FormikSelect
                                        name="country"
                                        label="Country"
                                        variant="standard"
                                        MenuProps={MenuProps}
                                    >
                                        {countries.map((country, index) => (
                                            <MenuItem 
                                                key={`country-${index}`}
                                                value={country}
                                            >
                                                {country}
                                            </MenuItem>
                                        ))}
                                    </FormikSelect>
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControl>
                                        <FormLabel component="legend" sx={{ fontSize: "12px" }} required >Post Code</FormLabel>
                                    </FormControl>

                                    <Box sx={{ display: "flex" }}>
                                        <FormikTextField 
                                            name="postCode1"
                                            variant="outlined"
                                            size="small"
                                            required
                                            sx={{ width: "55px", mr: "0.75rem" }}
                                        />

                                        <Box pt={2.5}>
                                            <RemoveIcon sx={{fontSize: "small"}} />
                                        </Box>

                                        <FormikTextField 
                                            name="postCode2"
                                            variant="outlined"
                                            size="small"
                                            required
                                            sx={{ width: "65px", ml: "0.75rem" }}
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={3}>
                                    <FormikTextField 
                                        name="prefecture"
                                        label="Prefecture"
                                        variant="standard"
                                        required
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

                                <Grid xs={12}>
                                    <FormikTextField
                                        name="rest" 
                                        label="Rest of Address"
                                        required 
                                        variant="standard"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid xs={12}>
                                    <FormikTextField 
                                        name="phoneNumber"
                                        label="Phone number" 
                                        variant="standard"
                                        sx={{ display: "block" }}
                                    />
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleOpenConfirmCloseDialog}>Cancel</Button>

                    <Button>Add address</Button>
                </DialogActions>
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