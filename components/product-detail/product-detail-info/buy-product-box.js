import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import numberWithCommas from "../../../utils/numberWithCommas";

function BuyProductBox(props) {
    const { stock, price } = props;

    return (
        <Box>
            <Typography>Price:</Typography>

            <Typography variant="h4" mb={2}>
                ¥ {numberWithCommas(price)}
            </Typography>

            <Divider className="border-gray-300"/>

            {stock > 10 ?
                null :
                <Box className="py-2">
                    <Typography 
                        className="text-blue-700" 
                        variant="h6"
                    >
                        Order soon. 
                    </Typography>
                    <Typography 
                        className="text-orange-700"
                        variant="body1"
                    >
                        Only 2 left in stock. 
                    </Typography>
                </Box>
            }

            <TextField 
                type="number"
                size="small"
                defaultValue={1}
                margin="none"
                className="min-w-[60px] max-w-[80px] mb-2"
            />

            <Stack 
                direction="row" 
                spacing={2}
                className="mt-1 pb-5"
            >
                <Button  
                    variant="outlined"
                    startIcon={<AddShoppingCartIcon />}
                >
                    Add to cart
                </Button>

                <Button 
                    variant="contained"
                    color="warning"
                    startIcon={<ShoppingBasketIcon />}
                >
                    Buy now
                </Button>
            </Stack>
        </Box>
    )
};

export default BuyProductBox;