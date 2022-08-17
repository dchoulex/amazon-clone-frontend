import Box from '@mui/material/Box';

import AccountServiceCard from "../../components/account/account-service-card";
import PleaseLoginCard from "../../components/ui/please-login-card";

function AccountPage() {
    const isLogin = true;
    const pageTitle = "Your Account"

    return (
        <Box>
            {isLogin ? 
                <AccountServiceCard title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"account"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default AccountPage;