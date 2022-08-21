import { Formik, Form} from 'formik';
import * as Yup from "yup";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import ProductRatingStar from './product-rating-star';
import numberWithCommas from '../../utils/numberWithCommas';
import FormikNumber from '../ui/forms/formik-number';
import FormikButton from '../ui/forms/formik-submit-button';
import { REQUIRED_ERROR_MESSAGE, POSITIVE_NUMBER_ERROR_MESSAGE, INTEGER_NUMBER_ERROR_MESSAGE, INVALID_NUMBER_TYPE_ERROR_MESSAGE } from '../../appConfig';

const ADD_CART_ITEM_INITIAL_FORM_STATES = {
    productId: "",
    amount: 1
};

const ADD_CART_ITEM_FORM_VALIDATION = Yup.object().shape({
    amount: Yup
        .number()
        .typeError(INVALID_NUMBER_TYPE_ERROR_MESSAGE)
        .required(REQUIRED_ERROR_MESSAGE)
        .integer(INTEGER_NUMBER_ERROR_MESSAGE)
        .positive(POSITIVE_NUMBER_ERROR_MESSAGE )
});

function ProductCard(props) {
    const { product } = props;

    return (
        <Card className="min-w-[250px] max-w-[350px] border-gray-200 border-solid border-2 flex-col flex">
            <CardMedia 
                component="img"
                height="230"
                image="/images/amazon-logo.png"
                className="mb-10"
                alt={product.name}
            />

            <CardContent className="mb-auto">
                <Typography variant="h6" className="mb-2">
                    {product.name} 
                </Typography>

                <ProductRatingStar rating={product.ratingsAverage}/>

                <Typography 
                    variant="h6" 
                    className="text-orange-700 mt-3"
                >
                    ¥ {numberWithCommas(product.price)}
                </Typography>
            </CardContent>
            
            <CardActions>
                <Stack 
                    direction="row" 
                    ml="auto"
                    mt="1rem"
                    mb="0.5rem"
                    pr="0.5rem"
                >
                    <Formik
                        initialValues={ADD_CART_ITEM_INITIAL_FORM_STATES}
                        validationSchema={ADD_CART_ITEM_FORM_VALIDATION}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <FormikNumber 
                                    name="amount"
                                    className="min-w-[60px] max-w-[80px]"
                                />

                                <FormikButton 
                                    variant="contained"
                                    className="ml-4"
                                    disabled={touched.amount && errors.amount}
                                    startIcon={<AddShoppingCartIcon />}
                                >
                                    Add to cart
                                </FormikButton>
                            </Form>
                        )}
                    </Formik>
                </Stack>
            </CardActions>
        </Card>
    )
};

export default ProductCard;