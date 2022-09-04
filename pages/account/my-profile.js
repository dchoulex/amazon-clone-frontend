import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import MyProfileInfo from "../../components/my-profile/my-profile-info";
import PleaseLoginCard from "../../components/ui/please-login-card";

function MyProfilePage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "My Profile";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <MyProfileInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"profile"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default MyProfilePage;