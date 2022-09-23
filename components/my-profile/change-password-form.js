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

import { PASSWORD_SCHEMA, CONFIRM_NEW_PASSWORD_SCHEMA } from "../ui/forms/form-schema";
import FormikSubmitButton from "../ui/forms/formik-submit-button";
import { snackbarActions } from "../../store/snackbar-slice";
import FormikPassword from "../ui/forms/formik-password";

const CHANGE_PASSWORD_INITIAL_FORM_STATE = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
};

const CHANGE_PASSWORD_FORM_VALIDATION = Yup.object().shape({
    oldPassword: PASSWORD_SCHEMA,
    newPassword: PASSWORD_SCHEMA,
    confirmPassword: CONFIRM_NEW_PASSWORD_SCHEMA
});

function ChangePasswordForm(props) {
    const { openChangePasswordForm, setOpenChangePasswordForm } = props;

    const dispatch = useDispatch();

    const handleClosePasswordForm = () => {
        setOpenChangePasswordForm(false);
    };

    const handleSubmitChangePasswordForm = async(values, actions) => {
        actions.setSubmitting(false);

        try {
            const res = await axios.patch(process.env.NEXT_PUBLIC_CHANGE_PASSWORD_API, values);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully change password."
                }));

                setOpenChangePasswordForm(false);
            };
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: err.response.data.message ? err.response.data.message : "Oops... Something went wrong. Please try again later."
            }))
        }
    };

    return (
        <Fragment>
            <Dialog open={openChangePasswordForm}>
                <DialogTitle              
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider",
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">
                            Change Password
                        </Typography> 

                        <IconButton 
                            sx={{ marginLeft: "auto" }}
                            onClick={handleClosePasswordForm}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <Formik
                    initialValues={{ ...CHANGE_PASSWORD_INITIAL_FORM_STATE }}
                    validationSchema={CHANGE_PASSWORD_FORM_VALIDATION}
                    onSubmit={handleSubmitChangePasswordForm}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <DialogContent>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <FormikPassword 
                                            name="oldPassword"
                                            label="Old Password" 
                                            variant="standard"
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormikPassword 
                                            name="newPassword"
                                            label="New Password" 
                                            variant="standard"
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormikPassword 
                                            name="confirmPassword"
                                            label="Confirm Password" 
                                            variant="standard"
                                            required
                                        />
                                    </Grid>
                                </Grid>       
                            </DialogContent>

                            <DialogActions>
                                <Button 
                                    onClick={handleClosePasswordForm} 
                                    sx={{ mr: "auto"}}
                                >
                                    Back
                                </Button>

                                <FormikSubmitButton 
                                    disabled={
                                        (touched.oldPassword && errors.oldPassword) || 
                                        (touched.newPassword && errors.newPassword) ||
                                        (touched.confirmPassword && errors.confirmPassword) ? 
                                            true : 
                                            false
                                    }
                                >
                                    Update
                                </FormikSubmitButton>
                            </DialogActions>
                        </Form>
                    )}
                </Formik>
            </Dialog>
        </Fragment>
    )
};

export default ChangePasswordForm;