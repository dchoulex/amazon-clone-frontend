import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from "yup";
import axios from 'axios';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from "@mui/material/Stack";

import { SELECT_AMOUNT_SCHEMA } from '../ui/forms/form-schema';
import FormikNumber from '../ui/forms/formik-number';
import FormikSubmitButton from '../ui/forms/formik-submit-button';
import numberWithCommas from "../../utils/numberWithCommas";
import StockLabel from '../ui/stock-label';
import { cartActions } from '../../store/cart-slice';
import { snackbarActions } from '../../store/snackbar-slice';

const ADD_CART_ITEM_FORM_VALIDATION = Yup.object().shape({
    amount: SELECT_AMOUNT_SCHEMA
});

function BuyProductCard(props) {
    const { stock, price, productId } = props;

    const dispatch = useDispatch();

    const handleSubmitAddCartItemForm = async(values, actions) => {
        actions.setSubmitting(false);

        const data = {
            productId,
            amount: values.amount
        };

        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_ADD_CART_ITEM_API, data);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully add item to cart."
                }))
            } 

            dispatch(cartActions.setTotalAmount({ totalAmount: res.data.totalAmount }))
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }))
        }
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
                    <Box className="pt-5 px-8">
                        <Card className="w-[250px] border-gray-200 border-solid border-2">
                            <CardContent>
                                <Typography variant="h5">
                                    ¥ {numberWithCommas(price)}
                                </Typography>

                                <StockLabel stock={stock}/>

                                <Box className="flex items-center mt-2">
                                    <Typography className="text-lg mr-5">
                                        Quantity
                                    </Typography>

                                    <FormikNumber 
                                        name="amount"
                                        className="min-w-[60px] max-w-[80px] m-0"
                                    />
                                </Box>
                            </CardContent>

                            <Stack className="flex-col px-4 pb-5" spacing={1}>
                                <FormikSubmitButton 
                                    variant="contained"
                                    disabled={(touched.amount && errors.amount) ? true : false}
                                    startIcon={<AddShoppingCartIcon />}
                                >
                                    Add to cart
                                </FormikSubmitButton>

                                {/* <Button 
                                    fullWidth 
                                    variant="outlined"
                                    color="warning"
                                    startIcon={<ShoppingBasketIcon />}
                                >
                                    Buy now
                                </Button> */}
                            </Stack>
                        </Card>
                    </Box>
                </Form>
            )}
        </Formik>
    )
};

export default BuyProductCard;