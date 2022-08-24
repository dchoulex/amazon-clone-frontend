import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ConfirmCloseDialog(props) {
    const { openConfirmCloseDialog, handleCloseAllDialog, setOpenConfirmCloseDialog } = props;

    const handleCloseConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(false);
    };

    return (
        <Dialog open={openConfirmCloseDialog}>
            <DialogTitle id="confirm-close-dialog">
                Are you sure you want to close?
            </DialogTitle>

            <DialogContent id="confirm-close-dialog-title">
                <DialogContentText id="confirm-close-dialog-description">
                    You will lose all of the information you have input so far if you close.
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleCloseConfirmCloseDialog}>No</Button>

                <Button onClick={handleCloseAllDialog}>Yes</Button>
            </DialogActions>
        </Dialog>        
    )
};

export default ConfirmCloseDialog;