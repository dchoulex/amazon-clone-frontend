import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function PaymentMethod() {
    const points = 2000;
    
    return (
        <FormControl className="my-5">
            <RadioGroup
                row
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />

                <FormControlLabel value="point" control={<Radio />} label="Amazon Point" />

                <FormControlLabel value="convinience" control={<Radio />} label="Convinience Store" />

                <FormControlLabel value="atm" control={<Radio />} label="ATM" />
            </RadioGroup>

            <Paper className="border-2 border-solid border-gray-200">
                <Box>
                    This is credit card payment
                </Box>
                
                <Box>
                    You have {points} amazon points
                </Box>
                
                <Box>
                    This is credit card payment
                </Box>

                <Box>
                    This is credit card payment
                </Box>
            </Paper>
        </FormControl>
    );
}

export default PaymentMethod;