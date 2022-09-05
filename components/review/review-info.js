import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { reviewActions } from "../../store/review-slice";
import ReviewCard from "./review-card";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import getPaginatedItems from "../../utils/getPaginatedItems";
import NoItemInfo from "../ui/no-item-info";

function ReviewInfo(props) {
    const { title, reviews } = props;
    const dispatch = useDispatch();

    const currentPage = useSelector(state => state.review.reviewPage);
    const paginatedReviews = getPaginatedItems(reviews, currentPage);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_ORDERS_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>
    
    const orders = data.data;

    const handleChangePage = (_, value) => {
        dispatch(reviewActions.changeReviewPage({ page: value }));
    };

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
                        {paginatedReviews.map((review, index) => (
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
    
                {numOfResults === 0 ?
                    <NoItemInfo /> :
                    <PaginationButtons 
                        numOfResults={numOfResults} 
                        page={currentPage}
                        onChange={handleChangePage}
                    />
                }
            </Paper>
        </Box>
    )
};

export default ReviewInfo;