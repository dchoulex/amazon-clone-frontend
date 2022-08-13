import { Fragment } from "react";
import Box from "@mui/material/Box";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import CartPanelImage from "./cart-panel-image";
import CartPanelDescription from "./cart-panel-description/cart-panel-description";

function CartPanelList(props) {
    const { items, currentTab } = props;

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
                                <CartPanelImage imagePath="/images/amazon-logo.png" />
                            </Grid>

                            <Grid item xs={12} md={8}>
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