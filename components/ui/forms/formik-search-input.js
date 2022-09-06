import { useField, useFormikContext } from "formik";
import slugify from "slugify";

import InputBase from "@mui/material/InputBase";

function FormikSearchInput(props) {
    const { name, ...otherProps } = props;
    const [ field, _ ] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleChangeInput = (event) => {
        const slug = slugify(event.target.value, { lower: true });

        setFieldValue(name, slug);
    };

    const configSearchInput = {
        ...field,
        ...otherProps,
        className: "bg-white flex flex-1 px-3",
        onChange: handleChangeInput
    };

    return (
        <InputBase { ...configSearchInput } />
    )
};

export default FormikSearchInput;