import { useField } from 'formik';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function SelectAddressRadio(props) {
    const { name, value} = props;
    const [ field, _ ] = useField(name);

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