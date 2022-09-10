import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import { checkoutActions } from "../../../store/checkout-slice";

function SelectCreditCard(props) {
    const { creditCard, creditCardUsed, setOpenSelectCreditCardDialog } = props;
    const dispatch = useDispatch();

    const creditCardIsEmptyObject = Object.keys(creditCard).length === 0;

    const displayedCreditCardName = !creditCardIsEmptyObject && creditCard.name;
    const displayedCreditCardType = !creditCardIsEmptyObject && creditCard.type[0].toUpperCase() + creditCard.type.slice(1);
    const displayedCreditCardNumber = !creditCardIsEmptyObject && "ending in ..." + creditCard.number.slice(creditCard.number.length - 4);
    const displayedCreditCardExpiratiionDate = !creditCardIsEmptyObject && creditCard.expirationDate.split("T")[0];

    const handleSelectCreditCard = () => {
        dispatch(checkoutActions.setCreditCard({ creditCard }));

        setOpenSelectCreditCardDialog(false);
    };

    return (
        <Card 
            sx={{
                border: 1,
                borderColor: "#D3D3D3",
                width: "350px",
                height: "280px",
                display: "flex",
                flexDirection: "column",
            }}
            className="border-2 border-solid border-gray-500"
        >
            <Box 
                p={2} 
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <CardHeader 
                    title={displayedCreditCardType} 
                    sx={{ p: 0 }}
                />

                {creditCard.isDefault &&
                    <Chip 
                        label="DEFAULT"
                        color="primary"
                        sx={{
                            ml: "auto",
                            mr: 1
                        }}
                    />
                }
            </Box>

            <Divider sx={{ borderColor: "gray" }} />

            <CardContent>
                <Typography variant="body1">
                    {displayedCreditCardName}
                </Typography>

                <Typography variant="body1">
                    {displayedCreditCardNumber}
                </Typography>
                
                <Typography variant="body1">
                    {displayedCreditCardExpiratiionDate}
                </Typography>
            </CardContent>

            <CardActions sx={{ mt: "auto" }}>
                {creditCard._id !== creditCardUsed._id && 
                    <Button onClick={handleSelectCreditCard}>Select</Button>
                }
            </CardActions>
        </Card>
    )
};

export default SelectCreditCard;