import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import ReviewCard from "./review-card";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";

function ReviewInfo(props) {
    const { title, reviews } = props;
    const numberOfPages = 5;

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />

                <Divider className="border-gray-400 mb-5"/>

                <Button 
                    variant="contained"
                    className="ml-5 mb-4"
                    size="small"
                    startIcon={<ControlPointIcon />}
                >
                    Review a product
                </Button>

                <Box px={5} my={2}>
                    <Grid container spacing={3}>
                        {reviews.map((review, index) => (
                            <Grid 
                                key={`review-card-${index}`} 
                                item 
                                xs={12} 
                                className="flex justify-center items-center"
                            >
                                <ReviewCard review={review} />
                            </Grid>
                        ))}   
                    </Grid>
                </Box>
    
                <PaginationButtons numberOfPages={numberOfPages} />
            </Paper>
        </Box>
    )
};

export default ReviewInfo;