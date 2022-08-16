import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LoopIcon from '@mui/icons-material/Loop';

function BuyAgainItemsButtonStack() {
    return (
        <Stack 
            direction="row" 
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            className="items-center mt-auto"
        >
            <Button 
                variant="contained"
                className="bg-orange-400"
                startIcon={<LoopIcon />}
            >
                Buy again
            </Button>
        </Stack>
    )
};

export default BuyAgainItemsButtonStack;