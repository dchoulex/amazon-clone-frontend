import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationButtons(props) {
    const { numberOfPages } = props;

    return (
        <Stack className="flex-row justify-center pt-5 pb-7">
            <Pagination 
                count={numberOfPages} 
                color="primary" 
            />
        </Stack>
    )
};

export default PaginationButtons;