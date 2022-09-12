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

import { REVIEW_SCHEMA, REVIEW_RATING_SCHEMA } from "../ui/forms/form-schema";
import ConfirmCloseDialog from "../ui/dialog/confirm-close-dialog";
import FormikTextField from "../ui/forms/formik-text-field";
import FormikSubmitButton from "../ui/forms/formik-submit-button";
import FormikRating from "../ui/forms/formik-rating";
import getAPI from "../../utils/getAPI";

const REVIEW_PRODUCT_INITIAL_FORM_STATE = {
    rating: 0.5,
    review: ""
};

const REVIEW_PRODUCT_FORM_VALIDATION = Yup.object().shape({
    rating: REVIEW_RATING_SCHEMA,
    review: REVIEW_SCHEMA
});

function ReviewProductForm(props) {
    const { openReviewProductForm, setOpenReviewProductForm, product, setSnackbarState } = props;
    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenReviewProductForm(false);
    };

    const handleSubmitReviewProductForm = async (values, actions) => {
        actions.setSubmitting(false);
        
        const CREATE_REVIEW_API = getAPI(process.env.NEXT_PUBLIC_CREATE_REVIEW_API, { id: product._id });

        try {
            const res = await axios.post(CREATE_REVIEW_API, values);

            if (res.status === 200) {
                setSnackbarState({ 
                    open: true , 
                    type: "success", 
                    message: "Successfully review item."
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

        setOpenReviewProductForm(false);
    };

    return (
        <Fragment>
            <Dialog open={openReviewProductForm}>
                <DialogTitle              
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider" 
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">
                            Review a Product 
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
                    initialValues={{ ...REVIEW_PRODUCT_INITIAL_FORM_STATE }}
                    validationSchema={REVIEW_PRODUCT_FORM_VALIDATION}
                    onSubmit={handleSubmitReviewProductForm}
                >
                    {({ errors, touched, values }) => (
                        <Form>
                            <DialogContent>
                                <Grid container direction="vertical">
                                    <Grid item xs={12}>
                                        <FormikRating 
                                            name="rating"
                                            value={values.rating}
                                        />
                                    </Grid>
                            
                                    <Grid item xs={12}>
                                        <FormikTextField
                                            name="review"
                                            label="Review"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={10}
                                            sx={{
                                                width: "500px"
                                            }}
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
                                        (touched.rating && errors.rating) || 
                                        (touched.review && errors.review) ? 
                                            true : 
                                            false
                                    }
                                >
                                    Post review
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

export default ReviewProductForm;