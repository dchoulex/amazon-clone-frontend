import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function AddressSelectionButton(props) {
    const { defaultAddressPostCode, defaultAddressLine } = props;

    const addressLineClass = defaultAddressLine.length > 35 ? "text-sm" : "text-base";

    return (
        <Link href="/account/address">
            <Button className="normal-case text-white mx-1 h-56px">
                <LocationOnOutlinedIcon />

                <Box className="text-left flex-col ml-2">
                    <Typography className="text-zinc-400 text-sm">
                        {defaultAddressPostCode}
                    </Typography>

                    <Typography className={addressLineClass}>
                        {defaultAddressLine.length > 35 ? 
                            defaultAddressLine.slice(0, 35) + "..." :
                            defaultAddressLine
                        }
                    </Typography>
                </Box>
            </Button>
        </Link>
    )
};

export default AddressSelectionButton;