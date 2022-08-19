import Box from "@mui/material/Box";

import MyProfileInfo from "../../components/my-profile/my-profile-info";
import PleaseLoginCard from "../../components/ui/please-login-card";

function MyProfilePage() {
    const isLogin = true;
    const pageTitle = "My Profile"

    return (
        <Box p={3} className="bg-gray-200">
            {isLogin ? 
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