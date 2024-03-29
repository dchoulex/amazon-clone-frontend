import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Field } from "formik";
import { useDispatch } from "react-redux";
import axios from "axios";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import StockLabel from "../../ui/stock-label";

import numberWithCommas from "../../../utils/numberWithCommas";
import FormikNumber from "../../ui/forms/formik-number";
import getAPI from "../../../utils/getAPI";
import ErrorMessage from "../../ui/forms/error-message";
import { cartActions } from "../../../store/cart-slice";
import { snackbarActions } from "../../../store/snackbar-slice";

function CheckoutFormItemList(props) {
    const { item, index, numOfCartItems, remove, insert, errors, setDataIsChanging, setIsRequesting, isRequesting } = props;
    const productId = item.product._id;

    const [ errorMessage, setErrorMessage ] = useState(null);

    useEffect(() => {
        if (!errors.checkoutCartItems) {
            setErrorMessage(null);
        };

        if (errors.checkoutCartItems && errors.checkoutCartItems[0] !== null) {
            const amountError = errors.checkoutCartItems?.at(index)?.amount;
    
            if (amountError) setErrorMessage(amountError);
        };
    }, [errors.checkoutCartItems, index])
    
    const dispatch = useDispatch();

    const handleChangeAmount = event => {
        remove(index);

        insert(index, { 
            productId: productId, 
            amount: Number(event.target.value)
        });
    };

    const handleDeleteItem = async () => {
        setIsRequesting(true);

        const DELETE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_DELETE_CART_ITEM_API, { id: item._id });

        remove(index);

        try {
            const res = await axios.delete(DELETE_CART_ITEM_API);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully delete item."
                }));

                dispatch(cartActions.setTotalAmount({ totalAmount: res.data.totalAmount }));

                setDataIsChanging(true);
            };
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }));

            setIsRequesting(false);
        }
    };

    const handleToggleSave = async () => {
        setIsRequesting(true);

        const TOGGLE_SAVE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_TOGGLE_SAVE_CART_ITEM_API, { id: item._id, query: `isSaved=${!item.isSaved}` });

        try {
            const res = await axios.patch(TOGGLE_SAVE_CART_ITEM_API);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully save item."
                }));

                if (!item.isSaved) {
                    remove(index)
                } else {
                    insert(index, { 
                        productId: productId, 
                        amount: Number(item.amount)
                    });
                };

                dispatch(cartActions.setTotalAmount({ totalAmount: res.data.totalAmount }));

                setDataIsChanging(true);
            };
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }));

            setIsRequesting(false);
        }
    };

    return (
        <Fragment>
            <Box className="flex py-7">    
                <Grid container className="px-5 md:flex md:flex-1">
                    <Grid item xs={12} md={4}>
                        <Box className="flex justify-center md:mr-5 pb-5">
                            <div>
                                <Image 
                                    src={`/images/products/${item.product.slug}/${item.product.images[0]}`}
                                    alt="picture"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </Box>
                    </Grid>
    
                    <Grid item xs={12} md={8} className="md:flex md:flex-1">
                        <Box className="flex flex-col flex-1">
                            <Typography 
                                variant="h5" 
                                className="font-light"
                            >
                                {item.product.name}
                            </Typography>
    
                            <StockLabel 
                                stock={item.product.stock} 
                                isCartItem={true} 
                            />
    
                            <Typography 
                                variant="h5" 
                                className="my-2"
                            >
                                ¥ {numberWithCommas(item.product.price)}
                            </Typography>
    
                            <Typography variant="body2" className="mb-4">
                                Get <span className="text-orange-400">{numberWithCommas(item.product.point)}</span> amazon points.
                            </Typography>

                            <Field 
                                name={`checkoutCartItems.${index}.productId`}
                                value={item.product._id + ""}
                                type="hidden"
                            />

                            <Box>
                                <Stack 
                                    direction="row" 
                                    spacing={2}
                                    divider={
                                        <Divider orientation="vertical" flexItem />
                                    }
                                    className="items-center mt-auto min-w-[430px]"
                                >
                                    <FormikNumber 
                                        name={`checkoutCartItems.${index}.amount`}
                                        className="min-w-[60px] max-w-[80px]"
                                        defaultValue={Number(item.amount)}
                                        onClick={handleChangeAmount}
                                        disabled={isRequesting}
                                    />

                                    <Button 
                                        size="medium"
                                        variant="outlined"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={handleDeleteItem}
                                        disabled={isRequesting}
                                    >
                                        Delete
                                    </Button>
        
                                    <Button                 
                                        variant="outlined"
                                        startIcon={<SaveIcon />}
                                        color="success"
                                        onClick={handleToggleSave}
                                        disabled={isRequesting}
                                    >
                                        Save for later
                                    </Button>
                                </Stack>

                                {errorMessage &&
                                    <ErrorMessage errorMessage={errorMessage} className="mt-2"/>
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    
            {index !== numOfCartItems - 1 &&
                <Divider sx={{ borderColor: "#bdbdbd", borderStyle: "dashed" }}/>
            }
        </Fragment>
    )
};

export default CheckoutFormItemList;