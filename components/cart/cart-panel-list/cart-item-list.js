import { Fragment } from "react";
import Image from "next/image";

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
import FormikHidden from "../../ui/forms/formik-hidden";

function CartItemList(props) {
    const { item, index, numOfCartItems, arrayHelpers } = props;

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
    
                            <StockLabel stock={item.product.stock} isCartItem={true} />
    
                            <Typography 
                                variant="h5" 
                                className="my-2"
                            >
                                ¥ {numberWithCommas(item.product.price)}
                            </Typography>
    
                            <Typography variant="body2" className="mb-4">
                                Get <span className="text-orange-400">{numberWithCommas(item.product.point)}</span> amazon points.
                            </Typography>
    
                            <FormikHidden 
                                name={`checkoutCartItems[${index}].productId`}
                                value={item.product._id}
                            />
    
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
                                    onClick={() => arrayHelpers.push({ productId: "", amount: 0})}
                                />
    
                                <Button 
                                    size="medium"
                                    variant="outlined"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => arrayHelpers.remove(index)}
                                >
                                    Delete
                                </Button>
    
                                <Button                 
                                    variant="outlined"
                                    startIcon={<SaveIcon />}
                                    color="success"
                                >
                                    Save for later
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    
            {index === numOfCartItems - 1 ? 
                null : 
                (
                    <Divider sx={{ borderColor: "#bdbdbd", borderStyle: "dashed" }}/>
                )
            }
        </Fragment>
    )
};

export default CartItemList;