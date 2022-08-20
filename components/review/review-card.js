import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function ReviewCard(props) {
    const { review } = props;
    const [ reviewIsExpanded, setReviewIsExpanded ] = useState(false);
    const reviewSummary = review.description.slice(0, 500) + "..." ;

    const handleExpandMoreReview = () => {
        setReviewIsExpanded(true);
    };

    const handleExpandLessReview = () => {
        setReviewIsExpanded(false);
    };

    return (
        <Card className="flex border-2 border-solid border-gray-200">
            <CardMedia 
                component="img"
                src="/images/amazon-logo.png"
                sx={{
                    width: "200px",
                    height: "200px"
                }}
            />

            <CardContent>
                <Typography variant="h5">
                    {review.productName}
                </Typography>

                <Divider />

                <Box className="flex ">
                    {!reviewIsExpanded &&  
                        <Typography variant="body1" className="mt-4 pl-2 pr-5">
                            {review.description.length > 500 ? 
                                reviewSummary : 
                                review.description
                            }
                        </Typography>
                    }

                    {reviewIsExpanded &&
                        <Collapse in={reviewIsExpanded}>
                            <Typography variant="body1" className="mt-4 pl-2 pr-5">
                                {review.description}
                            </Typography> 
                        </Collapse>
                    }

                    {review.description.length > 500 && 
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