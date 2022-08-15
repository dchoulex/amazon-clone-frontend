import * as React from "react";
import AppBar from "@mui/material/AppBar";

import MainNavbar from "./main-navbar/main-navbar";
import SubNavbar from "./sub-navbar/sub-navbar";

function Header() {
    return(
        <React.Fragment>
            <AppBar 
                className="bg-amazon_blue-dark"
                position="static"
            >
                <MainNavbar />

                <SubNavbar />
            </AppBar>
        </React.Fragment>
    )
};

export default Header;