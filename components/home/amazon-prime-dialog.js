import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AmazonPrimeDialog(props) {
    const { openAmazonPrimeDialog, setOpenAmazonPrimeDialog } = props;

    const handleCloseAmazonPrimeDialog = () => {
        setOpenAmazonPrimeDialog(false);
    };

    return (
        <Dialog open={openAmazonPrimeDialog}>
            <DialogTitle id="amazon-prime-dialog">
                Amazon Prime
            </DialogTitle>

            <DialogContent id="amazon-prime-dialog-title">
                <DialogContentText id="amazon-prime-dialog-description">
                    Become a prime member now and get a free expedited shipping. The charge for annual plan is ¥4,900 (tax included).
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleCloseAmazonPrimeDialog}>Maybe next time</Button>

                <Button onClick={handleSignUpPrime}>Sign up</Button>
            </DialogActions>
        </Dialog>        
    )
};

export default AmazonPrimeDialog;