import Box from "@mui/material/Box";

import AddressInfo from "../../components/address/adress-info";
import PleaseLoginCard from "../../components/ui/please-login-card";

function AddressPage() {
    const isLogin = true;
    const pageTitle = "Your Addresses"

    return (
        <Box p={3} className="bg-gray-200">
            {isLogin ? 
                <AddressInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={ "addresses" } 
                    title={ pageTitle } 
                />
            }
        </Box>
    )
};

export default AddressPage;