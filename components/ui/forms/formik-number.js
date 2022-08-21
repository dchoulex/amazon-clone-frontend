import { useField, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";

function FormikNumber(props) {
    const { name, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = event => {
        setFieldValue(name, event.target.value)
    };

    const configNumber = {
        ...field,
        ...otherProps,
        margin: "none",
        size: "small",
        type: "number",
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configNumber.error = true;
    };

    return (
        <TextField {...configNumber} />
    );
};

export default FormikNumber;