import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import PleaseLoginCard from "../../components/ui/please-login-card";
import WalletInfo from "../../components/wallet/wallet-info";

function WalletPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Wallet";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <WalletInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"wallet"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default WalletPage;