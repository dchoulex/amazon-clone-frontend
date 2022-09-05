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
import ReviewCard from "./review-card";
import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import getPaginatedItems from "../../utils/getPaginatedItems";
import NoItemInfo from "../ui/no-item-info";

function ReviewPanelList(props) {
    const { items } = props;
    
    return (
        <Box px={5} my={2}>
            <Grid container spacing={3}>
                {items.map((item, index) => (
                    <Grid 
                        key={`review-card-${index}`} 
                        item 
                        xs={12} 
                        className="flex justify-center items-center"
                    >
                        <ReviewCard review={item} />
                    </Grid>
                ))}   
            </Grid>
        </Box>
    )
};

export default ReviewPanelList;