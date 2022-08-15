import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function ShippingAddress() {
    return (
        <Paper className="flex p-4 border-2 border-gray-200 border-solid my-5">
            <div>
                <Typography variant="body1">David Choulex</Typography>

                <Typography variant="body1">123-456</Typography>

                <Typography variant="body1">City</Typography>
                
                <Typography variant="body1">Bellow</Typography>
            </div>

            <Button 
                variant="outlined" 
                className="h-[30px] ml-auto" size="small"
            >
                Change
            </Button>
        </Paper>
    )
};

export default ShippingAddress;