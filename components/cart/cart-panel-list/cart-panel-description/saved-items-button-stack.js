import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function SavedItemsButtonStack() {
    return (
        <Stack 
            direction="row" 
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            className="items-center mt-auto"
        >
            <Button 
                size="medium"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>

            <Button                 
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
            >
                Move to cart
            </Button>
        </Stack>
    )
};

export default SavedItemsButtonStack;