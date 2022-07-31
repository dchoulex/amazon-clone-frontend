import * as React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import MainNavbar from "./navbar/main-navbar/main-navbar";
import SubNavbar from "./navbar/sub-navbar/sub-navbar";

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    }
}));

function Navbar() {
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

export default Navbar;