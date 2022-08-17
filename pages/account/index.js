import Box from '@mui/material/Box';

import AccountServiceCard from "../../components/account/account-service-card";
import PleaseLoginCard from "../../components/ui/please-login-card";

function AccountPage() {
    const isLogin = false;
    const pageTitle = "Your Account"

    return (
        <Box p={3} className="bg-gray-200">
            {isLogin ? 
                <AccountServiceCard 
                    orderItems={orderItems} 
                    numberOfResults={numberOfResults} 
                    title={pageTitle} 
                /> :
                <PleaseLoginCard 
                    page={"account"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default AccountPage;