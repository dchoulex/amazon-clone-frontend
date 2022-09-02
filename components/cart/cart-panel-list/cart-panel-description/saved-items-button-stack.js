import axios from "axios";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import getAPI from "../../../../utils/getAPI";

function SavedItemsButtonStack(props) {
    const { cartId, isSaved } = props;

    const DELETE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_DELETE_CART_ITEM_API, { id: cartId });
    const TOGGLE_SAVE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_TOGGLE_SAVE_CART_ITEM_API, { id: cartId, query: `isSaved=${!isSaved}` });

    const handleDelete = async () => {
        await axios.delete(DELETE_CART_ITEM_API)
    };

    const handleToggleSave = async () => {
        await axios.patch(TOGGLE_SAVE_CART_ITEM_API)
    };

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
                onClick={handleDelete}
            >
                Delete
            </Button>

            <Button                 
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                onClick={handleToggleSave}
            >
                Move to cart
            </Button>
        </Stack>
    )
};

export default SavedItemsButtonStack;