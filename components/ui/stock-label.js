import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function StockLabel(props) {
    const { stock, isCartItem } = props;

    if (stock > 10) {
        return (
            <Box className="pt-2">
                <Chip 
                    variant="outlined" 
                    color="success"
                    label="IN STOCK"
                />
            </Box> 
        )
    } else if (stock > 0 && stock <= 10) {
        return (
            <Box className="pt-2">
                <Chip 
                    variant="contained" 
                    color="info"
                    label="ONLY FEW LEFT"
                />
            
                <Typography 
                    variant="overline"
                    className={`${isCartItem ? "ml-3" : "block"} text-blue-700 pt-2`}
                >
                    Only {stock} left in stock. 
                </Typography>
            </Box>
        )
    } else {
        return (
            <Box className="pt-2">
                <Chip 
                    variant="contained" 
                    color="error"
                    label="OUT OF STOCK"
                />
            
                <Typography 
                    variant="overline"
                    className={`${isCartItem ? "ml-3" : "block"} text-red-800 pt-2`}
                >
                    Sorry, no stock available. 
                </Typography>
            </Box>
        )  
    }
};

export default StockLabel;