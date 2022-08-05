import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function CheckOrderButton() {
    return (
        <Button className="normal-case text-white mx-4px w-max h-56px flex-none ">
            <LocationOnOutlinedIcon />
            <Box className="text-left w-max flex-col">
                <Typography className="text-zinc-400 text-sm">
                    Returns &
                </Typography>
                <Typography className="text-base">
                    Orders
                </Typography>
            </Box>
        </Button>
    )
};

export default CheckOrderButton;