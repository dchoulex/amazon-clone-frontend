import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { userActions } from "../../../store/user-slice";
import { cartActions } from "../../../store/cart-slice";
import ReviewItemsList from "./review-items-list";
import NoItemInfo from "../../ui/dogs-info/no-item-info";
import getOrderTotal from "../../../utils/getOrderTotal";
import { snackbarActions } from "../../../store/snackbar-slice";
import PageSpinner from "../../ui/pageSpinner";
import ErrorInfo from "../../ui/dogs-info/error-info";
import numberWithCommas from "../../../utils/numberWithCommas";
import { checkoutActions } from "../../../store/checkout-slice";

function ReviewItems(props) {
    const { handleBack, handleNext } = props;
    const dispatch = useDispatch();
    const router = useRouter();

    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const shippingMethod = useSelector(state => state.checkout.shippingMethod);
    const shippingAddress = useSelector(state => state.checkout.shippingAddress);
    const paymentMethod = useSelector(state => state.checkout.paymentMethod);
    const shippingCost = useSelector(state => state.checkout.shippingCost);
    const creditCard = useSelector(state => state.checkout.creditCard);
    const pointUsed = useSelector(state => state.checkout.pointUsed);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_CART_ITEMS_API, fetcher);

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />

    const resData = data.data;
    const cartItems = resData.filter(item => !item.isSaved);

    const cartItemsIsEmpty = cartItems.length === 0;

    const { totalAmount, subTotal, points, tax, shippingCost : orderShippingCost, grandTotal } = getOrderTotal(cartItems, pointUsed, shippingCost);

    const handleBackToCartPage = () => {
        router.replace("/cart")
    };

    const handlePlaceOrder = async() => {
        setIsSubmitting(true);

        try {
            if (paymentMethod !== "credit") dispatch(checkoutActions.setCreditCard({ creditCard: {} }))

            const data = {
                isExpedited: shippingMethod === "standard" ? false : true,
                shippingAddress: shippingAddress._id,
                paymentMethod,
                creditCard: creditCard?._id,
                pointUsed
            };

            const res = await axios.post(process.env.NEXT_PUBLIC_ORDER_ITEMS_API, data);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully order items."
                }));
   
                handleNext();

                dispatch(userActions.changeAmazonPoints({ amazonPoints: res.data.currentPoint }));
                dispatch(cartActions.setTotalAmount({ totalAmount: 0 }));
                dispatch(checkoutActions.reinitialize());
    
                router.push("/account/order-history");
            };
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }));

            setIsSubmitting(false);
        }
    };

    return (
        <Fragment>
            <Paper className="flex p-4 border-2 border-gray-200 border-solid my-5 justify-center">
                {cartItemsIsEmpty ?
                    <NoItemInfo /> :

                    <Grid container>
                        {cartItems.map((item, index) => (
                            <Grid 
                                item 
                                xs={12} 
                                key={`cart-item-${index}`}
                                sx={{ p: 2 }}
                            >
                                <ReviewItemsList 
                                    item={item}
                                    index={index}
                                    numOfCartItems={cartItems.length}
                                    subTotal={subTotal}
                                    points={points}
                                />
                            </Grid>
                        ))}

                        <Grid                         
                            item 
                            xs={12}                         
                            sx={{ p: 2 }}
                        >
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
                                    <TableContainer>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                                        Subtotal ({totalAmount}) :&nbsp;
                                                    </TableCell>

                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                                        {subTotal}
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow >
                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                                        Shipping cost :&nbsp;
                                                    </TableCell>

                                                    <TableCell sx={{borderBottom: "0px", paddingY: "5px" }}>
                                                        {orderShippingCost}
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                                        Tax :&nbsp;
                                                    </TableCell>

                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                                        {tax}
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                                        Point used :&nbsp;
                                                    </TableCell>

                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                                        {numberWithCommas(pointUsed)}
                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px", fontWeight: "bold" }}>
                                                        Grand Total :&nbsp;
                                                    </TableCell>

                                                    <TableCell sx={{ borderBottom: "0px", paddingY: "5px"}}>
                                                        {grandTotal}
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>

                                    <Typography className="text-right mt-4">
                                        Points to be earned : &nbsp;
                                        <span className="text-orange-400">{points} pt</span>
                                    </Typography>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                }
            </Paper>

            <Stack direction="row" spacing={2} >            
                <Button
                    variant="contained"
                    sx={{ height: "40px" }}
                    onClick={handlePlaceOrder}
                    disabled={cartItemsIsEmpty || isSubmitting ? true : false}
                    type="submit"
                >
                    {isSubmitting ? "Submitting..." : "Place Order"}
                </Button> 

                <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ height: "40px" }}
                >
                    Back
                </Button>    

                <Button
                    variant="outlined"
                    sx={{ height: "40px", ml: "auto" }}
                    onClick={handleBackToCartPage}
                >
                    Back to cart page
                </Button> 
            </Stack>            
        </Fragment>
    )
};

export default ReviewItems