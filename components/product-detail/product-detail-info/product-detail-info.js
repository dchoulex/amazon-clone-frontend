import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import BuyProductBox from "./buy-product-box";
import ActiveProductImage from "./active-product-image";
import ProductDescription from "./product-description";

function ProductDetailInfo(props) {
    const { activeImage, description, title, isMediumScreenDown, stock, price } = props;

    return (
        <Box className="pt-5 px-10">
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
                {!isMediumScreenDown ?
                    null:
                    <Grid item>
                        <BuyProductBox
                            stock={stock}
                            price={price} 
                        />
                    </Grid>
                }
            </Grid>
        </Box>
    )
};

export default ProductDetailInfo;