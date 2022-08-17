import Link from "next/link";
import Box from "@mui/material/Box";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';

function AddressBreadcrumbs() {
    return (
        <Box mb={2}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="/account">
                    <Chip 
                        clickable
                        label="Your Account"
                        size="small"
                        icon={<PersonIcon fontSize="small"/>}
                    />
                </Link>

                <Link href="#">
                    <Chip 
                        clickable
                        label="Your Addresses"
                        size="small"
                        color="secondary"
                    />
                </Link>
            </Breadcrumbs>
        </Box>     
    )
};

export default AddressBreadcrumbs;