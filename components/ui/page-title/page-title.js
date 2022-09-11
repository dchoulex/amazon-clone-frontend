import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import PageTitleBreadcrumbs from "./page-title-breadcrumbs";
import getDisplayedNumOfResults from "../../../utils/getDisplayedNumOfResults";

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