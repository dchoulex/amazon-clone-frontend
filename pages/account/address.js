import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import AddressInfo from "../../components/address/address-info";
import PleaseLoginCard from "../../components/ui/please-login-card";

function AddressPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Address";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <AddressInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"addresses"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default AddressPage;