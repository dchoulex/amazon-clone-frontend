import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useSelector } from "react-redux";

import MainNavbar from "./main-navbar/main-navbar";
import SubNavbar from "./sub-navbar/sub-navbar";

function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    
    const user = useSelector(state => ({
        name: state.user.name,
        email: state.user.email,
        phoneNumber: state.user.phoneNumber,
        amazonPoints: state.user.amazonPoints,
        defaultAddress: state.user.defaultAddress,
        cartNumber: state.user.cartNumber
    }));

    if (!isAuthenticated) {
        user.name = "Sign in",
        user.amazonPoints = "Check your balance",
        user.defaultAddressPostCode = "Your address",
        user.defaultAddressLine = "Select your address",
        user.cartNumber = 0
    };

    return(
        <React.Fragment>
            <AppBar 
                className="bg-amazon_blue-dark"
                position="static"
            >
                <MainNavbar 
                    name={user.name}
                    defaultAddressPostCode={user.defaultAddressPostCode}
                    defaultAddressLine={user.defaultAddressLine}
                    cartNumber={user.cartNumber}
                    isAuthenticated={isAuthenticated}
                />

                <SubNavbar 
                    name={user.name}
                    amazonPoints={user.amazonPoints} 
                />
            </AppBar>
        </React.Fragment>
    )
};

export default Header;