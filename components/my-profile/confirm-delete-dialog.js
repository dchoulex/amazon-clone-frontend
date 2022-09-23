import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { authActions } from "../../store/auth-slice";
import { snackbarActions } from "../../store/snackbar-slice";

function ConfirmDeleteDialog(props) {
    const { openConfirmDeleteDialog, setOpenConfirmDeleteDialog, setIsSubmitting, isSubmitting } = props;
    const dispatch = useDispatch();
    const router = useRouter();

    const handleCloseConfirmDeleteDialog = () => {
        setOpenConfirmDeleteDialog(false);
    };

    const handleDeleteAccount = async() => {
        setIsSubmitting(true);

        try {
            const res = await axios.delete(process.env.NEXT_PUBLIC_DELETE_ACCOUNT_API);

            if (res.status === 204) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully delete your account."
                }))

                dispatch(authActions.logout());

                setOpenConfirmDeleteDialog(false);

                router.push("/");
            };
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }));

            setIsSubmitting(false);
        }
    }

    return (
        <Dialog open={openConfirmDeleteDialog}>
            <DialogTitle id="confirm-delete-dialog">
                Are you sure you want to delete?
            </DialogTitle>

            <DialogContent id="confirm-delete-dialog-title">
                <DialogContentText id="confirm-delete-dialog-description">
                    You might not recover this information after you delete.
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleCloseConfirmDeleteDialog}>No</Button>

                <Button 
                    onClick={handleDeleteAccount}
                    disabled={isSubmitting}
                >
                    Yes
                </Button>
            </DialogActions>
        </Dialog>        
    )
};

export default ConfirmDeleteDialog;