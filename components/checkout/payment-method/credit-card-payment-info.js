import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { checkoutActions } from '../../../store/checkout-slice';
import NoItemInfo from '../../ui/dogs-info/no-item-info';
import SelectCreditCardDialog from './select-credit-card-dialog';

function CreditCardPaymentInfo() {
    const dispatch = useDispatch();
    
    const [ openSelectCreditCardDialog, setOpenSelectCreditCardDialog ] = useState(false);

    const creditCardUsed = useSelector(state => state.checkout.creditCard);
    const defaultCreditCard = useSelector(state => state.user.defaultCreditCard);

    const creditCardUsedIsEmptyObject = Object.keys(creditCardUsed).length === 0;
    const defaultCreditCardIsEmptyObject = Object.keys(defaultCreditCard).length === 0

    if (creditCardUsedIsEmptyObject && !defaultCreditCardIsEmptyObject) dispatch(checkoutActions.setCreditCard({ creditCard: creditCardUsed }));

    const displayedCreditCardType = !creditCardUsedIsEmptyObject && creditCardUsed.type[0].toUpperCase() + creditCardUsed.type.slice(1);
    const displayedCreditCardNumber = !creditCardUsedIsEmptyObject && "ending in ..." + creditCardUsed.number.slice(creditCardUsed.number.length - 4);
    const displayedCreditCardExpiratiionDate = !creditCardUsedIsEmptyObject && creditCardUsed.expirationDate.split("T")[0];

    // const fetcher = url => axios.get(url).then(res => res.data);

    // const { data, error, isValidating } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_CREDIT_CARDS_API, fetcher, { refreshInterval: 1000 });

    // if (!data) return <PageSpinner />
    // if (error) return <ErrorInfo />

    // const creditCards = data.data;

    // if (!isValidating && dataIsChanging && !snackbarIsOpen) {
    //     dispatch(snackbarActions.setSnackbarState({
    //         open: true,
    //         type: "info",
    //         message: "Revalidating..."
    //     }));
    // };
    
    // if (isValidating && dataIsChanging) {
    //     setDataIsChanging(false);
    
    //     dispatch(snackbarActions.closeSnackbar());
    
    //     setIsRequesting(false);
    // };

    // if (creditCardUsedIsEmptyObject) {
    //     const defaultCreditCard = creditCards.filter(card => card.isDefault)[0];

    //     if (defaultCreditCard) dispatch(checkoutActions.setCreditCard({ creditCard: defaultCreditCard }));
    // };

    const handleOpenSelectCreditCardDialog = () => {
        setOpenSelectCreditCardDialog(true)
    };

    return (
        <Paper className="flex p-4 border-2 border-gray-200 border-solid my-5">
            {!defaultCreditCardIsEmptyObject ?
                <Fragment>
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
                        creditCardUsed={creditCardUsed}
                    />
                </Fragment> :

                <Box className="flex flex-1">
                    <NoItemInfo 
                        errorMessage="No default credit card found. Please input your credit card" 
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
                        creditCardUsed={creditCardUsed}
                    />
                </Box>
            }
        </Paper>
    )
};

export default CreditCardPaymentInfo;