import { Fragment } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import CartPanelDescription from "./cart-panel-description/cart-panel-description";

function CartPanelList(props) {
    const { items, currentTab, imagePath } = props;

    return (
        <Box>
            {items.map((item, index) => (
                <Fragment key={item.productName}>
                    <Box className="flex py-7">
                        <Box 
                            className="w-[50px] flex flex-col justify-center items-center"
                        >
                            <Checkbox defaultChecked /> 
                        </Box> 
             
                        <Grid container className="px-5 md:flex md:flex-1">
                            <Grid item xs={12} md={4}>
                                <Box className="flex justify-center md:mr-5 pb-5">
                                    <div>
                                        <Image 
                                            src={imagePath}
                                            alt="picture"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </Box>
                            </Grid>

                            <Grid item xs={12} md={8} className="md:flex md:flex-1">
                                <CartPanelDescription 
                                    productName={item.productName}
                                    stock={item.stock}
                                    price={item.price}
                                    point={item.point}
                                    currentTab={currentTab}
                                /> 
                            </Grid>
                        </Grid>
                    </Box>
    
                    {index === items.length - 1 ? 
                        null : 
                        <Divider sx={{ borderColor: "#bdbdbd", borderStyle: "dashed" }}/>
                    }
                </Fragment>
            ))}
        </Box>
    )
};

export default CartPanelList;