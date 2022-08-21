import { useField, useFormikContext } from "formik";

function FormikHidden(props) {
    const {name, value } = props;
    const [ field ] = useField(name);
    
    const configHidden = {
        ...field,
        type: "hidden"
    };

    return (
        <input {...configHidden} />
    );
};

export default FormikHidden;