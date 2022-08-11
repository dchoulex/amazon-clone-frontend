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
        // <Stack className="flex flex-row justify-around border-gray-200 border-2 border-solid">
        //     <Box>
        //         <Typography variant="h5">
        //             ¥ {numberWithCommas(price)}
        //         </Typography>

        //         {stock > 10 ?
        //             null :
        //             <Box className="py-2">
        //                 <Typography 
        //                     className="text-blue-700" 
        //                     variant="h6"
        //                 >
        //                     Order soon. 
        //                 </Typography>
        //                 <Typography 
        //                     className="text-orange-700"
        //                     variant="body1"
        //                 >
        //                     Only 2 left in stock. 
        //                 </Typography>
        //             </Box>
        //         }
        //     </Box>

        //     <Divider />

        //     <Box className="flex flex-col items-center mt-2">
        //         <Box className="flex flex-row items-center">
        //             <Typography className="text-lg mr-5">
        //                 Quantity
        //             </Typography>
        //             <TextField 
        //                     type="number"
        //                     size="small"
        //                     defaultValue={1}
        //                     margin="none"
        //                     className="min-w-[60px] max-w-[80px]"
        //                 />
        //         </Box>
        //         <Stack className="flex flex-row px-4 pb-5" spacing={1}>
        //             <Button 
        //                 fullWidth 
        //                 variant="outlined"
        //                 startIcon={<AddShoppingCartIcon />}
        //             >
        //                 Add to cart
        //             </Button>
        //             <Button 
        //                 fullWidth 
        //                 variant="contained"
        //                 color="warning"
        //                 startIcon={<ShoppingBasketIcon />}
        //             >
        //                 Buy now
        //             </Button>
        //         </Stack>
        //     </Box>
        // </Stack>
    )
};

export default BuyProductBox;