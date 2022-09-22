import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";
import { snackbarActions } from '../../store/snackbar-slice';

const Alert = forwardRef(function Alert(props, ref) {
    return (
        <MuiAlert 
            elevation={6} 
            ref={ref} 
            variant="filled" 
            {...props} 
        />
    )
});

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
}

function CustomizedSnackbar() {
    const dispatch = useDispatch();

    const open = useSelector(state => state.snackbar.open);
    const type = useSelector(state => state.snackbar.type);
    const message = useSelector(state => state.snackbar.message);

    let snackbarTimeout;

    switch(type) {
        case "info":
            snackbarTimeout = null;
            break;

        case "success":
            snackbarTimeout = 1000;
            break;

        case "error":
            snackbarTimeout = 3000;
            break;

        default:
            break;
    }

    const handleCloseSnackbar = () =>  {
        dispatch(snackbarActions.closeSnackbar())
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={snackbarTimeout}
            onClose={handleCloseSnackbar}
            sx={{ width: '100%' }}
            TransitionComponent={SlideTransition}
        >
            <Alert 
                onClose={handleCloseSnackbar} 
                severity={type}
            >
                {message}
            </Alert>
        </Snackbar>
    )
};

export default CustomizedSnackbar;