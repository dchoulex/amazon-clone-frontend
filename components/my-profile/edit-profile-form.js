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
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import FormikTextField from "../ui/forms/formik-text-field";
import { NAME_SCHEMA, PHONE_NUMBER_SCHEMA, EMAIL_SCHEMA } from "../ui/forms/form-schema";
import ConfirmCloseDialog from "../ui/dialog/confirm-close-dialog";
import FormikSubmitButton from "../ui/forms/formik-submit-button";

const EDIT_PROFILE_FORM_VALIDATION = Yup.object().shape({
    name: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    phoneNumber: PHONE_NUMBER_SCHEMA,
});

function EditProfileForm(props) {
    const { user, openEditProfileForm, setOpenEditProfileForm, setSnackbarState } = props;
    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);

    const EDIT_PROFILE_INITIAL_FORM_STATE = {
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber
    };

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenEditProfileForm(false);
    };

    const handleSubmitEditProfileForm = async(values) => {
        try {
            const res = await axios.put(process.env.NEXT_PUBLIC_UPDATE_MY_PROFILE_API, values);

            if (res.status === 200) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully update profile."
                });
            } 
        } catch(err) {
            if (err) {
                setSnackbarState({ 
                    open: true , 
                    type: "error", 
                    message: "Oops... Something went wrong."
                });
            }            
        }

        setOpenEditProfileForm(false);
    };

    return (
        <Fragment>
            <Dialog open={openEditProfileForm}>
                <DialogTitle 
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider" 
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">Edit Profile</Typography> 

                        <IconButton 
                            sx={{ marginLeft: "auto" }}
                            onClick={handleOpenConfirmCloseDialog}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <Formik
                    initialValues={{ ...EDIT_PROFILE_INITIAL_FORM_STATE }}
                    validationSchema={EDIT_PROFILE_FORM_VALIDATION}
                    onSubmit={handleSubmitEditProfileForm}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <DialogContent>
                                <Grid container direction="vertical">
                                    <Grid item xs={12}>
                                        <FormikTextField 
                                            name="name"
                                            label="Name" 
                                            variant="standard"
                                            required
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box sx={{ display: "flex" }}>
                                            <FormikTextField 
                                                name="email"
                                                label="Email"
                                                variant="standard"
                                                required
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box sx={{ display: "flex" }}>
                                            <FormikTextField 
                                                name="phoneNumber"
                                                label="Phone Number"
                                                variant="standard"
                                                required
                                            />
                                        </Box>
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
                                        (errors.name && touched.name) ||
                                        (errors.email && touched.email) ||
                                        (errors.phoneNumber && touched.phoneNumber) ?
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

            <ConfirmCloseDialog 
                openConfirmCloseDialog={openConfirmCloseDialog}
                handleCloseAllDialog={handleCloseAllDialog}
                setOpenConfirmCloseDialog={setOpenConfirmCloseDialog}
            />
        </Fragment>
    )
};

export default EditProfileForm;