import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { reviewActions } from "../../store/review-slice";
import ReviewPanelList from "./review-panel-list";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import getPaginatedItems from "../../utils/getPaginatedItems";
import NoItemInfo from "../ui/no-item-info";

const reviews = [
    {
        productName: "Something",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. In hac habitasse platea dictumst. Suspendisse hendrerit quam elit, nec feugiat nulla egestas quis. Nullam vehicula, ligula eget varius congue, dolor diam varius arcu, vel efficitur neque magna sit amet ex. Etiam laoreet odio at erat scelerisque, tempor viverra lorem dapibus. Proin ultricies, nisi ut ullamcorper malesuada, felis nisl lobortis dui, nec finibus turpis enim eget sem. Etiam pharetra est eu leo gravida, quis consectetur libero porta. Integer pulvinar ipsum at vehicula accumsan. Quisque dolor orci, condimentum id accumsan at, laoreet in libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultrices nulla, non vestibulum magna euismod id. Mauris interdum augue odio, eu aliquet mi luctus sit amet. Quisque fringilla semper tortor sit amet finibus. In dapibus urna vitae sapien consequat tincidunt. In vitae gravida mi, vel viverra nibh."
    },
    {
        productName: "Something",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. In hac habitasse platea dictumst. Suspendisse hendrerit quam elit, nec feugiat nulla egestas quis. Nullam vehicula, ligula eget varius congue, dolor diam varius arcu, vel efficitur neque magna sit amet ex. Etiam laoreet odio at erat scelerisque, tempor viverra lorem dapibus. Proin ultricies, nisi ut ullamcorper malesuada, felis nisl lobortis dui, nec finibus turpis enim eget sem. Etiam pharetra est eu leo gravida, quis consectetur libero porta. Integer pulvinar ipsum at vehicula accumsan. Quisque dolor orci, condimentum id accumsan at, laoreet in libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vestibulum ultrices nulla, non vestibulum magna euismod id. Mauris interdum augue odio, eu aliquet mi luctus sit amet. Quisque fringilla semper tortor sit amet finibus. In dapibus urna vitae sapien consequat tincidunt. In vitae gravida mi, vel viverra nibh."
    },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
    // {
    //     productName: "Something",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a turpis quis odio rhoncus imperdiet vitae et leo. Integer consequat ultrices blandit. "
    // },
];

function ReviewInfo(props) {
    const { title } = props;
    const dispatch = useDispatch();

    const currentTab = useSelector(state => state.review.currentTab);
    const currentReviewTabPage = useSelector(state => state.review.reviewPage);
    const currentReviewableProductTabPage = useSelector(state => state.review.reviewableProductPage);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data: reviewRes, error: reviewError } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_MY_REVIEWS, fetcher, { refreshInterval: 5000 });
    const { data: reviewableRes, error: reviewableError } = useSWR(process.env.NEXT_PUBLIC_GET_REVIEWABLE_PRODUCTS, fetcher, { refreshInterval: 5000 });

    if (!reviewRes || !reviewableRes) return <p>Loading</p>
    if (reviewError || reviewableError) return <p>error</p>
    
    const reviewTabItems = reviewRes.data;
    const reviewableProductTabItems = reviewableRes.data;

    const tabItems = {
        review: {
            numOfResults: reviewTabItems.length,
            handleChange: (_, value) => {
                dispatch(reviewActions.changeReviewTabPage({ page: value }))
            },
            isEmpty: currentTab === "review" && reviewTabItems.length === 0,
            page: currentReviewTabPage,
            paginatedItems: getPaginatedItems(reviewTabItems, currentReviewTabPage)
        },
        reviewable: {
            numOfResults: reviewableProductTabItems.length,
            handleChange: (_, value) => {
                dispatch(reviewActions.changeReviewableProductTabPage({ page: value }))
            },
            isEmpty: currentTab === "reviewable" && reviewableProductTabItems.length === 0,
            page: currentReviewableProductTabPage,
            paginatedItems: getPaginatedItems(reviewableProductTabItems, currentReviewableProductTabPage)
        }
    };

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
                                value="review" 
                                disableRipple 
                            />

                            <Tab 
                                label="review a product" 
                                value="reviewable" 
                                disableRipple 
                            />
                        </TabList>
                    </Box>

                    {!tabItems[currentTab].isEmpty &&
                        <Fragment>
                            <TabPanel 
                                value="review" 
                                className="py-2"
                            >
                                <ReviewPanelList 
                                    items={tabItems["review"].
                                    paginatedItems} currentTab={currentTab} 
                                />
                            </TabPanel>

                            <TabPanel 
                                value="reviewable"
                                className="py-2"
                            >
                                {/* <OrderPanelList 
                                    items={tabItems["cancel"].
                                    paginatedItems} currentTab={currentTab} 
                                /> */}
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
        </Box>
    )
};

export default ReviewInfo;