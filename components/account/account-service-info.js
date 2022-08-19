import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import PageTitle from "../ui/page-title/page-title";
import AccountServiceCard from "./account-service-card";

function AccountServiceInfo(props) {
    const { title } = props;

    return (
        <Paper className="bg-white">
            <PageTitle title={title} />

            <Divider className="border-gray-400 mb-5"/>

            <Box px={5} pb={5} pt={2}>
                <AccountServiceCard />
            </Box>
        </Paper>
    )
};

export default AccountServiceInfo;