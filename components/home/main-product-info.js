import { Fragment } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import MainProductCard from "./main-product-card";

const mainProducts = [
    {
        title: "All products",
        subheader: "Search all products.",
        action: "Search",
        imageName: "all-products.png",
        href: "/products/all/products"
    },
    {
        title: "Best sellers",
        subheader: "Show top 10 best seller products.",
        action: "Check it out",
        imageName: "best-sellers.png",
        href: "/products/best/sellers"
    },
    {
        title: "Best review",
        subheader: "Show top 10 best review products.",
        action: "Check it out",
        imageName: "best-review.png",
        href: "/products/best/review"
    },
    {
        title: "Recommended for you",
        subheader: "Show recommended products based on top 3 most frequently bought item categories.",
        action: "Check it out",
        imageName: "recommended-for-you.png",
        href: "/products/recommended/for/you"
    },
    {
        title: "Buy Again",
        subheader: "Show products that you have ordered in past.",
        action: "See more",
        imageName: "buy-again.png",
        href: "/products/buy/again"
    },
    // {
    //     title: "Amazon Prime",
    //     subheader: "Free expedited shipping.",
    //     action: "Sign up",
    //     imageName: "amazon-prime.png"
    // },
];

function MainProductInfo() {
    return (
        <Fragment>
            <Box className="relative z-10 pb-10">   
                <Grid item container>
                    {mainProducts.map((product, index) => (
                        <Grid 
                            key={`product-${index}`}
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            xl={3}
                            className="py-3 flex justify-center"
                        >
                            <MainProductCard 
                                title={product.title}
                                subheader={product.subheader}
                                action={product.action}
                                imagePath={`/images/icons/${product.imageName}`}
                                href={product.href}
                            />
                        </Grid>
                    ))}      
                </Grid>
            </Box>
        </Fragment>
    )
};

export default MainProductInfo;