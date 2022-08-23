import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function NoItemInfo() {
    return (
        <Box p={4} pt={2} className="flex justify-center" box={{borderTop: "none"}}>
            <Avatar 
                src="/images/dogs/no-item-sad-dog.jpg"
                alt=""
                sx={{ width: 120, height: 120}}
            />

            <Typography className="ml-10 flex flex-col justify-center">
                No item found.
            </Typography>
        </Box>
    )
};

export default NoItemInfo;