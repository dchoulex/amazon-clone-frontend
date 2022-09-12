import { Fragment } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import getAPI from "../../utils/getAPI";

function WalletCard(props) {
    const { card, setSnackbarState } = props;
    const displayedCardNumber = "ending in ..." + card.number.slice(card.number.length - 4);
    const displayedExpirationDate = card.expirationDate.split("-").slice(0, 2).join(" / ");
    const displayedCreditCardType = card.type[0].toUpperCase() + card.type.slice(1);

    const DELETE_CREDIT_CARD_API = getAPI(process.env.NEXT_PUBLIC_DELETE_CREDIT_CARD_API, { id: card._id });
    const SET_CREDIT_CARD_AS_DEFAULT_API = getAPI(process.env.NEXT_PUBLIC_SET_CREDIT_CARD_AS_DEFAULT_API, { id: card._id });

    const handleRemoveCreditCard = async () => {
        try {
            const res = await axios.delete(DELETE_CREDIT_CARD_API);

            if (res.status === 204) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully delete item."
                });
            } 
        } catch(err) {
            if (err) {
                setSnackbarState({ 
                    open: true , 
                    type: "error", 
                    message: "Oops... Something went wrong."
                });
            }
        }
    };

    const handleSetAsDefault = async () => {
        try {
            const res = await axios.patch(SET_CREDIT_CARD_AS_DEFAULT_API);

            if (res.status === 200) {
                setSnackbarState({ 
                    open: true, 
                    type: "success", 
                    message: "Successfully set credit card as default."
                });
            } 
        } catch(err) {
            if (err) {
                setSnackbarState({ 
                    open: true , 
                    type: "error", 
                    message: "Oops... Something went wrong."
                });
            }
        }
    };

    return (
        <Card className="border-2 border-solid border-gray-200 w-[350px] h-[300px] flex flex-col">
            <Box 
                p={2} 
                className="flex items-center"
            >
                <CardHeader 
                    title={displayedCreditCardType} 
                    className="p-0"
                />

                {card.isDefault &&
                    <Chip 
                        label="DEFAULT"
                        color="primary"
                        className="ml-auto mr-4"
                    />
                }
            </Box>

            <Divider sx={{borderColor: "gray"}} />

            <CardContent>
                <Typography variant="h5">
                    {card.name}
                </Typography>

                <Grid container orientation="column">
                    <Grid item container className="mb-1 mt-4">
                        <Grid item xs={6}>
                            <Typography variant="body1" className="font-bold">
                                Card number :
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="body1">
                                {displayedCardNumber}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container className="mb-1 my-1">
                        <Grid item xs={6}>
                            <Typography variant="body1" className="font-bold">
                                Expiration date :
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="body1">
                                {displayedExpirationDate}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions className="mt-auto">
                <Button onClick={handleRemoveCreditCard}>Remove</Button>

                {!card.isDefault && (
                    <Fragment>
                        <Divider 
                            orientation="vertical"
                            variant="middle" 
                            flexItem 
                        />

                        <Button onClick={handleSetAsDefault}>Set as default</Button>
                    </Fragment>
                )}
            </CardActions>
        </Card>
    )
};

export default WalletCard;