import { Fragment } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import LoopIcon from '@mui/icons-material/Loop';
import RateReviewIcon from '@mui/icons-material/RateReview';

import numberWithCommas from "../../utils/numberWithCommas";
import getAPI from "../../utils/getAPI";
import { snackbarActions } from "../../store/snackbar-slice";
import { cartActions } from "../../store/cart-slice";

function OrderItemList(props) {
    const { orderItems, orderId, status, isCanceled } = props;

    const dispatch = useDispatch();

    return (
        <Box px={2}>
            {orderItems.map((orderItem, index) => {
                const { product } = orderItem;
                const productId = product._id;

                const handleBuyAgain = async() => {
                    try {
                        const res = await axios.post(process.env.NEXT_PUBLIC_ADD_CART_ITEM_API, {
                            productId,
                            amount: 1
                        })

                        if (res.status === 200) {
                            dispatch(snackbarActions.setSnackbarState({
                                open: true, 
                                type: "success", 
                                message: "Successfully add item to cart."
                            }));

                            dispatch(cartActions.setTotalAmount({ totalAmount: res.data.totalAmount }))
                        } 
                    } catch(err) {
                        dispatch(snackbarActions.setSnackbarState({
                            open: true , 
                            type: "error", 
                            message: "Oops... Something went wrong."
                        }))
                    }
                };

                const handleOrderBack = async() => {
                    const ORDER_BACK_API = getAPI(process.env.NEXT_PUBLIC_ORDER_BACK_API, { id: orderId });

                    try {
                        const res = await axios.patch(ORDER_BACK_API);

                        if (res.status === 200) {
                            dispatch(snackbarActions.setSnackbarState({
                                open: true, 
                                type: "success", 
                                message: "Successfully order back item."
                            }))
                        } 
                    } catch(err) {
                        dispatch(snackbarActions.setSnackbarState({
                            open: true , 
                            type: "error", 
                            message: "Oops... Something went wrong."
                        }))
                    }
                };

                return (
                    <Fragment key={`order-item-${index}`}>
                        <Box className="flex" py={3}>
                            <Image 
                                src={`/images/products/${product.slug}/${product.images[0]}`}
                                alt={product.name}
                                width={120}
                                height={120}
                            />

                            <div className="ml-8 flex flex-col">
                                <Typography variant="h6">
                                    {product.name}
                                </Typography>

                                <Typography variant="body1">
                                    ¥ {numberWithCommas(product.price)}
                                </Typography>

                                <Typography variant="body">
                                    Amount: {orderItem.amount}
                                </Typography>

                                <Stack 
                                    direction="row" 
                                    variant="h6" 
                                    spacing={2}
                                    className="mt-auto"
                                >
                                    <Link href={`/products/${productId}`}>
                                        <Button 
                                            variant="contained"
                                        >
                                            View item
                                        </Button>
                                    </Link>

                                    <Button 
                                        variant="outlined"
                                        color="success"
                                        startIcon={<LoopIcon />}
                                        onClick={handleBuyAgain}
                                    >
                                        Buy again
                                    </Button>

                                    {status === "Delivered" && 
                                        <Link href="/account/review">
                                            <Button 
                                                variant="outlined"
                                                startIcon={<RateReviewIcon />}
                                                color="secondary"
                                            >
                                                Review
                                            </Button>
                                        </Link>
                                    }

                                    {isCanceled &&
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={handleOrderBack}
                                        >
                                            Order back
                                        </Button>
                                    }
                                </Stack>
                            </div>
                        </Box>

                        {index === orderItems.length - 1 || 
                            <Divider />
                        }
                    </Fragment>
                )
            })}
        </Box>
    )
};

export default OrderItemList;