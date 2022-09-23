import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Image from "next/image";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import getAPI from "../../utils/getAPI";
import EditReviewForm from "./edit-review-form";
import ReviewRatingStar from "./review-rating-star";
import { snackbarActions } from "../../store/snackbar-slice";

function ReviewCard(props) {
    const { review, setDataIsChanging, setIsRequesting, isRequesting } = props;
    const [ reviewIsExpanded, setReviewIsExpanded ] = useState(false);
    const [ openEditReviewForm, setOpenEditReviewForm ] = useState(false);
    const { product } = review;
    const reviewSummary = review.review.slice(0, 500) + "..." ;

    const dispatch = useDispatch();

    const handleExpandMoreReview = () => {
        setReviewIsExpanded(true);
    };

    const handleExpandLessReview = () => {
        setReviewIsExpanded(false);
    };

    const handleDeleteReview = async() => {
        setIsRequesting(true);

        const DELETE_REVIEW_API = getAPI(process.env.NEXT_PUBLIC_DELETE_REVIEW_API, { id: product._id, id2: review._id });

        try {
            const res = await axios.delete(DELETE_REVIEW_API);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true , 
                    type: "success", 
                    message: "Successfully delete item."
                }));

                setDataIsChanging(true);
            } 
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }));

            setIsRequesting(false);
        }
    };

    const handleOpenEditReviewForm = () => {
        setOpenEditReviewForm(true);
    };

    return (
        <Card className="flex border-2 border-solid border-gray-200 flex-1">
            <Box className="flex flex-col">
                <Box p={4}>
                    <Image 
                        src={`/images/products/${product.slug}/${product.images[0]}`}
                        width={200}
                        height={240}
                        alt={product.name}
                    />
                </Box>

                <Stack direction="row">
                    <Button
                        variant="outlined" 
                        fullWidth
                        className="m-1"
                        onClick={handleOpenEditReviewForm}
                        disabled={isRequesting}
                    >
                        Edit
                    </Button>

                    <EditReviewForm 
                        openEditReviewForm={openEditReviewForm}
                        setOpenEditReviewForm={setOpenEditReviewForm}
                        review={review}
                        setDataIsChanging={setDataIsChanging}
                    />

                    <Button 
                        variant="outlined" 
                        fullWidth
                        className="m-1"
                        color="error"
                        onClick={handleDeleteReview}
                        disabled={isRequesting}
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