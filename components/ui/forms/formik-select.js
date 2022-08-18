import { useField, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function FormikSelect(props) {
    const { name, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = event => {
        setFieldValue(name, event.target.value)
    };

    const configSelect = {
        ...field,
        ...otherProps,
        select: "true",
        onChange: handleChange
    };

    if (meta && meta.error && meta.touched) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    };

    return (
        <Box my={1}>
            <TextField {...configSelect} />
        </Box>
    )
};

export default FormikSelect;