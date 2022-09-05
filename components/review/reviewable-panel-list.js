import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ReviewableProductCard from "./reviewable-product-card";

function ReviewablePanelList(props) {
    const { items } = props;
    
    return (
        <Box px={5} my={2}>
            <Grid container spacing={3}>
                {items.map((item, index) => {
                    const { product } = item;

                    return (
                        <Grid 
                            key={`review-card-${index}`} 
                            item 
                            xs={3} 
                            className="flex justify-center items-center"
                        >
                            <ReviewableProductCard product={product} />
                        </Grid>
                    )
                })}   
            </Grid>
        </Box>
    )
};

export default ReviewablePanelList;