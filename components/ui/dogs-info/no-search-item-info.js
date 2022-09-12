import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function NoSearchItemInfo(props) {
    const { errorMessage, className, ...otherProps } = props;

    const configNoItemFound = {
        ...otherProps,
        className: className ? "flex justify-center " +className : "flex justify-center",
        p: 8
    }
    
    return (
        <Box {...configNoItemFound} >
            <Avatar 
                src="/images/dogs/no-search-item-found-dog.jpeg"
                alt=""
                sx={{ width: 120, height: 120 }}
            />

            <Typography className="ml-10 flex flex-col justify-center text-lg">
                Oops... we don&apos;t have that item yet
            </Typography>
        </Box>
    )
};

export default NoSearchItemInfo;