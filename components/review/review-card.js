import { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import getAPI from "../../utils/getAPI";
import EditReviewForm from "./edit-review-form";
import ReviewRatingStar from "./review-rating-star";

function ReviewCard(props) {
    const { review } = props;
    const [ reviewIsExpanded, setReviewIsExpanded ] = useState(false);
    const [ openEditReviewForm, setOpenEditReviewForm ] = useState(false);
    const { product } = review;
    const reviewSummary = review.review.slice(0, 500) + "..." ;

    const handleExpandMoreReview = () => {
        setReviewIsExpanded(true);
    };

    const handleExpandLessReview = () => {
        setReviewIsExpanded(false);
    };

    const handleDeleteReview = async() => {
        const DELETE_REVIEW_API = getAPI(process.env.NEXT_PUBLIC_DELETE_REVIEW_API, { id: product._id, id2: review._id });

        await axios.delete(DELETE_REVIEW_API);
    };

    const handleOpenEditReviewForm = () => {
        setOpenEditReviewForm(true);
    };

    return (
        <Card className="flex border-2 border-solid border-gray-200 flex-1">
            <Box className="flex flex-col">
                <CardMedia 
                    component="img"
                    src="/images/amazon-logo.png"
                    sx={{
                        width: "200px",
                        height: "200px",
                        mb: 2
                    }}
                />

                <Stack direction="row">
                    <Button
                        variant="outlined" 
                        fullWidth
                        className="m-1"
                        onClick={handleOpenEditReviewForm}
                    >
                        Edit
                    </Button>

                    <EditReviewForm 
                        openEditReviewForm={openEditReviewForm}
                        setOpenEditReviewForm={setOpenEditReviewForm}
                        review={review}
                    />

                    <Button 
                        variant="outlined" 
                        fullWidth
                        className="m-1"
                        color="error"
                        onClick={handleDeleteReview}
                    >
                        Delete
                    </Button>
                </Stack>
            </Box>

            <CardContent className="flex flex-col flex-1">
                <Box 
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                    mb={1}
                >
                    <Typography variant="h5">
                        {product.name}
                    </Typography>
                </Box>

                <ReviewRatingStar 
                    rating={review.rating} 
                    className="pt-2" 
                />

                <Box className="flex">
                    {!reviewIsExpanded &&  
                        <Typography variant="body1" className="mt-4 pl-2 pr-5">
                            {review.review.length > 500 ? 
                                reviewSummary : 
                                review.review
                            }
                        </Typography>
                    }

                    {reviewIsExpanded &&
                        <Collapse in={reviewIsExpanded}>
                            <Typography variant="body1" className="mt-4 pl-2 pr-5">
                                {review.review}
                            </Typography> 
                        </Collapse>
                    }

                    {review.review.length > 500 && 
                        <div className="flex flex-col flex-1 justify-center">
                            {!reviewIsExpanded && 
                                <IconButton className="bg-blue-100" onClick={handleExpandMoreReview} >
                                    <ExpandMoreIcon />
                                </IconButton>
                            }

                            {reviewIsExpanded && 
                                <IconButton className="bg-blue-100" onClick={handleExpandLessReview} >
                                    <ExpandLessIcon />
                                </IconButton>
                            }
                        </div>
                    }
                </Box>
            </CardContent>
        </Card>
    )
};

export default ReviewCard;