import { Formik, Form } from 'formik';
import * as Yup from "yup";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import FormikNumber from '../ui/forms/formik-number';
import FormikHidden from '../ui/forms/formik-hidden';
import FormikSubmitButton from '../ui/forms/formik-submit-button';
import numberWithCommas from "../../utils/numberWithCommas";
import StockLabel from '../ui/stock-label';
import { SELECT_AMOUNT_SCHEMA } from '../ui/forms/form-schema';

const ADD_CART_ITEM_FORM_VALIDATION = Yup.object().shape({
    amount: SELECT_AMOUNT_SCHEMA
});

function BuyProductCard(props) {
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
                    <Box className="pt-5 px-8">
                        <Card className="w-[250px] border-gray-200 border-solid border-2">
                            <CardContent>
                                <Typography variant="h5">
                                    ¥ {numberWithCommas(price)}
                                </Typography>

                                <StockLabel stock={stock}/>

                                <Box className="flex items-center mt-2">
                                    <FormikHidden 
                                        name="productId"
                                        value={productId}
                                    />

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