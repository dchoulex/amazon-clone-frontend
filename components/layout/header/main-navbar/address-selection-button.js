import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function AddressSelectionButton() {
    return (
        <Button className="normal-case text-white mx-4px w-max h-56px flex-none ">
            <LocationOnOutlinedIcon />
            <Box className="text-left w-max flex-col">
                <Typography className="text-zinc-400 text-sm">
                    Hello
                </Typography>
                <Typography className="text-base">
                    Select your address
                </Typography>
            </Box>
        </Button>
    )
};

export default AddressSelectionButton;