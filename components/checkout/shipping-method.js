import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function ShippingMethod() {
    return (
        <FormControl className="pl-1 my-4">
            <RadioGroup
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="expedited" control={<Radio />} label="Expedited Shipping" />
                
                <FormControlLabel value="standard" control={<Radio />} label="Standard Shipping" />
            </RadioGroup>
        </FormControl>
    );
};

export default ShippingMethod;