import { useState } from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ReviewProductForm from "./review-product-form";

function ReviewableProductCard(props) {
    const { product, setDataIsChanging } = props;
    const [ openReviewProductForm, setOpenReviewProductForm ] = useState(false);

    const handleOpenReviewProductForm = () => {
        setOpenReviewProductForm(true)
    };

    return (
        <Card className="flex flex-col border-2 border-solid border-gray-200 w-[300px] min-h-[400px]">
            <Box mx="auto" mt={2}>
                <Image 
                    src={`/images/products/${product.slug}/${product.images[0]}`}
                    width={200}
                    height={220}
                    alt={product.name}
                />
            </Box>

            <CardContent className="flex flex-col flex-1">
                <Box my={1}>
                    <Typography variant="h5">
                        {product.name}
                    </Typography>
                </Box>

                <Button 
                    className="mt-auto"
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
                setDataIsChanging={setDataIsChanging}
            />
        </Card>
    )
};

export default ReviewableProductCard;