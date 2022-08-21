import { useField } from "formik";

function FormikHidden(props) {
    const {name } = props;
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