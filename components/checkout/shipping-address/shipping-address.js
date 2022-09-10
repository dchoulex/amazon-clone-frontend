import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import useSWR from 'swr';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { checkoutActions } from '../../../store/checkout-slice';
import SelectAddressDialog from './select-address-dialog';
import NoItemInfo from '../../ui/no-item-info';

function ShippingAddress(props) {
    const { handleNext } = props;
    const dispatch = useDispatch();

    const shippingAddress = useSelector(state => state.checkout.shippingAddress);
    const [ openSelectAddressDialog, setOpenSelectAddressDialog ] = useState(false);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_ADDRESSES_API, fetcher);

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>

    const addresses = data.data;

    if (Object.keys(shippingAddress).length === 0) {
        const defaultAddress = addresses.filter(address => address.isDefault)[0];

        if (defaultAddress) dispatch(checkoutActions.setShippingAddress({ shippingAddress: defaultAddress}));
    };

    const handleOpenSelectAddressDialog = () => {
        setOpenSelectAddressDialog(true)
    };

    return (
        <Fragment>
            <Paper className="flex p-4 border-2 border-gray-200 border-solid my-5">
                {Object.keys(shippingAddress).length !== 0 ?
                    <Fragment>
                        <div>
                            <Typography variant="h6" className="pb-2">{shippingAddress.name}</Typography>
    
                            <Typography variant="body1">
                                {shippingAddress.postCode}
                            </Typography>
    
                            <Typography variant="body1">
                                {shippingAddress.city}
                            </Typography>
                            
                            <Typography variant="body1">
                                {shippingAddress.rest}
                            </Typography>
    
                            <Typography>
                                {shippingAddress.country}
                            </Typography>
                        </div>
    
                        <Button 
                            variant="outlined" 
                            className="h-[30px] ml-auto" 
                            size="small"
                            onClick={handleOpenSelectAddressDialog}
                        >
                            Change
                        </Button>
    
                        <SelectAddressDialog 
                            openSelectAddressDialog={openSelectAddressDialog}
                            setOpenSelectAddressDialog={setOpenSelectAddressDialog}
                            addresses={addresses}
                            shippingAddress={shippingAddress}
                        />
                    </Fragment> :

                    <Box className="flex">
                        <NoItemInfo 
                            errorMessage="No default address found. Please input your address" 
                            className="flex-1"
                        /> 

                        <Button 
                            variant="outlined" 
                            className="h-[30px] ml-auto" size="small"
                            onClick={handleOpenSelectAddressDialog}
                        >
                            Select
                        </Button>

                        <SelectAddressDialog 
                            openSelectAddressDialog={openSelectAddressDialog}
                            setOpenSelectAddressDialog={setOpenSelectAddressDialog}
                            addresses={addresses}
                            shippingAddress={shippingAddress}
                        />
                    </Box>
                }
            </Paper>

            <Stack direction="row" spacing={2} >            
                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ height: "40px" }}
                    disabled={Object.keys(shippingAddress).length === 0}
                >
                    Next
                </Button>
            </Stack> 
        </Fragment>
    )
};

export default ShippingAddress;