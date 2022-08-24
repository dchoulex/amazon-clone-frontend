import { useField, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";

function FormikOTP(props) {
    const { name, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = event => {
        setFieldValue(name, event.target.value)
    };

    const configOTP = {
        ...field,
        ...otherProps,
        variant: "outlined",
        size: "small",
        fullWidth: true,
        margin: "normal",
        required: true,
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configOTP.error = true;
        configOTP.helperText = meta.error;
    };

    return (
        <TextField {...configOTP} />
    );
};

export default FormikOTP;