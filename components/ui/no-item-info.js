import Image from "next/image";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function NoItemInfo(props) {
    const { errorMessage, className, ...otherProps } = props;

    const configNoItemFound = {
        ...otherProps,
        className: className ? "flex justify-center " +className : "flex justify-center",
        p: 4,
        pt: 2
    }
    
    return (
        <Box {...configNoItemFound} >
            <Avatar 
                src="/images/dogs/no-item-sad-dog.jpg"
                alt=""
                sx={{ width: 120, height: 120}}
            />

            <Typography className="ml-10 flex flex-col justify-center">
                {errorMessage ? errorMessage : "No item found."}
            </Typography>
        </Box>
    )
};

export default NoItemInfo;