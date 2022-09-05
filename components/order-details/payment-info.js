import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PaymentInfo(props) {
    const { paymentMethod, creditCard, amazonPoints } = props;

    let paymentInfo;

    switch(paymentMethod) {
        case "Credit Card":
            let displayedCreditCardInfo;
    
            displayedCreditCardInfo = {
                type: creditCard.type[0].toUpperCase() + creditCard.type.slice(1),
                name: creditCard.user.name,
                number: "ending in ..." + creditCard.number.slice(creditCard.number.length - 4)
            };

            paymentInfo = (
                <Box>
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
            );
            break;
        
        case "Amazon Points":
            paymentInfo = (
                <Box>
                    <Typography>
                        Point used: {amazonPoints}
                    </Typography>
                </Box>
            );
            break;
    }

    return paymentInfo;
};

export default PaymentInfo;