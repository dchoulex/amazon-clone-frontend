import { Fragment } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MainProductCard from "./main-product-card";

const mainProducts = [
    {
        title: "Best sellers",
        subheader: "Show best selling products.",
        action: "Click here for details"
    },
    {
        title: "Find the Perfect Gift",
        subheader: "Gift recommendations from Amazon.co.jp."
    },
    {
        title: "Amazon Prime",
        subheader: "Unlimited straming of thousands of shows and books. Free expedited shipping.",
        action: "Sign up"
    },
    {
        title: "Kindle",
        subheader: "30 days free trial. Get access to over 2 million books."
    },
    {
        title: "Amazon Basic",
        subheader: "Check out amazon basic products."
    },
    {
        title: "Amazon Music",
        subheader: "30 days free trial. Get access to over 90 million songs."
    }
];

function MainProductInfo() {
    return (
        <Fragment>
            <Box className="relative z-10">
                <Grid 
                    container
                    direction="column"
                >
                    <Grid item>
                        <Grid container>
                            {mainProducts.map(product => (
                                <Grid 
                                    key={product}
                                    item
                                    xs={12}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                    className="py-3 flex justify-center"
                                >
                                    <MainProductCard product={product}/>
                                </Grid>
                            ))}        
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
};

export default MainProductInfo;