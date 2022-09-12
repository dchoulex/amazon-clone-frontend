import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function PageSpinner() {
    return (
        <Box className="flex justify-center">
            <CircularProgress />
        </Box>
    );
};

export default PageSpinner;