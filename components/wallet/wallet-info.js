import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";import axios from "axios";
import useSWR from "swr";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { walletActions } from "../../store/wallet-slice";
import WalletCard from "./wallet-card";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import getPaginatedItems from "../../utils/getPaginatedItems";
import NoItemInfo from "../ui/dogs-info/no-item-info";
import AddCreditCardForm from "./add-credit-card-form";
import CustomizedSnackbar from "../ui/customized-snackbar";
import PageSpinner from "../ui/pageSpinner";
import ErrorInfo from "../ui/dogs-info/error-info";

function WalletInfo(props) {
    const { title } = props;
    const [ openAddCreditCardForm , setOpenAddCreditCardForm ] = useState(false);
    const [ snackbarState, setSnackbarState ] = useState({
        open: false,
        type: null,
        message: null
    });

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.wallet.walletPage);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_CREDIT_CARDS_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />

    const creditCards = data.data;
    const numOfResults = data.numOfResults;
    const paginatedCreditCards = getPaginatedItems(creditCards, currentPage);

    const handleChangePage = (_, value) => {
        dispatch(walletActions.changeWalletPage({ page: value }));
    };

    const handleOpenCreditCardForm = () => {
        setOpenAddCreditCardForm(true);
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
                    onClick={handleOpenCreditCardForm}
                >
                    Add new credit card
                </Button>

                <Box px={5} my={2}>
                    <Grid container spacing={3}>
                        {paginatedCreditCards.map((card, index) => (
                            <Grid 
                                key={`credit-card-${index}`} 
                                item 
                                xs={12} 
                                md={6} 
                                lg={4} 
                                xl={3}
                                className="flex justify-center items-center"
                            >
                                <WalletCard 
                                    card={card} 
                                    setSnackbarState={setSnackbarState}
                                />
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

            <AddCreditCardForm 
                openAddCreditCardForm={openAddCreditCardForm}
                setOpenAddCreditCardForm={setOpenAddCreditCardForm}
                setSnackbarState={setSnackbarState}
            />

            <CustomizedSnackbar
                snackbarState={snackbarState}
                setSnackbarState={setSnackbarState}
            />
        </Box>
    )
};

export default WalletInfo;