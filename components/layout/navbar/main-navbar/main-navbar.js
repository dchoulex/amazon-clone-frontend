import * as React from "react";
import Toolbar from "@mui/material/Toolbar";

import Logo from "./logo";
import SearchBar from "./search-bar";
import CountrySelectionButton from "./country-selection-button";
import CartButton from "./cart-button";
import AccountButton from "./account-button";
import AddressSelectionButton from "./address-selection-button";
import CheckOrderButton from "./check-order-button";

function MainNavbar() {
    return (
        <React.Fragment>
            <Toolbar 
                className="h-16 lg:justify-evenly" 
                disableGutters
            >
                <Logo />
                <AddressSelectionButton />
                <SearchBar />
                <CountrySelectionButton />
                <AccountButton />
                <CheckOrderButton />
                <CartButton />
          
            </Toolbar>
        </React.Fragment>
    )
};

export default MainNavbar;