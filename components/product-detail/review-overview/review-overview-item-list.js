import { useState } from "react";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import ReviewRatingStar from "../../review/review-rating-star";
import getImagePath from "../../../utils/getImagePath";

function ReviewOverviewItemList(props) {
    const { review } = props;
    const { user } = review;
    const [ reviewIsExpanded, setReviewIsExpanded ] = useState(false);
    const reviewSummary = review.review.slice(0, 500) + "..." ;

    const handleExpandMoreReview = () => {
        setReviewIsExpanded(true);
    };

    const handleExpandLessReview = () => {
        setReviewIsExpanded(false);
    };

    return (
        <Box className="flex flex-col flex-1">
            <Box className="align-left flex items-center py-1">
                <IconButton>
                    <Avatar
                        alt={user.name}
                        src={getImagePath(user.email)}
                        sx={{ width: 30, height: 30 }}
                    />
                </IconButton>

                <Typography className="ml-2">
                    {user.name}
                </Typography>
            </Box>
            
            <Card className="flex border-2 border-solid border-gray-200 flex-1">
                <CardContent className="flex flex-col flex-1">
                    <ReviewRatingStar rating={review.rating} />

                    <Box 
                        sx={{
                            borderTop: 1,
                            borderColor: "divider",
                            display: "flex",
                            mt: 2
                        }}
                    >
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
        </Box>
    )
};

export default ReviewOverviewItemList;