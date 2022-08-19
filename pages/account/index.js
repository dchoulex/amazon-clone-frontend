import Box from '@mui/material/Box';

import AccountServiceInfo from '../../components/account/account-service-info';
import PleaseLoginCard from "../../components/ui/please-login-card";

function AccountPage() {
    const isLogin = true;
    const pageTitle = "Account Services"

    return (
        <Box p={3} className="bg-gray-200">
            {isLogin ? 
                <AccountServiceInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"account"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default AccountPage;