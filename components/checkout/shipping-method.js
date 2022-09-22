import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import useSWR from 'swr';
import axios from "axios";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { checkoutActions } from '../../store/checkout-slice';
import getAPI from '../../utils/getAPI';
import PageSpinner from '../ui/pageSpinner';
import ErrorInfo from '../ui/dogs-info/error-info';

function ShippingMethod(props) {
    const { handleBack, handleNext, setShippingMethodIsSelected } = props;
    const dispatch = useDispatch();

    const shippingAddress = useSelector(state => state.checkout.shippingAddress);
    const orderShippingCost = useSelector(state => state.checkout.shippingCost);
    const shippingMethod = useSelector(state => state.checkout.shippingMethod)

    const GET_SHIPPING_COST_API = getAPI(process.env.NEXT_PUBLIC_GET_SHIPPING_COST_API, { id: shippingAddress._id });

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(GET_SHIPPING_COST_API, fetcher);

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />

    const shippingCost = data.data;

    const displayedStandardShippingCost = shippingCost.standardShippingCost;
    const displayedExpeditedShippingCost = shippingCost.expeditedShippingCost;

    if (!orderShippingCost && shippingMethod === "standard") dispatch(checkoutActions.setShippingCost({ shippingCost: shippingCost.standardShippingCost }));

    if (!orderShippingCost && shippingMethod === "expedited") dispatch(checkoutActions.setShippingCost({ shippingCost: shippingCost.expeditedShippingCost }));

    const handleOnChange = event => {
        const shippingMethod = event.target.value;

        dispatch(checkoutActions.setShippingMethod({ shippingMethod }));

        if (shippingMethod === "standard") {
            dispatch(checkoutActions.setShippingCost({ shippingCost: shippingCost.standardShippingCost }))
        } else {
            dispatch(checkoutActions.setShippingCost({ shippingCost: shippingCost.expeditedShippingCost }))
        };

        setShippingMethodIsSelected(true);
    };

    const handleClickNext = () => {
        handleNext();

        setShippingMethodIsSelected(true);
    };

    return (
        <Fragment>
            <FormControl className="pl-1 my-4">
                <RadioGroup
                    value={shippingMethod}
                    name="radio-buttons-group"
                    onChange={handleOnChange}
                >
                    <FormControlLabel 
                        value="standard" 
                        control={<Radio />} 
                        label={`Standard Shipping (+ ${displayedStandardShippingCost})`} 
                    />

                    <FormControlLabel 
                        value="expedited" 
                        control={<Radio />} 
                        label={`Expedited Shipping (+ ${displayedExpeditedShippingCost})`} 
                    />
                </RadioGroup>
            </FormControl>

            <Stack direction="row" spacing={2} >            
                <Button
                    variant="contained"
                    onClick={handleClickNext}
                    sx={{ height: "40px" }}
                >
                    Next
                </Button>

                <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ height: "40px" }}
                >
                    Back
                </Button>    
            </Stack>                        
        </Fragment>
    );
};

export default ShippingMethod;