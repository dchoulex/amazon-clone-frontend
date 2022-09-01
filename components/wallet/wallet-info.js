import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import NoItemInfo from "../ui/no-item-info";
import AddCreditCardForm from "./add-credit-card-form";

function WalletInfo(props) {
    const { title, creditCards } = props;
    const [ openCreditCardForm , setOpenCreditCardForm ] = useState(false);
    const dispatch = useDispatch();

    const numOfResults = creditCards.length;
    const currentPage = useSelector(state => state.wallet.walletPage);
    const paginatedCreditCards = getPaginatedItems(creditCards, currentPage);

    const handleChangePage = (_, value) => {
        dispatch(walletActions.changeWalletPage({ page: value }));
    };

    const handleOpenCreditCardForm = () => {
        setOpenCreditCardForm(true);
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
                                <WalletCard card={card} />
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
                openCreditCardForm={openCreditCardForm}
                setOpenCreditCardForm={setOpenCreditCardForm}
            />
        </Box>
    )
};

export default WalletInfo;