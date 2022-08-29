import { useTheme } from '@mui/material/styles';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import LogoButton from "./logo-button";
import SearchBar from "./search-bar/search-bar";
import CountrySelectionButton from "./country-selection-button";
import CartButton from "./cart-button";
import AccountButton from "./account-button";
import AddressSelectionButton from "./address-selection-button";
import CheckOrderButton from "./check-order-button";
import HamburgerMenu from "./hamburger-menu";

function MainNavbar(props) {
    const { name, defaultAddressPostCode, defaultAddressLine, cartNumber, isAuthenticated } = props;

    const theme = useTheme();
    const isLargeUp = useMediaQuery(theme.breakpoints.up("lg"));
    const isSmallUp = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Toolbar 
            className="h-16 px-2 flex" 
            disableGutters
        >
            <Box className="flex flex-1">
                <LogoButton />

                {isLargeUp && 
                    <AddressSelectionButton 
                        defaultAddressPostCode={defaultAddressPostCode}
                        defaultAddressLine={defaultAddressLine}
                    />
                }

                {isSmallUp &&
                    <SearchBar />
                }
            </Box>
   
            {isLargeUp &&
                <div>
                    <CountrySelectionButton />

                    <AccountButton 
                        name={name} 
                        isAuthenticated={isAuthenticated}
                    />

                    <CheckOrderButton />

                    <CartButton cartNumber={cartNumber} />
                </div>
            }

            {!isLargeUp &&
                <HamburgerMenu isSmallUp={isSmallUp} />
            }
        </Toolbar>
    )
};

export default MainNavbar;