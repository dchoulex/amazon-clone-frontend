import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import PageTitle from "../ui/page-title/page-title";
import MyProfileCard from "./my-profile-card";

function MyProfileInfo(props) {
    const { title } = props;

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />

                <Divider className="border-gray-400 mb-5"/>

                <MyProfileCard />
            </Paper>
        </Box>
    )
};

export default MyProfileInfo;