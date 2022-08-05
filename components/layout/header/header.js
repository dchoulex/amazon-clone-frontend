import * as React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";

import MainNavbar from "./main-navbar/main-navbar";
import SubNavbar from "./sub-navbar/sub-navbar";

const useStyles = makeStyles(() => ({
    toolbarMargin: {
        minHeight: "112px"
    }
}));

function Header() {
    const classes = useStyles();

    return(
        <React.Fragment>
            <AppBar className="bg-amazon_blue-dark">
                <MainNavbar />
                <SubNavbar />
            </AppBar>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
};

export default Header;