import { forwardRef } from 'react';

import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import Snackbar from "@mui/material/Snackbar";

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

function CustomizedSnackbar(props) {
    const { snackbarState, setSnackbarState } = props;

    const handleCloseSnackbar = (_, reason) =>  {
        if (reason === 'clickaway') return;
    
        setSnackbarState({...snackbarState, open: false});
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={snackbarState.open}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            sx={{ width: '100%' }}
            TransitionComponent={SlideTransition}
        >
            <Alert 
                onClose={handleCloseSnackbar} 
                severity={snackbarState.type}
            >
                {snackbarState.message}
            </Alert>
        </Snackbar>
    )
};

export default CustomizedSnackbar;