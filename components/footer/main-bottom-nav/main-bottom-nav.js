import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MainAccessibilityNav from "./main-accessilbility-nav";

function MainBottomNav() {
    return (
        <div>
            <Button 
                className="normal-case text-white bg-white bg-opacity-10 h-12"
                fullWidth
            >
                <Typography className="font-light">
                    Back to top
                </Typography>
            </Button>

            <MainAccessibilityNav />
        </div>
    )
};

export default MainBottomNav;