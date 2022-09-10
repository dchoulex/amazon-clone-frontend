import { Fragment } from "react";
import Image from "next/image";

import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

import numberWithCommas from "../../../utils/numberWithCommas";

function ReviewItemsList(props) {
    const { item, index, numOfCartItems } = props;

    const displayedTotal = `${numberWithCommas(item.product.price * item.amount)} (¥ ${numberWithCommas(item.product.price)} / product)`;
    const displayedPoints = `${item.product.point} / product`;
    const displayedTotalPoints = numberWithCommas(item.product.point * item.amount)

    return (
        <Fragment>
            <Box className="flex py-2">
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
    
                            <Typography 
                                variant="h5" 
                                className="my-2"
                            >
                                Total : 
                                ¥ {displayedTotal}
                            </Typography>
    
                            <Typography variant="body">
                                Total amazon points: &nbsp;
                                <span className="text-orange-400">
                                    {displayedTotalPoints} &nbsp;
                                </span>

                                ({displayedPoints})
                            </Typography>

                            <Typography 
                                variant="body" 
                                className="my-2"
                            >
                                Amount : {item.amount}
                            </Typography>                              
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

export default ReviewItemsList;