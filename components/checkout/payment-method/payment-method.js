import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { checkoutActions } from '../../../store/checkout-slice';
import CreditCardPaymentInfo from './credit-card-payment-info';

function PaymentMethod(props) {
    const { handleBack, handleNext } = props;
    const dispatch = useDispatch();

    const creditCardUsed = useSelector(state => state.checkout.creditCard);
    const paymentMethod = useSelector(state => state.checkout.paymentMethod);
    const amazonPoints = useSelector(state => state.user.amazonPoints);

    const handleOnChange = event => {
        dispatch(checkoutActions.setPaymentMethod({ paymentMethod: event.target.value }));

        if (event.target.value !== "credit") dispatch(checkoutActions.setCreditCard({ creditCard: {} }))
    };
    
    return (
        <Fragment>
            <FormControl className="my-5 flex">
                <RadioGroup
                    row
                    defaultValue={"credit"}
                    name="row-radio-buttons-group"
                    onChange={handleOnChange}
                >
                    <FormControlLabel 
                        value="credit" 
                        control={<Radio />} 
                        label="Credit Card" 
                    />

                    <FormControlLabel 
                        value="point" 
                        control={<Radio />} 
                        label="Amazon Point" 
                    />

                    <FormControlLabel 
                        value="convenience" 
                        control={<Radio />} 
                        label="Convinience Store" 
                    />

                    <FormControlLabel 
                        value="atm" 
                        control={<Radio />} 
                        label="ATM" 
                    />
                </RadioGroup>

                {paymentMethod === "credit" &&
                    <CreditCardPaymentInfo />
                }

                {paymentMethod === "point" &&
                    <Paper className="border-2 border-solid border-gray-200 p-4">
                        <Typography>
                            Amazon points: {amazonPoints}
                        </Typography>
                    </Paper>
                }

                {paymentMethod === "convenience" &&
                    <Paper className="border-2 border-solid border-gray-200 p-4">
                        <Typography>
                            Pay at nearest convenience store.
                        </Typography>
                        
                        <Typography>
                            Your payment ID is xxx-xxxx
                        </Typography>
                    </Paper>
                }

                {paymentMethod === "atm" &&
                    <Paper className="border-2 border-solid border-gray-200 p-4">
                        <Typography>
                            Transfer money to the account number below.
                        </Typography>

                        <Typography>
                            Bank account number: xxxxxxx
                        </Typography>
                    </Paper>
                }
            </FormControl>

            <Stack direction="row" spacing={2} >            
                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ height: "40px" }}
                    disabled={paymentMethod === "credit" && !creditCardUsed && Object.keys(creditCardUsed).length === 0}
                >
                    Next
                </Button>

                <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ height: "40px" }}
                >
                    Back
                </Button>    
            </Stack>                        
        </Fragment>
    );
}

export default PaymentMethod;