import axios from "axios";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import getAPI from "../../../../utils/getAPI";
import { cartActions } from "../../../../store/cart-slice";

function SavedItemsButtonStack(props) {
    const { cartId, isSaved, setSnackbarState } = props;
    const dispatch = useDispatch();

    const handleDelete = async () => {
        const DELETE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_DELETE_CART_ITEM_API, { id: cartId });

        try {
            const res = await axios.delete(DELETE_CART_ITEM_API)
            if (res.status === 200) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully delete item."
                });
            };
        } catch(err) {
            console.log(err)
            if (err) {
                setSnackbarState({ 
                    open: true , 
                    type: "error", 
                    message: "Oops... Something went wrong."
                });
            }
        }
    };

    const handleToggleSave = async () => {
        const TOGGLE_SAVE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_TOGGLE_SAVE_CART_ITEM_API, { id: cartId, query: `isSaved=${!isSaved}` });

        try {
            const res = await axios.patch(TOGGLE_SAVE_CART_ITEM_API);
            
            if (res.status === 200) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully move item back to cart."
                });
            } 

            dispatch(cartActions.setTotalAmount({ totalAmount: res.data.totalAmount }));
        } catch(err) {
            console.log(err)
            if (err) {
                setSnackbarState({ 
                    open: true , 
                    type: "error", 
                    message: "Oops... Something went wrong."
                });
            }   
        }
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