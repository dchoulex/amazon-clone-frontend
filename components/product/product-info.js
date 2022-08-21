import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ProductCard from "./product-card";

function ProductInfo(props) {
    const { products } = props;
    
    return (
        <Box className="pt-5 mb-2">
            <Grid container>
                {products.map((product, index) => (
                    <Grid 
                        key={`product-card-${index}`}
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        xl={3}
                        className="py-3 flex justify-center"
                    >    
                        <ProductCard product={product}/>  
                    </Grid>                     
                ))}        
            </Grid>
        </Box>
    )
};

export default ProductInfo;