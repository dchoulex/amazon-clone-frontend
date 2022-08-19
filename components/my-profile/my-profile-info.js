import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import PageTitle from "../ui/page-title/page-title";

function MyProfileInfo(props) {
    const {title} = props;
    const numberOfPages = 4;
    const [ openAddressDialog, setOpenAddressDialog ] = useState(false);

    const handleOpenAddressDialog = () => {
        setOpenAddressDialog(true);
    };
    return (
        <Box>
        <Paper className="bg-white">
            <PageTitle title={title} />

            <Divider className="border-gray-400 mb-5"/>

            <Button 
                variant="contained"
                className="ml-5 mb-4"
                size="small"
                startIcon={<ControlPointIcon />}
                onClick={handleOpenAddressDialog}
            >
                Add new address
            </Button>


        </Paper>
        </Box>
    )
};

export default MyProfileInfo;