import axios from "axios";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import getAPI from "../../../../utils/getAPI";
import { cartActions } from "../../../../store/cart-slice";
import { snackbarActions } from "../../../../store/snackbar-slice";

function SavedItemsButtonStack(props) {
    const { cartId, isSaved, setDataIsChanging, setIsRequesting, isRequesting } = props;
    const dispatch = useDispatch();

    const handleDelete = async () => {
        setIsRequesting(true);

        const DELETE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_DELETE_CART_ITEM_API, { id: cartId });

        try {
            const res = await axios.delete(DELETE_CART_ITEM_API)
            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully delete item."
                }));

                setDataIsChanging(true);
            };
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }));

            setIsRequesting(false);
        }
    };

    const handleToggleSave = async () => {
        setIsRequesting(true);

        const TOGGLE_SAVE_CART_ITEM_API = getAPI(process.env.NEXT_PUBLIC_TOGGLE_SAVE_CART_ITEM_API, { id: cartId, query: `isSaved=${!isSaved}` });

        try {
            const res = await axios.patch(TOGGLE_SAVE_CART_ITEM_API);
            
            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully move item back to cart."
                }));

                dispatch(cartActions.setTotalAmount({ totalAmount: res.data.totalAmount }));

                setDataIsChanging(true);
            } 
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }));

            setIsRequesting(false);
        }
    };

    return (
        <Stack 
            direction="row" 
            spacing={2}
            divider={
                <Divider orientation="vertical" flexItem />
            }
            className="items-center mt-auto"
        >
            <Button 
                size="medium"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
                disabled={isRequesting}
            >
                Delete
            </Button>

            <Button                 
                variant="contained"
                startIcon={<AddShoppingCartIcon />}
                onClick={handleToggleSave}
                disabled={isRequesting}
            >
                Move to cart
            </Button>
        </Stack>
    )
};

export default SavedItemsButtonStack;