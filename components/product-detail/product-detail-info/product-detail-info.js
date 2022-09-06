import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import BuyProductBox from "./buy-product-box";
import ActiveProductImage from "./active-product-image";
import ProductDescription from "./product-description";
import ProductDetailsReview from '../review-overview/product-details-review';

function ProductDetailInfo(props) {
    const { activeImage, description, title, isMediumScreenDown, stock, price, ratingsAverage, ratingsQuantity, reviews } = props;

    return (
        <Box className="pt-5 px-5">
            <Grid container className="flex flex-col">
                <Grid 
                    item
                    container 
                    className="flex justify-center"
                >
                    <Grid 
                        item
                        xm={12}
                        lg={6}
                    >
                        <ActiveProductImage />
                    </Grid>

                    <Grid 
                        item
                        xm={12}
                        lg={6}
                    >
                        <ProductDescription
                            title={title} 
                            description={description}
                        />
                    </Grid>
                </Grid>
                
                {isMediumScreenDown &&
                    <Grid item>
                        <BuyProductBox
                            stock={stock}
                            price={price} 
                        />
                    </Grid>
                }

                <Divider />

                <Grid item>
                    <ProductDetailsReview 
                        ratingsAverage={ratingsAverage}
                        ratingsQuantity={ratingsQuantity}
                        reviews={reviews}
                    />
                </Grid>
            </Grid>
        </Box>
    )
};

export default ProductDetailInfo;