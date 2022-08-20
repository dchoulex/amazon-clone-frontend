import { useFormikContext } from "formik";
import Button from "@mui/material/Button";

function FormikButton(props) {
    const { children, ...otherProps } = props;
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        ...otherProps,
        type: "submit",
        onClick: handleSubmit
    }

    return (
        <Button {...configButton}>
            {children}
        </Button>
    )
};

export default FormikButton;