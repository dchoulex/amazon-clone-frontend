import Typography from '@mui/material/Typography';

function ErrorMessage(props) {
    const { errorMessage, className, ...otherProps } = props;

    const configErrorMessage = {
        ...otherProps,
        variant: "body2",
        className: className ? "text-red-500 " + className : "text-red-500"
    };

    return (
        <Typography {...configErrorMessage}>
            {errorMessage}
        </Typography>
    )
};

export default ErrorMessage;