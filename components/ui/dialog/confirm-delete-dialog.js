import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ConfirmDeleteDialog(props) {
    const { openConfirmDeleteDialog, handleDelete, setOpenConfirmDeleteDialog } = props;

    const handleCloseConfirmDeleteDialog = () => {
        setOpenConfirmDeleteDialog(false);
    };

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

                <Button onClick={handleDelete}>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>        
    )
};

export default ConfirmDeleteDialog;