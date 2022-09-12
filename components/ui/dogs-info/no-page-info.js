import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function NoPageInfo() {
    return (
        <Box className="flex justify-center p-10">
            <Avatar 
                src="/images/dogs/no-page-found-dog.jpg"
                alt=""
                sx={{ width: 120, height: 120}}
            />

            <Typography className="ml-10 flex flex-col justify-center">
                Oops... The page you are looking couldn&apos;t be found.
            </Typography>
        </Box>
    )
};

export default NoPageInfo;