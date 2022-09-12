import { useField, useFormikContext } from 'formik';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

function FormikRadio(props) {
    const { name, defaultValue, label, options} = props;

    const [field, meta] = useField(name);

    const { setFieldValue } = useFormikContext;

    const handleChangeValue = event => {
        setFieldValue(name, event.value)
    }

    let helperText = "";
    let error = false;

    if (meta && meta.touched && meta.error) {
        error = true;
        helperText = meta.error
    };

    return (
        <Box my={1}>
            <FormControl 
                error={error}
                required
            >
                <FormLabel id="default">{label}</FormLabel>
            
                <RadioGroup
                    aria-labelledby="default"
                    defaultValue={defaultValue}
                    onChange={handleChangeValue}
                    {...field}
                >
                    {options.map((option, index) => (
                        <FormControlLabel 
                            key={`radio-${index}`}
                            value={option.value} 
                            control={<Radio />} 
                            label={option.name} 
                        />
                    ))}
                </RadioGroup>

                <FormHelperText color="error">
                    {helperText}
                </FormHelperText>
        </FormControl>
        </Box>
    )
};

export default FormikRadio;