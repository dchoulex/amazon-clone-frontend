import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import axios from "axios";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import getAPI from '../../utils/getAPI';
import { checkoutActions } from '../../store/checkout-slice';

function ShippingMethod() {
    const shippingAddress = useSelector(state => state.checkout.shippingAddress);
    const dispatch = useDispatch();

    const GET_SHIPPING_COST_API = getAPI(process.env.NEXT_PUBLIC_GET_SHIPPING_COST_API, { id: shippingAddress._id });

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(GET_SHIPPING_COST_API, fetcher);

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>

    const shippingCost = data.data;

    const displayedStandardShippingCost = shippingCost.standardShippingCost;
    const displayedExpeditedShippingCost = shippingCost.expeditedShippingCost;

    const handleOnChange = event => {
        dispatch(checkoutActions.setShippingMethod({ shippingMethod: event.target.value }))
    };

    return (
        <FormControl className="pl-1 my-4">
            <RadioGroup
                defaultValue="standard"
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
    );
};

export default ShippingMethod;