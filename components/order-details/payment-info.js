import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PaymentInfo(props) {
    const { paymentMethod, creditCard, pointUsed } = props;

    let displayedCreditCardInfo;

    if (paymentMethod === "credit") {
        displayedCreditCardInfo = {
            type: creditCard.type[0].toUpperCase() + creditCard.type.slice(1),
            name: creditCard.user.name,
            number: "ending in ..." + creditCard.number.slice(creditCard.number.length - 4)
        };
    }

    return (
        <Box>
            {paymentMethod === "credit" &&
                <Box mb={1}>
                    <Typography className="text-lg">
                        {displayedCreditCardInfo.type}
                    </Typography>

                    <Typography className="text-base">
                        {displayedCreditCardInfo.name}
                    </Typography>

                    <Typography className="text-base">
                        {displayedCreditCardInfo.number}
                    </Typography>
                </Box>
            }

            <Typography>
                Point used: <span className="text-orange-500">{pointUsed}</span> pt
            </Typography>
        </Box>
    );
};

export default PaymentInfo;