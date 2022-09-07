import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import axios from "axios";

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
    const { title } = props;
    const dispatch = useDispatch();
    
    const [ openAddAddressForm, setOpenAddAddressForm ] = useState(false);
    
    const currentPage = useSelector(state => state.address.addressPage);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_ADDRESSES_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>

    const addresses = data.data;
    const numOfResults = data.numOfResults;
    const paginatedAddresses = getPaginatedItems(addresses, currentPage);

    const handleChangePage = (_, value) => {
        dispatch(addressActions.changeAddressPage({ page: value }));
    };

    const handleOpenAddAddressDialog = () => {
        setOpenAddAddressForm(true);
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
                    onClick={handleOpenAddAddressDialog}
                >
                    Add new address
                </Button>

                <AddAddressForm 
                    openAddAddressForm={openAddAddressForm}
                    setOpenAddAddressForm={setOpenAddAddressForm}
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