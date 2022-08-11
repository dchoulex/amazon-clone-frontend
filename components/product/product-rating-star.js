import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

function ProductRatingStar(props) {
    const { rating } = props;

    const labels = {
        0: 'No review',
        0.5: 'Not good',
        1: 'Bad',
        1.5: 'Poor',
        2: 'Not bad',
        2.5: 'Ok',
        3: 'Good',
        3.5: 'Very good',
        4: 'Great',
        4.5: 'Excellent',
        5: 'Perfect'
    };

    return (
        <Box className="flex">
            <Rating 
                name="product-rating" 
                value={rating} 
                precision={0.5}
                size="medium" 
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                readOnly
            />
                <Box sx={{ ml: 2, my: "auto"}}>
                    {labels[rating]}
                </Box>
        </Box>
    )
};

export default ProductRatingStar;