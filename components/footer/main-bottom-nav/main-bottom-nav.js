import { Fragment } from "react";
import BackToTop from "./back-to-top";
import MainAccessibilityNav from "./main-accessilbility-nav";

function MainBottomNav() {
    return (
        <Fragment>
            <BackToTop />
            <MainAccessibilityNav />
        </Fragment>
    )
};

export default MainBottomNav;