import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cards = [
    {
        title: "Best sellers",
        subheader: "Show best selling products.",
        action: "Click here for details"
    },
    {
        title: "Find the Perfect Gift",
        subheader: "Gift recommendations from Amazon.co.jp.",
        action: "See more"
    },
    {
        title: "Amazon Prime",
        subheader: "Unlimited straming of thousands of shows and books. Free expedited shipping.",
        action: "Sign up for prime"
    },
    {
        title: "Kindle",
        subheader: "30 days free trial. Get access to over 2 million books.",
        action: "Click here for details"
    },
    {
        title: "Amazon Basic",
        subheader: "Check out amazon basic products.",
        action: "See more"
    },
    {
        title: "Amazon Music",
        subheader: "30 days free trial. Get access to over 90 million songs.",
        action: "Click here for details"
    }
];

function ProductFeed() {
    return (
        <React.Fragment>
            <Box className="relative z-10">
                <Grid 
                    container
                    direction="column"
                >
                    <Grid item>
                        <Grid container>
                            {cards.map(card => (
                                <Grid 
                                    key={card}
                                    item
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                    className="py-3 flex justify-center"
                                >
                                    <Card className="w-[370px] relative">
                                        <CardHeader 
                                            title={card.title} 
                                            subheader={card.subheader}
                                        />
                                        <CardMedia 
                                            component="img"
                                            height="230"
                                            image="/images/amazon-logo.png"
                                            className="mb-8"
                                        />
                                        <CardActions className="absolute bottom-0">
                                            <Button className="normal-case">{card.action}</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}        
                        </Grid>
                        <Grid item>
                        </Grid>

                    </Grid>
                </Grid>
                

            </Box>
        </React.Fragment>
    )
};

export default ProductFeed;