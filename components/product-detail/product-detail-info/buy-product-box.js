import { Formik, Form } from 'formik';
import * as Yup from "yup";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import { SELECT_AMOUNT_SCHEMA } from '../../ui/forms/form-schema';
import FormikNumber from '../../ui/forms/formik-number';
import FormikHidden from '../../ui/forms/formik-hidden';
import FormikSubmitButton from '../../ui/forms/formik-submit-button';
import numberWithCommas from "../../../utils/numberWithCommas";
import StockLabel from '../../ui/stock-label';

const ADD_CART_ITEM_FORM_VALIDATION = Yup.object().shape({
    amount: SELECT_AMOUNT_SCHEMA
});

function BuyProductBox(props) {
    const { stock, price, productId } = props;

    const handleSubmitAddCartItemForm = async(values, actions) => {
        actions.setSubmitting(false);
        
        await axios.post(process.env.NEXT_PUBLIC_ADD_CART_ITEM_API, values);
    };

    return (
        <Formik
            initialValues={{  
                productId,
                amount: 1
            }}
            validationSchema={ADD_CART_ITEM_FORM_VALIDATION}
            onSubmit={handleSubmitAddCartItemForm}
            className="mt-auto"
        >
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <Box>
                        <Typography>Price:</Typography>

                        <Typography variant="h4" mb={2}>
                            ¥ {numberWithCommas(price)}
                        </Typography>

                        <Divider className="border-gray-300 mb-2"/>

                        <StockLabel stock={stock} />

                        <FormikHidden 
                            name="productId"
                            value={productId}
                        />

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