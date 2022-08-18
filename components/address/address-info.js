import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import AddressCard from "./address-card";
import AddAddressForm from "./add-address-form";

function AddressInfo(props) {
    const { title, addresses } = props;
    const numberOfPages = 4;

    const [ openAddressDialog, setOpenAddressDialog ] = useState(false);

    const [ country, setCountry ] = useState("Japan");

    const handleOpenAddressDialog = () => {
        setOpenAddressDialog(true);
    };

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 300
            }
        },
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

                <AddAddressForm 
                    country={country}
                    setCountry={setCountry}
                    openAddressDialog={openAddressDialog}
                    setOpenAddressDialog={setOpenAddressDialog}
                />

                <Box px={5} my={2}>
                    <Grid container spacing={3}>
                        {addresses.map((address, index) => (
                            <Grid 
                                key={`address-card-${index}`} 
                                item 
                                xs={12} 
                                md={6} 
                                lg={4} 
                                xl={3}
                                className="flex justify-center items-center"
                            >
                                <AddressCard address={address} />
                            </Grid>
                        ))}   
                    </Grid>
                </Box>

    
                <PaginationButtons numberOfPages={numberOfPages} />
            </Paper>
        </Box>
    )
};

export default AddressInfo;