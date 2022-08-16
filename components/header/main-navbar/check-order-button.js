import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListAltIcon from '@mui/icons-material/ListAlt';

function CheckOrderButton() {
    return (
        <Button className="normal-case text-white h-56px flex-none">
            <ListAltIcon />

            <Box className="text-left pl-2 flex-col ml-1">
                <Typography className="text-zinc-400 text-sm">
                    Returns &amp;
                </Typography>

                <Typography className="text-base">
                    Orders
                </Typography>
            </Box>
        </Button>
    )
};

export default CheckOrderButton;