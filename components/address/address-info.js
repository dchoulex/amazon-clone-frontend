import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { addressActions } from "../../store/address-slice";
import getPaginatedItems from "../../utils/getPaginatedItems";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import AddressCard from "./address-card";
import AddAddressForm from "./add-address-form";
import NoItemInfo from "../ui/no-item-info";

function AddressInfo(props) {
    const { title, addresses } = props;
    const dispatch = useDispatch();
    const [ openAddressDialog, setOpenAddressDialog ] = useState(false);

    const numOfResults = addresses.length;
    const currentPage = useSelector(state => state.address.addressPage);
    const paginatedAddresses = getPaginatedItems(addresses, currentPage);

    const handleChangePage = (_, value) => {
        dispatch(addressActions.changeAddressPage({ page: value }));
    };

    const handleOpenAddressDialog = () => {
        setOpenAddressDialog(true);
    };

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle 
                    title={title} 
                    numOfResults={numOfResults}
                />

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
                    openAddressDialog={openAddressDialog}
                    setOpenAddressDialog={setOpenAddressDialog}
                />

                <Box px={5} my={2}>
                    <Grid container spacing={3}>
                        {paginatedAddresses.map((address, index) => (
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
    
                {numOfResults === 0 ?
                    <NoItemInfo /> :
                    <PaginationButtons 
                        numOfResults={numOfResults} 
                        page={currentPage}
                        onChange={handleChangePage}
                    />
                }
            </Paper>
        </Box>
    )
};

export default AddressInfo;