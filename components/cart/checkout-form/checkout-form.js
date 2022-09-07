import { Fragment } from "react";
import { Formik, Form, FieldArray } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import axios from "axios";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Checkbox from '@mui/material/Checkbox';

import { SELECT_AMOUNT_SCHEMA } from "../../ui/forms/form-schema";
import CheckoutFormItemList from "./checkout-form-item-list";
import numberWithCommas from "../../../utils/numberWithCommas";
import FormikSubmitButton from "../../ui/forms/formik-submit-button";

const CHECKOUT_CART_ITEM_OBJECT_SCHEMA = Yup.object().shape({
    amount: SELECT_AMOUNT_SCHEMA,
    productId: Yup.string()
});

const CHECKOUT_CART_ITEM_ARRAY_SCHEMA = Yup.array().of(CHECKOUT_CART_ITEM_OBJECT_SCHEMA);

const CHECKOUT_FORM_VALIDATION = Yup.object().shape({
    checkoutCartItems: CHECKOUT_CART_ITEM_ARRAY_SCHEMA
});

function calculateSubTotalAndPoint(items, checkoutCartItems) {
    let subTotal = 0;
    let points = 0;

    for (let i = 0; i < checkoutCartItems.length; i++) {
        const cartItem = checkoutCartItems[i];
        const itemPrice = items[i]?.product.price;
        const itemPoint = items[i]?.product.point;

        subTotal += itemPrice * Number(cartItem.amount);
        points += itemPoint * Number(cartItem.amount);
    };

    return [ subTotal, points ];
};

function CheckoutForm(props) {
    const { items, numOfCartItems } = props;
    const router = useRouter();

    const CHECKOUT_INITIAL_FORM_STATE = {
        checkoutCartItems: items.map(item => (
            {
                productId: item.product._id,
                amount: item.amount
            }
        ))
    };

    const handleSubmitCheckoutForm = async(values, actions) => {
        actions.setSubmitting(false);
        console.log(values)
    
        await axios.put(process.env.NEXT_PUBLIC_CHECKOUT_CART_ITEMS_API, values);
    
        router.push("/cart/checkout");
    };

    return (
        <Formik
            initialValues={CHECKOUT_INITIAL_FORM_STATE}
            validationSchema={CHECKOUT_FORM_VALIDATION}
            onSubmit={handleSubmitCheckoutForm}
            className="mt-auto"
        >
            {({ touched, errors, values }) => {
                const [ subTotal, points ] = calculateSubTotalAndPoint(items, values.checkoutCartItems);
            
                return (
                    <Form>
                        <FieldArray name="checkoutCartItems">
                            {({ remove, insert }) => (  
                                <Box>
                                    {items.map((item, index) => {
                                        const amount = `checkoutCartItems[${index}].amount`;

                                        let errorMessage;

                                        if (errors.checkoutCartItems && errors.checkoutCartItems.length >= 1) {
                                            const amountError = errors.checkoutCartItems?.at(index)?.amount;

                                            if (amountError) errorMessage = amountError;
                                        };

                                        return (
                                            <CheckoutFormItemList 
                                                key={`cart-item-${index}`}
                                                item={item}
                                                index={index}
                                                numOfCartItems={items.length}
                                                amount={amount}
                                                remove={remove}
                                                insert={insert}
                                                touched={touched}
                                                errorMessage={errorMessage}
                                            />
                                        )
                                    })}
                                </Box>
                            )}
                        </FieldArray>
                        
                        <Fragment>
                            <Box 
                                py={2} 
                                px={4}
                                className="flex"
                                sx={{ 
                                    borderTop: 1,
                                    borderColor: "divider"
                                }}
                            >
                                <div className="ml-auto">
                                    <Typography 
                                        variant="body1" 
                                        className="text-xl"
                                    >
                                        Subtotal ({numOfCartItems} items) : &nbsp;
                                        <span className="text-red-500">¥{numberWithCommas(subTotal)}</span>
                                    </Typography>

                                    <Typography className="text-right my-1">
                                        Points to be earned : &nbsp;
                                        <span className="text-orange-400">{numberWithCommas(points)} pt</span>
                                    </Typography>
                                </div>
                            </Box>

                            <div className="flex justify-center">
                                <FormikSubmitButton 
                                    variant="outlined"
                                    className="normal-case my-3"
                                    disabled={(touched.amount && errors.amount) ? true : false}
                                >
                                    Proceed to checkout
                                </FormikSubmitButton>
                            </div>
                        </Fragment>
                    </Form>
                )
            }}
        </Formik>
    )
};

export default CheckoutForm;