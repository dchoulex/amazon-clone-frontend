import { Formik, Form } from 'formik';
import * as Yup from "yup";
import Link from "next/link";
import axios from 'axios';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import ProductRatingStar from './product-rating-star';
import numberWithCommas from '../../utils/numberWithCommas';
import FormikNumber from '../ui/forms/formik-number';
import FormikSubmitButton from '../ui/forms/formik-submit-button';
import FormikHidden from '../ui/forms/formik-hidden';
import { SELECT_AMOUNT_SCHEMA } from '../ui/forms/form-schema';

const ADD_CART_ITEM_FORM_VALIDATION = Yup.object().shape({
    amount: SELECT_AMOUNT_SCHEMA
});

function ProductCard(props) {
    const { product } = props;

    const handleSubmitAddCartItemForm = async(values, actions) => {
        actions.setSubmitting(false);
        
        await axios.post(process.env.NEXT_PUBLIC_ADD_CART_ITEM_API, values);
    };

    return (
        <Card className="min-w-[250px] max-w-[350px] border-gray-200 border-solid border-2 flex-col flex">
            <CardMedia 
                component="img"
                height="230"
                image="/images/amazon-logo.png"
                className="mb-10"
                alt={product.name}
            />

            <CardContent>
                <Link href={`/products/${product._id}`}>
                    <a className="text-2xl hover:text-blue-800">
                        {product.name} 
                    </a>
                </Link>

                <ProductRatingStar 
                    ratingsAverage={product.ratingsAverage} 
                    ratingsQuantity={product.ratingsQuantity}
                />

                <Typography 
                    variant="h6" 
                    className="text-orange-700 mt-3"
                >
                    ¥ {numberWithCommas(product.price)}
                </Typography>
            </CardContent>
            
            <Formik
                initialValues={{  
                    productId: product._id,
                    amount: 1
                }}
                validationSchema={ADD_CART_ITEM_FORM_VALIDATION}
                onSubmit={handleSubmitAddCartItemForm}
                className="mt-auto"
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        {errors.amount &&
                            <Typography 
                                variant="caption" 
                                color="error" 
                                className="block w-[200px] ml-20"
                            >
                                {errors.amount}
                            </Typography>
                        }

                        <CardActions>
                            <Stack 
                                direction="row" 
                                ml="auto"
                                mb="0.5rem"
                                pr="0.5rem"
                            >
                                <FormikHidden 
                                    name="productId"
                                    value={product._id}
                                />
                                
                                <FormikNumber 
                                    name="amount"
                                    className="min-w-[60px] max-w-[80px]"
                                />

                                <FormikSubmitButton 
                                    variant="contained"
                                    className="ml-4"
                                    disabled={(touched.amount && errors.amount) ? true : false}
                                    startIcon={<AddShoppingCartIcon />}
                                >
                                    Add to cart
                                </FormikSubmitButton>
                            </Stack>
                        </CardActions>
                    </Form>
                )}
            </Formik>
        </Card>
    )
};

export default ProductCard;