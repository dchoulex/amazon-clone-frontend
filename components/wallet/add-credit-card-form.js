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

import { NAME_SCHEMA, EXPIRATION_DATE_SCHEMA, CREDIT_CARD_NUMBER_SCHEMA, CREDIT_CARD_TYPE_SCHEMA, BOOLEAN_SCHEMA } from "../ui/forms/form-schema";
import { CURRENT_TIME } from "../../appConfig";
import FormikTextField from "../ui/forms/formik-text-field";
import FormikSelect from "../ui/forms/formik-select";
import ConfirmCloseDialog from "../ui/dialog/confirm-close-dialog";
import FormikSubmitButton from "../ui/forms/formik-submit-button";
import FormikDate from "../ui/forms/formik-date";
import FormikRadio from "../ui/forms/formik-radio";
import { snackbarActions } from "../../store/snackbar-slice";
import { userActions } from "../../store/user-slice";

const ADD_CREDIT_CARD_INITIAL_FORM_STATE = {
    name: "",
    type: "",
    expirationDate: "",
    number: "",
    isDefault: "true"
};

const ADD_CREDIT_CARD_FORM_VALIDATION = Yup.object().shape({
    name: NAME_SCHEMA,
    type: CREDIT_CARD_TYPE_SCHEMA,
    expirationDate: EXPIRATION_DATE_SCHEMA,
    number: CREDIT_CARD_NUMBER_SCHEMA,
    isDefault: BOOLEAN_SCHEMA
});

const defaultOptions = [
    {
        name: "Yes",
        value: "true"
    },
    {
        name: "No",
        value: "false"
    }
];

function AddCreditCardForm(props) {
    const { openAddCreditCardForm, setOpenAddCreditCardForm, setDataIsChanging } = props;
    const dispatch = useDispatch();

    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenAddCreditCardForm(false);
    };

    const handleAddCreditCardForm = async(values, actions) => {
        actions.setSubmitting(false);

        setIsSubmitting(true);

        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_ADD_CREDIT_CARD_API, values);
            const creditCard = res.data.data;

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully delete item."
                }));

                if (creditCard.isDefault) dispatch(userActions.changeUserDefaultCreditCard({ defaultCreditCard: creditCard}));

                setIsSubmitting(false);

                setDataIsChanging(true);

                setOpenAddCreditCardForm(false);
            } 
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: err?.response?.data?.message ? err.response.data.message : "Oops... Something went wrong"
            }));

            setIsSubmitting(false);
        }
    };

    return (
        <Fragment>
            <Dialog open={openAddCreditCardForm}>
                <DialogTitle 
                    sx={{ 
                        display: "flex", 
                        borderBottom: 1,
                        borderColor: "divider" 
                    }}
                >
                    <Box sx={{ display: "flex", flex: "1 1 0%" }}>
                        <Typography sx={{ paddingTop: "4px"}} variant="h5">Add Credit Card</Typography> 

                        <IconButton 
                            sx={{ marginLeft: "auto" }}
                            onClick={handleOpenConfirmCloseDialog}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>

                <Formik
                    initialValues={{ ...ADD_CREDIT_CARD_INITIAL_FORM_STATE }}
                    validationSchema={ADD_CREDIT_CARD_FORM_VALIDATION}
                    onSubmit={handleAddCreditCardForm}
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
                                        <FormikSelect
                                            name="type"
                                            label="Type"
                                            variant="standard"
                                            options={[
                                                {
                                                    name: "Mastercard", value: "mastercard"
                                                },
                                                {
                                                    name: "Visa",
                                                    value: "visa"
                                                }
                                            ]}
                                            sx={{ width: "170px" }}
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <FormikDate 
                                            name="expirationDate"
                                            label="Expiration Date"
                                            inputFormat="MM/YYYY"
                                            views={['year', 'month']}
                                            minDate={CURRENT_TIME}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Box>
                                            <FormikTextField 
                                                name="number"
                                                label="Card Number"
                                                variant="standard"
                                                required
                                            />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormikRadio 
                                            name="isDefault"
                                            label="Set as default?"
                                            options={defaultOptions}
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
                                    variant="text"
                                    className="mt-3 mb-5"
                                    disabled={(
                                        touched.name && errors.name) || 
                                        (touched.type && errors.type) ||
                                        (touched.expirationDate && errors.expirationDate) ||
                                        (touched.number && errors.number) ||
                                        (touched.isDefault && errors.isDefault) ||
                                        isSubmitting ? 
                                            true : 
                                            false
                                    }
                                >
                                    {isSubmitting ? "Submitting..." : "Add credit card"}
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

export default AddCreditCardForm;