import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PageTitleBreadcrumbs from "./page-title-breadcrumbs";

function getDisplayedNumOfResults(numOfResults) {
    let displayedNumOfResults;

    switch(true) {
        case numOfResults === 1:
            displayedNumOfResults = "1 item";
            break;
        case numOfResults > 1:
            displayedNumOfResults = `${numOfResults} items`
            break;
        default:
            displayedNumOfResults = "No item avaialable";
            break;
    };

    return displayedNumOfResults
};

function PageTitle(props) {
    const { title, numOfResults } = props;

    const displayedNumOfResults = getDisplayedNumOfResults(numOfResults);

    return (
        <Box className="bg-white p-5 pb-2">
            <PageTitleBreadcrumbs />

            <Typography variant="h4" className="font-light mb-2">
                {title}
            </Typography>

            {numOfResults !== undefined &&
                <Typography 
                    variant="overline" 
                    className="text-base font-light"
                >
                    {displayedNumOfResults}
                </Typography>
            }
        </Box>
    )
};

export default PageTitle;