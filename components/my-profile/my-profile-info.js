import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import PageTitle from "../ui/page-title/page-title";
import MyProfileCard from "./my-profile-card";

function MyProfileInfo(props) {
    const { title } = props;
    const user = useSelector(state => (
        {
            name: state.user.name,
            email: state.user.email,
            phoneNumber: state.user.phoneNumber
        }
    ));

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