import * as React from "react";
import BackToTop from "./back-to-top";
import MainAccessibilityNav from "./main-accessilbility-nav";

function MainBottomNav() {
    return (
        <React.Fragment>
            <BackToTop />
            <MainAccessibilityNav />
        </React.Fragment>
    )
};

export default MainBottomNav;