import { useState } from 'react';
import Box from '@mui/material/Box';

import LogoButtonWhite from '../../components/ui/logo-button-white';
import CheckoutStep from '../../components/checkout/checkout-step';

function CheckoutPage() {
    const [activeStep, setActiveStep] = useState(0);

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
    );
};

export default CheckoutPage;