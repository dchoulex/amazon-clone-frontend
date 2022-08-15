import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ShippingAddress from '../../components/checkout/shipping-address';
import ShippingMethod from '../../components/checkout/shipping-method';
import PaymentMethod from '../../components/checkout/payment-method';

const steps = [
    {
        label: "Shipping address",
        description: "Please confirm your shipping address."
    },
    {
        label: "Shipping method",
        description: "Please select shipping method."
    },
    {
        label: "Payment method",
        description: "Please provide a payment method."
    },
    {
        label: "Review items",
        description: "Please review items before place your order."
    }
];

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
        sx={{ 
            height: "100vh", 
            width: "100vw"
        }}
        p={2}
    >
        <Stepper 
            activeStep={activeStep} 
            orientation="vertical"
        >
            {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel
                        optional={
                            index === 2 || index === 1 ? (
                                <Typography variant="caption" className="text-sm">Expedited Shipping</Typography>
                            ) : null
                        }
                    >
                        <Typography variant="h5">{step.label}</Typography>
                    </StepLabel>

                    <StepContent>
                        <Typography variant="body1">{step.description}</Typography>

                        {index === 0 &&
                            <ShippingAddress />
                        }

                        {index === 1 &&
                            <ShippingMethod />
                        }

                        {index === 2 &&
                            <PaymentMethod />
                        }

                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ height: "40px" }}
                            >
                                {index === steps.length - 1 ? "Confirm" : "Next"}
                            </Button>

                            <Button
                                variant="outlined"
                                onClick={handleBack}
                                sx={{ height: "40px" }}
                            >
                                Back
                            </Button>
                        </Stack>
                      
                    </StepContent>
                </Step>
            ))}
        </Stepper>

        {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                    Thank you for purchasing.
                </Typography>
            </Paper>
        )}
    </Box>
    );
};

export default CheckoutPage;