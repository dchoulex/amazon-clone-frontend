import { useField, useFormikContext } from 'formik';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

function SelectAddressRadio(props) {
    const { name, value} = props;
    const [ field, meta ] = useField(name);

    return (
        <Box my={1}>
            <FormControl 
                required
            >
                <FormControlLabel 
                    {...field}
                    value={value} 
                    control={<Radio />} 
                />
        </FormControl>
        </Box>
    )
};

export default SelectAddressRadio;