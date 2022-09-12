import { useState } from "react";
import useSWR from "swr";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import PageTitle from "../ui/page-title/page-title";
import MyProfileCard from "./my-profile-card";
import CustomizedSnackbar from "../ui/customized-snackbar";
import PageSpinner from "../ui/pageSpinner";
import ErrorInfo from "../ui/dogs-info/error-info";

function MyProfileInfo(props) {
    const { title } = props;

    const [ snackbarState, setSnackbarState ] = useState({
        open: false,
        type: null,
        message: null
    });

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_MY_PROFILE_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />

    const resData = data.data;

    const user = {
        name: resData.name,
        email: resData.email,
        phoneNumber: resData.phoneNumber
    };

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />

                <Divider className="border-gray-400 mb-5"/>

                <MyProfileCard 
                    user={user} 
                    setSnackbarState={setSnackbarState} 
                />

                <CustomizedSnackbar
                    snackbarState={snackbarState}
                    setSnackbarState={setSnackbarState}
                />
            </Paper>
        </Box>
    )
};

export default MyProfileInfo;