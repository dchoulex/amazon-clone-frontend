import * as React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartButton() {
    return (
        <React.Fragment>
            <Button className="h-56px flex-none">
                <Box className="h-56px">
                    <ShoppingCartOutlinedIcon fontSize="large" className="text-white relative top-4"/>
                    <Typography className="relative bottom-11 text-lg text-orange-400 p-0">
                        0
                    </Typography>
                </Box>
                <Typography className="normal-case text-white relative top-3">
                    Cart
                </Typography>
            </Button>
        </React.Fragment>
    )
};

export default CartButton;