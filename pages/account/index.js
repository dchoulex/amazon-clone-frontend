import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import AccountServiceInfo from '../../components/account/account-service-info';
import PleaseLoginCard from "../../components/ui/please-login-card";

function AccountPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Account Services";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
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