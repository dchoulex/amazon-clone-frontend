import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

function CartItemsButtonStack() {
    return (
        <Stack 
            direction="row" 
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            className="items-center mt-auto min-w-[430px]"
        >
            <TextField 
                type="number"
                size="small"
                defaultValue={1}
                margin="none"
                className="max-w-[60px]"
            />

            <Button 
                size="medium"
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>

            <Button                 
                variant="outlined"
                startIcon={<SaveIcon />}
                color="success"
            >
                Save for later
            </Button>
        </Stack>
    )
};

export default CartItemsButtonStack;