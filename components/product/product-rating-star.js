import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

function ProductRatingStar(props) {
    const { ratingsAverage, ratingsQuantity } = props;

    function getDisplayedRatingsQuantity() {
        let displayedRatingsQuantity;

        switch (true) {
            case ratingsQuantity === 0:
                displayedRatingsQuantity = "No review"
                break;
            case ratingsQuantity === 1:
                displayedRatingsQuantity = `${ratingsQuantity} review`;
                break;
            case ratingsQuantity > 1:
                displayedRatingsQuantity = `${ratingsQuantity} reviews`;
                break;
            default:
                break;
        }

        return displayedRatingsQuantity;
    };

    return (
        <Box className="flex">
            <Rating 
                name="product-rating" 
                value={ratingsAverage} 
                precision={0.5}
                size="medium" 
                emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                readOnly
            />

            <Box sx={{ ml: 2, my: "auto"}}>
                {getDisplayedRatingsQuantity()}
            </Box>
        </Box>
    )
};

export default ProductRatingStar;