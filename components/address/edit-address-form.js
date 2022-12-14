import { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
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
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import { STRING_REQUIRED_SCHEMA, NAME_SCHEMA, POST_CODE_SCHEMA, PREFECTURE_SCHEMA, PHONE_NUMBER_SCHEMA } from "../ui/forms/form-schema";
import { snackbarActions } from "../../store/snackbar-slice";
import ConfirmCloseDialog from "../ui/dialog/confirm-close-dialog";
import FormikTextField from "../ui/forms/formik-text-field";
import FormikSelect from "../ui/forms/formik-select";
import { PREFECTURES } from "../../appConfig";
import FormikSubmitButton from "../ui/forms/formik-submit-button";
import getAPI from "../../utils/getAPI";
import { userActions } from "../../store/user-slice";

const EDIT_ADDRESS_FORM_VALIDATION = Yup.object().shape({
    name: NAME_SCHEMA,
    country: STRING_REQUIRED_SCHEMA,
    postCode: POST_CODE_SCHEMA,
    prefecture: PREFECTURE_SCHEMA,
    city: STRING_REQUIRED_SCHEMA,
    rest: STRING_REQUIRED_SCHEMA,
    phoneNumber: PHONE_NUMBER_SCHEMA
});

function EditAddressForm(props) {
    const { address, openEditAddressForm, setOpenEditAddressForm, setDataIsChanging } = props;
    const dispatch = useDispatch();

    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const prefectures = PREFECTURES.map(prefecture => ({
        name: prefecture,
        value: prefecture
    }));

    const EDIT_ADDRESS_INITIAL_FORM_STATE = {
        name: address.name,
        country: address.country,
        postCode: address.postCode,
        prefecture: address.prefecture,
        city: address.city,
        rest: address.rest,
        phoneNumber: address.phoneNumber
    };

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenEditAddressForm(false);
    };

    const handleSubmitEditAddressForm = async (values, actions) => {
        actions.setSubmitting(false);
        
        setIsSubmitting(true);

        const UPDATE_ADDRESS_API = getAPI(process.env.NEXT_PUBLIC_UPDATE_ADDRESS_API, { id: address._id });

        try {
            const res = await axios.put(UPDATE_ADDRESS_API, values);

            const address = res.data.data;

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully update address."
                }))

                if (address.isDefault) {
                    dispatch(userActions.changeUserDefaultAddress({
                        defaultAddress: address
                    }))
                }

                setOpenEditAddressForm(false);

                setIsSubmitting(false);

                setDataIsChanging(true);
            }
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }))

            setIsSubmitting(false);
        }
    };

    return (
        <Fragment>
            <Dialog open={openEditAddressForm}>
                <DialogTitle              
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider" 
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">
                            Edit address 
                        </Typography> 

                        <IconButton 
                            sx={{ marginLeft: "auto" }}
                            onClick={handleOpenConfirmCloseDialog}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <Formik
                    initialValues={{ ...EDIT_ADDRESS_INITIAL_FORM_STATE }}
                    validationSchema={EDIT_ADDRESS_FORM_VALIDATION}
                    onSubmit={handleSubmitEditAddressForm}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <DialogContent>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <FormikTextField 
                                            name="name"
                                            label="Name" 
                                            variant="standard"
                                            required
                                        />
                                    </Grid>
                            
                                    <Grid item xs={6}>
                                        <FormikTextField
                                            name="country"
                                            label="Country"
                                            variant="standard"
                                            defaultValue="Japan"
                                            sx={{ width: "170px" }}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box sx={{ display: "flex" }}>
                                            <FormikTextField 
                                                name="postCode"
                                                label="Post Code"
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
                                            options={prefectures}
                                            sx={{ minWidth: "110px" }}
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

                                <FormikSubmitButton 
                                    disabled={
                                        (touched.name && errors.name) || 
                                        (touched.country && errors.country) ||
                                        (touched.postCode && errors.postCode) ||
                                        (touched.prefecture && errors.prefecture) ||
                                        (touched.city && errors.city) ||
                                        (touched.rest && errors.rest) || 
                                        (touched.phoneNumber && errors.phoneNumber) ||
                                        (touched.isDefault && errors.isDefault) ||
                                        isSubmitting
                                        ? 
                                            true : 
                                            false
                                    }
                                >
                                    {isSubmitting ? "Submitting..." : "Update"}
                                </FormikSubmitButton>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>

            <ConfirmCloseDialog 
                openConfirmCloseDialog={openConfirmCloseDialog}
                handleCloseAllDialog={handleCloseAllDialog}
                setOpenConfirmCloseDialog={setOpenConfirmCloseDialog}
            />
        </Fragment>
    )
};

export default EditAddressForm;