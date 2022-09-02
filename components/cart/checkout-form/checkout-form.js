import { Fragment } from "react";
import { Formik, Form, FieldArray, getIn } from "formik";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Checkbox from '@mui/material/Checkbox';

import CartItemList from "./checkout-form-item-list";
import numberWithCommas from "../../../utils/numberWithCommas";
import FormikSubmitButton from "../../ui/forms/formik-submit-button";

// const CHECKOUT_CART_ITEM_FORM_VALIDATION = Yup.object().shape({
//     amount: Yup
//         .number()
//         .typeError(INVALID_NUMBER_TYPE_ERROR_MESSAGE)
//         .required(REQUIRED_ERROR_MESSAGE)
//         .integer(INTEGER_NUMBER_ERROR_MESSAGE)
//         .positive(POSITIVE_NUMBER_ERROR_MESSAGE)
//         .max(50, "You cannot buy more than 50 items at once per product.")
// });

function CheckoutForm(props) {
    const { items, numOfCartItems, subTotal, point, isEmpty } = props;
    const CHECKOUT_INITIAL_FORM_STATE = {
        checkoutCartItems: items.map(item => ({
            productId: item.product._id,
            amount: item.amount
        }))
    };

    return (
        <Formik
            initialValues={CHECKOUT_INITIAL_FORM_STATE}
            // validationSchema={ADD_CART_ITEM_FORM_VALIDATION}
            onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                console.log(values)
            }}
            className="mt-auto"
        >
            {({ touched, errors }) => (
                <Form>
                    <FieldArray name="checkoutCartItems">
                        {({ remove, insert }) => (  
                            <Box>
                                {items.map((item, index) => {
                                    const amount = `checkoutCartItems[${index}].amount`;

                                    return (
                                        <CartItemList 
                                            key={`cart-item-${index}`}
                                            item={item}
                                            index={index}
                                            numOfCartItems={items.length}
                                            amount={amount}
                                            remove={remove}
                                            insert={insert}
                                        />
                                    )
                                })}
                            </Box>
                        )}
                    </FieldArray>
                    
                    {!isEmpty && (
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
                                        <span className="text-orange-400">{numberWithCommas(point)} pt</span>
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
                    )}
                </Form>
            )}
        </Formik>
    )
};

export default CheckoutForm;