import { useState } from 'react';
import Box from '@mui/material/Box';

import LogoButtonWhite from '../ui/logo-button-white';
import CheckoutStep from './checkout-step';

function CheckoutInfo() {
    const [ activeStep, setActiveStep ] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                handleBack={handleBack}
                handleNext={handleNext}
            />
        </Box>
    )
};

export default CheckoutInfo;