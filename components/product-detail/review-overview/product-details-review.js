import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProductRatingStar from '../../product/product-rating-star';
import ReviewOverviewItemList from './review-overview-item-list';

function ProductDetailsReview(props) {
    const { ratingsAverage, ratingsQuantity, reviews } = props;

    return (
        <Box py={2} px={1}>
            <ProductRatingStar 
                ratingsAverage={ratingsAverage}
                ratingsQuantity={ratingsQuantity}
            />
                
            <Box px={5} my={2}>
                <Grid container spacing={3}>
                    {reviews.map((review, index) => (
                        <Grid 
                            key={`review-card-${index}`} 
                            item 
                            xs={12} 
                            className="flex justify-center items-center"
                        >
                            <ReviewOverviewItemList review={review} />
                        </Grid>
                    ))}   
                </Grid>
            </Box>
        </Box>
    )
};

export default ProductDetailsReview;