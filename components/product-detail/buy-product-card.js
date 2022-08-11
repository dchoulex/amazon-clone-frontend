import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import numberWithCommas from "../../utils/numberWithCommas";

function BuyProductCard(props) {
    const { stock, price } = props;

    return (
        <Box className="pt-5 px-8">
            <Card className="w-[250px] border-gray-200 border-solid border-2">
                <CardContent>
                    <Typography variant="h5">
                        ¥ {numberWithCommas(price)}
                    </Typography>

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

                    <Box className="flex items-center mt-2">
                        <Typography className="text-lg mr-5">
                            Quantity
                        </Typography>
                        <TextField 
                                type="number"
                                size="small"
                                defaultValue={1}
                                margin="none"
                                className="min-w-[60px] max-w-[80px]"
                            />
                    </Box>
                </CardContent>
                <Stack className="flex-col px-4 pb-5" spacing={1}>
                    <Button 
                        fullWidth 
                        variant="outlined"
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Add to cart
                    </Button>
                    <Button 
                        fullWidth 
                        variant="contained"
                        color="warning"
                        startIcon={<ShoppingBasketIcon />}
                    >
                        Buy now
                    </Button>
                </Stack>
            </Card>
        </Box>
    )
};

export default BuyProductCard;