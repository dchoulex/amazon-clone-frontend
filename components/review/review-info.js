import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

import { reviewActions } from "../../store/review-slice";
import ReviewPanelList from "./review-panel-list";
import ReviewablePanelList from "./reviewable-panel-list";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import getPaginatedItems from "../../utils/getPaginatedItems";
import NoItemInfo from "../ui/dogs-info/no-item-info";
import CustomizedSnackbar from "../ui/customized-snackbar";
import ErrorInfo from "../ui/dogs-info/error-info";
import PageSpinner from "../ui/pageSpinner";

function ReviewInfo(props) {
    const { title } = props;
    const dispatch = useDispatch();

    const [ snackbarState, setSnackbarState ] = useState({
        open: false,
        type: null,
        message: null
    });

    const currentTab = useSelector(state => state.review.currentTab);
    const currentReviewTabPage = useSelector(state => state.review.reviewPage);
    const currentReviewableProductTabPage = useSelector(state => state.review.reviewableProductPage);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data: reviewRes, error: reviewError } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_MY_REVIEWS, fetcher, { refreshInterval: 5000 });
    const { data: reviewableRes, error: reviewableError } = useSWR(process.env.NEXT_PUBLIC_GET_REVIEWABLE_PRODUCTS, fetcher, { refreshInterval: 5000 });

    if (!reviewRes || !reviewableRes) return <PageSpinner />
    if (reviewError || reviewableError) return <ErrorInfo />
    
    const reviewTabItems = reviewRes.data;
    const reviewableProductTabItems = reviewableRes.data;

    const tabItems = [
        {
            numOfResults: reviewTabItems.length,
            handleChange: (_, value) => {
                dispatch(reviewActions.changeReviewTabPage({ page: value }))
            },
            isEmpty: currentTab === 0 && reviewTabItems.length === 0,
            page: currentReviewTabPage,
            paginatedItems: getPaginatedItems(reviewTabItems, currentReviewTabPage)
        },
        {
            numOfResults: reviewableProductTabItems.length,
            handleChange: (_, value) => {
                dispatch(reviewActions.changeReviewableProductTabPage({ page: value }))
            },
            isEmpty: currentTab === 1 && reviewableProductTabItems.length === 0,
            page: currentReviewableProductTabPage,
            paginatedItems: getPaginatedItems(reviewableProductTabItems, currentReviewableProductTabPage)
        }
    ];

    const handleChangeTab = (_, value) => {
        dispatch(reviewActions.changeCurrentTab({ currentTab: value }));
    };

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle 
                    title={title} 
                    numOfResults={tabItems[currentTab].numOfResults}
                />

                <TabContext value={currentTab}>
                    <Box 
                        sx={{ 
                            borderBottom: 1, 
                            borderColor: "#b0bec5" 
                        }}
                    >
                        <TabList 
                            value={currentTab} 
                            onChange={handleChangeTab} 
                            aria-label="cart-tabs"
                        >
                            <Tab 
                                label="review" 
                                value={0} 
                                disableRipple 
                            />

                            <Tab 
                                label="review a product" 
                                value={1} 
                                disableRipple 
                            />
                        </TabList>
                    </Box>

                    {!tabItems[currentTab].isEmpty &&
                        <Fragment>
                            <TabPanel 
                                value={0} 
                                className="py-2"
                            >
                                <ReviewPanelList 
                                    items={tabItems[0].paginatedItems} 
                                    currentTab={currentTab} 
                                    setSnackbarState={setSnackbarState}
                                />
                            </TabPanel>

                            <TabPanel 
                                value={1}
                                className="py-2"
                            >
                                <ReviewablePanelList 
                                    items={tabItems[1].paginatedItems} 
                                    currentTab={currentTab} 
                                    setSnackbarState={setSnackbarState}
                                />
                            </TabPanel>
                        </Fragment>
                    }
                </TabContext>
    
                {tabItems[currentTab].isEmpty ?
                    <NoItemInfo /> :
                    <PaginationButtons 
                        numOfResults={tabItems[currentTab].numOfResults} 
                        page={tabItems[currentTab].page}
                        onChange={tabItems[currentTab].handleChange}
                    />
                }
            </Paper>

            <CustomizedSnackbar
                snackbarState={snackbarState}
                setSnackbarState={setSnackbarState}
            />
        </Box>
    )
};

export default ReviewInfo;