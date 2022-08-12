import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function BuyAgainItemsButtonStack() {
    return (
        <Stack 
            direction="row" 
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            className="items-center mt-auto"
        >
            <Button                 
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
            >
                Move to cart
            </Button>
        </Stack>
    )
};

export default BuyAgainItemsButtonStack;