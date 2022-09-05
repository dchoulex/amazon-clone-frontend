import { useSelector } from "react-redux";

import Box from "@mui/material/Box";

import ReviewInfo from "../../components/review/review-info";
import PleaseLoginCard from "../../components/ui/please-login-card";

function ReviewPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const pageTitle = "Review";

    return (
        <Box p={3} className="bg-gray-200">
            {isAuthenticated ? 
                <ReviewInfo title={pageTitle} /> :
                <PleaseLoginCard 
                    page={"review"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default ReviewPage;