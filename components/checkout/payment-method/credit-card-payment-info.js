import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { checkoutActions } from '../../../store/checkout-slice';
import NoItemInfo from '../../ui/dogs-info/no-item-info';
import SelectCreditCardDialog from './select-credit-card-dialog';
import ErrorInfo from '../../ui/dogs-info/error-info';
import PageSpinner from '../../ui/pageSpinner';

function CreditCardPaymentInfo() {
    const [ openSelectCreditCardDialog, setOpenSelectCreditCardDialog ] = useState(false);
    
    const dispatch = useDispatch();

    const creditCardUsed = useSelector(state => state.checkout.creditCard);
    const creditCardUsedIsEmptyObject = Object.keys(creditCardUsed).length === 0;

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_CREDIT_CARDS_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />

    const creditCards = data.data;

    if (creditCardUsedIsEmptyObject) {
        const defaultCreditCard = creditCards.filter(card => card.isDefault)[0];

        if (defaultCreditCard) dispatch(checkoutActions.setCreditCard({ creditCard: defaultCreditCard }));
    };

    const handleOpenSelectCreditCardDialog = () => {
        setOpenSelectCreditCardDialog(true)
    };

    const displayedCreditCardType = !creditCardUsedIsEmptyObject && creditCardUsed.type[0].toUpperCase() + creditCardUsed.type.slice(1);
    const displayedCreditCardNumber = !creditCardUsedIsEmptyObject && "ending in ..." + creditCardUsed.number.slice(creditCardUsed.number.length - 4);
    const displayedCreditCardExpiratiionDate = !creditCardUsedIsEmptyObject && creditCardUsed.expirationDate.split("T")[0];

    return (
        Object.keys(creditCardUsed).length !== 0 ?
            <Paper className="flex p-4 border-2 border-gray-200 border-solid my-5">
                <div>
                    <Typography variant="h6" className="pb-2">
                        {displayedCreditCardType}
                    </Typography>

                    <Typography variant="body1">
                        {creditCardUsed.name}
                    </Typography>

                    <Typography variant="body1">
                        {displayedCreditCardNumber}
                    </Typography>
                    
                    <Typography variant="body1">
                        {displayedCreditCardExpiratiionDate}
                    </Typography>
                </div>

                <Button 
                    variant="outlined" 
                    className="h-[30px] ml-auto" 
                    size="small"
                    onClick={handleOpenSelectCreditCardDialog}
                >
                    Change
                </Button>

                <SelectCreditCardDialog 
                    openSelectCreditCardDialog={openSelectCreditCardDialog}
                    setOpenSelectCreditCardDialog={setOpenSelectCreditCardDialog}
                    creditCards={creditCards}
                    creditCardUsed={creditCardUsed}
                />
            </Paper>:

            <Box className="flex">
                <NoItemInfo 
                    errorMessage="No default address found. Please input your address" 
                    className="flex-1"
                /> 

                <Button 
                    variant="outlined" 
                    className="h-[30px] ml-auto" size="small"
                    onClick={handleOpenSelectCreditCardDialog}
                >
                    Select
                </Button>

                <SelectCreditCardDialog 
                    openSelectCreditCardDialog={openSelectCreditCardDialog}
                    setOpenSelectCreditCardDialog={setOpenSelectCreditCardDialog}
                    creditCards={creditCards}
                    creditCardUsed={creditCardUsed}
                />
            </Box>
    )
};

export default CreditCardPaymentInfo;