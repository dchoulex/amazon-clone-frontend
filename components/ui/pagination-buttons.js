import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { PAGINATION_LIMIT } from '../../appConfig';

function PaginationButtons(props) {
    const { numOfResults, page, ...otherProps } = props;
    const numOfPages =  Math.ceil(numOfResults / PAGINATION_LIMIT);

    let currentPage;

    if (page > numOfPages) {
        currentPage = 1
    }

    let paginationConfig = {
        ...otherProps,
        count: numOfPages,
        color: "primary",
        page: currentPage
    };

    if (numOfPages > 2) {
        paginationConfig.showFirstButton = true;
        paginationConfig.showLastButton = true;
    };

    return (
        <Stack className="flex-row justify-center pt-5 pb-7">
            <Pagination {...paginationConfig} />
        </Stack>
    )
};

export default PaginationButtons;