import { Fragment } from "react";
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

function WalletCard(props) {
    const { card } = props;
    const displayedCardNumber = "ending in ..." + card.number.slice(card.number.length - 4);

    return (
        <Card className="border-2 border-solid border-gray-200 w-[350px] h-[300px] flex flex-col">
            <Box 
                p={2} 
                className="flex items-center"
            >
                <CardHeader 
                    title={card.type} 
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
                    {card.userName}
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
                                {card.expirationDate}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions className="mt-auto">
                <Button>Edit</Button>

                <Divider 
                    orientation="vertical"
                    variant="middle" 
                    flexItem 
                />

                <Button>Remove</Button>

                {!card.isDefault && (
                    <Fragment>
                        <Divider 
                            orientation="vertical"
                            variant="middle" 
                            flexItem 
                        />

                        <Button>Set as default</Button>
                    </Fragment>
                )}
            </CardActions>
        </Card>
    )
};

export default WalletCard;