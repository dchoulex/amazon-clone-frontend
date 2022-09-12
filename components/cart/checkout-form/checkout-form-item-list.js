import { Fragment } from "react";
import Image from "next/image";
import { Field } from "formik";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import StockLabel from "../../ui/stock-label";
// import Checkbox from '@mui/material/Checkbox';

import numberWithCommas from "../../../utils/numberWithCommas";
import FormikNumber from "../../ui/forms/formik-number";
import axios from "axios";
import getAPI from "../../../utils/getAPI";
import ErrorMessage from "../../ui/forms/error-message";

function CheckoutFormItemList(props) {
    const { item, index, numOfCartItems, remove, insert, errorMessage, setSnackbarState } = props;
    const productId = item.product._id;

    const DELETE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_DELETE_CART_ITEM_API, { id: item._id });
    const TOGGLE_SAVE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_TOGGLE_SAVE_CART_ITEM_API, { id: item._id, query: `isSaved=${!item.isSaved}` });

    const handleChangeAmount = event => {
        remove(index);

        insert(index, { 
            productId: productId, 
            amount: Number(event.target.value)
        });
    };

    const handleDeleteItem = async () => {
        remove(index);

        try {
            const res = await axios.delete(DELETE_CART_ITEM_API);

            if (res.status === 204) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully delete item."
                });
            } 
        } catch(err) {
            if (err) {
                setSnackbarState({ 
                    open: true , 
                    type: "error", 
                    message: "Oops... Something went wrong."
                });
            }
        }
    };

    const handleToggleSave = async () => {
        try {
            const res = await axios.patch(TOGGLE_SAVE_CART_ITEM_API);

            if (res.status === 200) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully save item."
                });
            } 
        } catch(err) {
            if (err) {
                setSnackbarState({ 
                    open: true , 
                    type: "error", 
                    message: "Oops... Something went wrong."
                });
            }            
        }
    };

    return (
        <Fragment>
            <Box className="flex py-7">
                {/* Only checkout checked items feature. Will available in future version.
                <Box 
                    className="w-[50px] flex flex-col justify-center items-center"
                >
                    <Checkbox defaultChecked /> 
                </Box>  */}
    
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
                                name={`checkoutCartItems[${index}].productId`}
                                type="hidden"
                            />

                            <Box>
                                <Stack 
                                    direction="row" 
                                    spacing={2}
                                    divider={<Divider orientation="vertical" flexItem />}
                                    className="items-center mt-auto min-w-[430px]"
                                >
                                    <FormikNumber 
                                        name={`checkoutCartItems[${index}].amount`}
                                        className="min-w-[60px] max-w-[80px]"
                                        defaultValue={item.amount}
                                        onClick={handleChangeAmount}
                                    />                                
        
                                    <Button 
                                        size="medium"
                                        variant="outlined"
                                        color="error"
                                        startIcon={<DeleteIcon />}
                                        onClick={handleDeleteItem}
                                    >
                                        Delete
                                    </Button>
        
                                    <Button                 
                                        variant="outlined"
                                        startIcon={<SaveIcon />}
                                        color="success"
                                        onClick={handleToggleSave}
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