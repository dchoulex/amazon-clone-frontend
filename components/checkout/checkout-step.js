import { useSelector } from 'react-redux';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ShippingAddress from './shipping-address/shipping-address';
import ShippingMethod from '../../components/checkout/shipping-method';
import PaymentMethod from './payment-method/payment-method';
import ReviewItems from './review-items/review-items';

const steps = ["Shipping address", "Shipping method", "Payment method", "Review items" ];

function getDisplayedShippingAddress(shippingAddress) {
    return `〒 ${shippingAddress.postCode}  ${shippingAddress.city}, ${shippingAddress.rest}`;
};

function getDisplayedShippingMethod(shippingMethod) {
    return shippingMethod === "standard" ? "Standard Shipping" : "Expedited Shipping";
};

function getDisplayedPaymentMethod(paymentMethod, creditCard) {
    let displayedPaymentMethod;

    switch (paymentMethod) {
        case "credit":
            displayedPaymentMethod = "Credit Card";
            break;
        case "point":
            displayedPaymentMethod = "Amazon Points";
            break;
        case "atm":
            displayedPaymentMethod = "ATM";
            break;
        case "convenience":
            displayedPaymentMethod = "Convenience Store";
            break;
        default:
            break;
    };

    if (paymentMethod === "credit" && Object.keys(creditCard).length !== 0) displayedPaymentMethod += " ending in ..." + creditCard.number.slice(creditCard.number.length - 4);

    return displayedPaymentMethod ;
};

function getStepDescription(shippingAddress, shippingMethod, paymentMethod, creditCard, index) {
    if (index === 0) return getDisplayedShippingAddress(shippingAddress);
    if (index === 1) return getDisplayedShippingMethod(shippingMethod);
    if (index === 2) return getDisplayedPaymentMethod(paymentMethod, creditCard);
}

function CheckoutStep(props) {
    const { activeStep, handleBack, handleNext, setSnackbarState } = props;

    const shippingMethod = useSelector(state => state.checkout.shippingMethod);
    const shippingAddress = useSelector(state => state.checkout.shippingAddress);
    const creditCard = useSelector(state => state.checkout.creditCard);
    const paymentMethod = useSelector(state => state.checkout.paymentMethod);

    return (
        <Paper 
            className="border-gray-200 border-solid border-2 m-10 p-10 bg-gray-100"
        >
            <Stepper 
                activeStep={activeStep} 
                orientation="vertical"
            >
                {steps.map((step, index) => {
                    const stepDesc = getStepDescription(shippingAddress, shippingMethod, paymentMethod, creditCard, index);

                    return (
                        <Step key={step}>
                            <StepLabel
                                optional={
                                    index === 0 || index === 1 || index === 2 ? 
                                        <Typography variant="caption" className="text-sm">
                                            {stepDesc}
                                        </Typography> :
                                        null
                                }
                            >
                                <Typography variant="h5">{step}</Typography>
                            </StepLabel>

                            <StepContent>
                                {index === 0 &&
                                    <ShippingAddress 
                                        handleNext={handleNext}
                                    />
                                }

                                {index === 1 &&
                                    <ShippingMethod 
                                        handleBack={handleBack}
                                        handleNext={handleNext}
                                    />
                                }

                                {index === 2 &&
                                    <PaymentMethod 
                                        handleBack={handleBack}
                                        handleNext={handleNext}
                                    />
                                }

                                {index === 3 &&
                                    <ReviewItems 
                                        handleBack={handleBack} 
                                        handleNext={handleNext}
                                        setSnackbarState={setSnackbarState}
                                    />
                                }
                            </StepContent>
                        </Step>
                    )
                })}
            </Stepper>

            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                        Thank you for purchasing!
                    </Typography>
                </Paper>
            )}
        </Paper>
    )
};

export default CheckoutStep;