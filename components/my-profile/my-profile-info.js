import { useSelector } from "react-redux";
import useSWR from "swr";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import PageTitle from "../ui/page-title/page-title";
import MyProfileCard from "./my-profile-card";

function MyProfileInfo(props) {
    const { title } = props;

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_MY_PROFILE_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>

    const resData = data.data;
    console.log(resData)
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

                <MyProfileCard user={user} />
            </Paper>
        </Box>
    )
};

export default MyProfileInfo;