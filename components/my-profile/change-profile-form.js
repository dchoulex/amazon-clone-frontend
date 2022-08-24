import { useState, Fragment } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
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

const CHANGE_PROFILE_INITIAL_FORM_STATE = {
    name: "Dummy",
    email: "Test@gmail.com",
    phoneNumber: "dummy"
};

const CHANGE_PROFILE_FORM_VALIDATION = Yup.object().shape({
    name: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    phoneNumber: PHONE_NUMBER_SCHEMA,
});

function ChangeProfileForm(props) {
    const { openChangeProfileForm, setOpenChangeProfileForm } = props;

    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenChangeProfileForm(false);
    };

    return (
        <Fragment>
            <Dialog open={openChangeProfileForm}>
                <DialogTitle 
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider" 
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">Change Profile</Typography> 

                        <IconButton 
                            sx={{ marginLeft: "auto" }}
                            onClick={handleOpenConfirmCloseDialog}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <Formik
                    initialValues={{ ...CHANGE_PROFILE_INITIAL_FORM_STATE }}
                    validationSchema={CHANGE_PROFILE_FORM_VALIDATION}
                    onSubmit={values => console.log(values)}
                >
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

                            <Button type="submit">Change Profile</Button>
                        </DialogActions>
                    </Form>
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

export default ChangeProfileForm;