import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import ProductRatingStar from './product-rating-star';
import numberWithCommas from '../../utils/numberWithCommas';

function ProductCard(props) {
    const { product } = props;

    return (
        <Card className="min-w-[250px] max-w-[350px] border-gray-200 border-solid border-2 flex-col flex">
            <CardMedia 
                component="img"
                height="230"
                image="/images/amazon-logo.png"
                className="mb-10"
                alt={product.title}
            />

            <CardContent className="mb-auto">
                <Typography variant="subtitle1">
                    {product.title} 
                </Typography>

                <ProductRatingStar rating={product.ratingsAverage}/>

                <Typography 
                    variant="h6" 
                    className="text-orange-700 mt-3"
                >
                    ¥ {numberWithCommas(product.price)}
                </Typography>
            </CardContent>
            
            <CardActions>
                <Stack 
                    direction="row" 
                    ml="auto"
                    mt="1rem"
                    mb="0.5rem"
                    pr="0.5rem"
                >
                    <TextField 
                        type="number"
                        size="small"
                        defaultValue={1}
                        margin="none"
                        className="min-w-[60px] max-w-[80px]"
                    />
                    <Button 
                        variant="contained"
                        className="ml-4"
                        size="small"
                        startIcon={<AddShoppingCartIcon />}
                    >
                        Add to cart
                    </Button>
                </Stack>
            </CardActions>
        </Card>
    )
};

export default ProductCard;