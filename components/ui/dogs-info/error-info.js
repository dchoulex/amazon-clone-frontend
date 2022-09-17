import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function ErrorInfo(props) {
    const { errorMessage } = props;

    return (
        <Box className="flex justify-center p-4" >
            <Avatar 
                src="/images/dogs/error-dog.jpg"
                alt=""
                sx={{ width: 120, height: 120}}
            />

            <Typography className="ml-10 flex flex-col justify-center">
                {errorMessage ? errorMessage : "Oh no! Something went wrong. Please try again later."}
            </Typography>
        </Box>
    )
};

export default ErrorInfo;