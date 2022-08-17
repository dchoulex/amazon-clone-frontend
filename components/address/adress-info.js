import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import PageTitle from "../ui/page-title";
import PaginationButtons from "../ui/pagination-buttons";

function AddressInfo(props) {
    const { title } = props;
    const numberOfPages = 4;

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />
    
                <PaginationButtons numberOfPages={numberOfPages} />
            </Paper>
        </Box>
    )
};

export default AddressInfo;