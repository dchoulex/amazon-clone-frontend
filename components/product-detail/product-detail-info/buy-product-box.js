import { Formik, Form } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { SELECT_AMOUNT_SCHEMA } from '../../ui/forms/form-schema';
import FormikNumber from '../../ui/forms/formik-number';
import FormikSubmitButton from '../../ui/forms/formik-submit-button';
import numberWithCommas from "../../../utils/numberWithCommas";
import StockLabel from '../../ui/stock-label';

const ADD_CART_ITEM_FORM_VALIDATION = Yup.object().shape({
    amount: SELECT_AMOUNT_SCHEMA
});

function BuyProductBox(props) {
    const { stock, price, productId, setSnackbarState } = props;

    const handleSubmitAddCartItemForm = async(values, actions) => {
        actions.setSubmitting(false);

        const data = {
            productId,
            amount: values.amount
        }
        
        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_ADD_CART_ITEM_API, data);

            if (res.status === 200) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully add item to cart."
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
    };

    return (
        <Formik
            initialValues={{  
                productId: productId,
                amount: 1
            }}
            validationSchema={ADD_CART_ITEM_FORM_VALIDATION}
            onSubmit={handleSubmitAddCartItemForm}
            className="mt-auto"
        >
            {({ errors, touched }) => (
                <Form>
                    <Box>
                        <Typography>Price:</Typography>

                        <Typography variant="h4" mb={2}>
                            ¥ {numberWithCommas(price)}
                        </Typography>

                        <Divider className="border-gray-300 mb-2"/>

                        <StockLabel stock={stock} />

                        <FormikNumber 
                            name="amount"
                            className="min-w-[60px] max-w-[80px] m-0 my-4"
                        />

                        <Stack 
                            direction="row" 
                            spacing={2}
                            className="pb-5"
                        >
                            <FormikSubmitButton 
                                variant="contained"
                                disabled={(touched.amount && errors.amount) ? true : false}
                                startIcon={<AddShoppingCartIcon />}
                            >
                                Add to cart
                            </FormikSubmitButton>

                            {/* <Button 
                                variant="outlined"
                                color="warning"
                                startIcon={<ShoppingBasketIcon />}
                            >
                                Buy now
                            </Button> */}
                        </Stack>
                    </Box>
                </Form>
            )}
        </Formik>
    )
};

export default BuyProductBox;