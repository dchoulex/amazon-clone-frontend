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

const EDIT_REVIEW_FORM_VALIDATION = Yup.object().shape({
    rating: REVIEW_RATING_SCHEMA,
    review: REVIEW_SCHEMA
});

function EditReviewForm(props) {
    const { openEditReviewForm, setOpenEditReviewForm, review } = props;
    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);

    const EDIT_REVIEW_INITIAL_FORM_STATE = {
        rating: review.rating,
        review: review.review
    };

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenEditReviewForm(false);
    };

    const handleSubmitEditReviewForm = async (values) => {
        const UPDATE_REVIEW_API = getAPI(process.env.NEXT_PUBLIC_UPDATE_REVIEW_API, { id: review.product._id, id2: review._id });

        await axios.patch(UPDATE_REVIEW_API, values);

        setOpenEditReviewForm(false);
    };

    return (
        <Fragment>
            <Dialog open={openEditReviewForm}>
                <DialogTitle              
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider" 
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">
                            Edit Review 
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
                    initialValues={{ ...EDIT_REVIEW_INITIAL_FORM_STATE }}
                    validationSchema={EDIT_REVIEW_FORM_VALIDATION}
                    onSubmit={handleSubmitEditReviewForm}
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
                                            autoFocus
                                            rows={10}
                                            sx={{
                                                width: "500px"
                                            }}
                                            value={values.review}
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

export default EditReviewForm;