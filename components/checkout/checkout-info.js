import { useState } from 'react';
import Box from '@mui/material/Box';

import LogoButtonWhite from '../ui/logo-button-white';
import CheckoutStep from './checkout-step';
import CustomizedSnackbar from '../ui/customized-snackbar';

function CheckoutInfo() {
    const [ activeStep, setActiveStep ] = useState(0);
    const [ snackbarState, setSnackbarState ] = useState({
        open: false,
        type: null,
        message: null
    });

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    return (
        <Box 
            sx={{height:"100vh"}} 
            className="flex flex-col"
        >
            <div className="flex justify-center py-5">
                <LogoButtonWhite /> 
            </div>

            <CheckoutStep 
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                handleBack={handleBack}
                handleNext={handleNext}
                setSnackbarState={setSnackbarState}
            />

            <CustomizedSnackbar
                snackbarState={snackbarState}
                setSnackbarState={setSnackbarState}
            />
        </Box>
    )
};

export default CheckoutInfo;