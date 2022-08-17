import Box from '@mui/material/Box';

import CheckoutInfo from '../../components/checkout/checkout-info';
import PleaseLoginCard from '../../components/ui/please-login-card';

function CheckoutPage() {
    const isLogin = true;
    const pageTitle = "Checkout"

    return (
        <Box className={`${!isLogin ? "bg-gray-200 h-screen p-5" : "" }`}>
            {isLogin ? 
                <CheckoutInfo /> :
                <PleaseLoginCard 
                    page={"checkout"} 
                    title={pageTitle} 
                />
            }
        </Box>
    );
};

export default CheckoutPage;