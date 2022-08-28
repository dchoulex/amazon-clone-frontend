import { useField, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

function FormikSelect(props) {
    const { name, options, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = event => {
        setFieldValue(name, event.target.value);
    };

    const configSelect = {
        ...field,
        ...otherProps,
        select: true,
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    };

    return (
        <Box my={1}>
            <TextField {...configSelect} >
                {options.map((option, index) => (
                    <MenuItem
                        key={`option-${index}`}
                        value={option.value}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </ TextField>
        </Box>
    )
};

export default FormikSelect;