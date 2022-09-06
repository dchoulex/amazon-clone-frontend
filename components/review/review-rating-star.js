import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import { RATING_LABELS } from '../../appConfig';

function ReviewRatingStar(props) {
    const { rating } = props;

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
                {RATING_LABELS[rating]}
            </Box>
        </Box>
    )
};

export default ReviewRatingStar;