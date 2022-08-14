import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import LogoButton from "./logo-button";
import SearchBar from "./search-bar/search-bar";
import CountrySelectionButton from "./country-selection-button";
import CartButton from "./cart-button";
import AccountButton from "./account-button";
import AddressSelectionButton from "./address-selection-button";
import CheckOrderButton from "./check-order-button";

function MainNavbar() {
    return (
        <Toolbar 
            className="h-16 flex px-2" 
            disableGutters
        >
            <Box className="flex flex-1">
                <LogoButton />

                <AddressSelectionButton />

                <SearchBar />
            </Box>

            <div>
                <CountrySelectionButton />

                <AccountButton />

                <CheckOrderButton />

                <CartButton />
            </div>


        </Toolbar>
    )
};

export default MainNavbar;