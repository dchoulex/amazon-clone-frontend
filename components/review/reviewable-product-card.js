import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import ReviewProductForm from "./review-product-form";

function ReviewableProductCard(props) {
    const { product } = props;
    const [ openReviewProductForm, setOpenReviewProductForm ] = useState(false);

    const handleOpenReviewProductForm = () => {
        setOpenReviewProductForm(true)
    };

    return (
        <Card className="flex flex-col border-2 border-solid border-gray-200 w-[300px]">
            <CardMedia 
                component="img"
                src="/images/amazon-logo.png"
                sx={{
                    width: "350px",
                    height: "200px"
                }}
            />

            <CardContent className="flex flex-col">
                <Box my={1}>
                    <Typography variant="h5">
                        {product.name}
                    </Typography>
                </Box>

                <Button 
                    className="mt-4"
                    color="secondary"
                    variant="outlined"
                    onClick={handleOpenReviewProductForm}
                >
                    Review
                </Button>
            </CardContent>

            <ReviewProductForm 
                openReviewProductForm={openReviewProductForm}
                setOpenReviewProductForm={setOpenReviewProductForm}
                product={product}
            />
        </Card>
    )
};

export default ReviewableProductCard;