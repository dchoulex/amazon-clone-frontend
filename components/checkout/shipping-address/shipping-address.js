import { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import SelectAddressForm from './select-address-form';
import NoItemInfo from '../../ui/no-item-info';

function ShippingAddress() {
    const [ openSelectAddressForm, setOpenSelectAddressForm ] = useState(false);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_ADDRESSES_API, fetcher);

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>

    const addresses = data.data;

    const defaultAddress = addresses.filter(address => address.isDefault)[0];

    const handleOpenSelectAddressForm = () => {
        setOpenSelectAddressForm(true)
    };

    return (
        defaultAddress ?
            <Paper className="flex p-4 border-2 border-gray-200 border-solid my-5">
                <div>
                    <Typography variant="h6">{defaultAddress.name}</Typography>

                    <Typography variant="body1">{defaultAddress.postCode}</Typography>

                    <Typography variant="body1">{defaultAddress.city}</Typography>
                    
                    <Typography variant="body1">{defaultAddress.rest}</Typography>
                </div>

                <Button 
                    variant="outlined" 
                    className="h-[30px] ml-auto" size="small"
                >
                    Change
                </Button>
            </Paper>:

            <Box className="flex">
                <NoItemInfo 
                    errorMessage="No default address found. Please input your address" 
                    className="flex-1"
                /> 

                <Button 
                    variant="outlined" 
                    className="h-[30px] ml-auto" size="small"
                    onClick={handleOpenSelectAddressForm}
                >
                    Select address
                </Button>

                <SelectAddressForm 
                    openSelectAddressForm={openSelectAddressForm}
                    setOpenSelectAddressForm={setOpenSelectAddressForm}
                    addresses={addresses}
                />
            </Box>
    )
};

export default ShippingAddress;