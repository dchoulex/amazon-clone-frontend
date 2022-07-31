import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Logo from "./logo";
import SearchBar from "./search-bar";
import CountrySelectionButton from "./country-selection-button";
import CartButton from "./cart-button";

const mainNavbarButtons = [
    {
        title: "logo"
    },
    {
        title: "Select your address",
        subTitle: "Hello",
        icon: <LocationOnOutlinedIcon />
    },
    {
        title: "searchBar"
    },
    {
        title: "country"
    },
    {
        title: "Account & Lists",
        subTitle: "Hello, Sign in"
    },
    {
        title: "Orders",
        subTitle: "Returns &"
    },
    {
        title: "cart"
    }
];

function MainNavbar() {
    return (
        <React.Fragment>
            <Toolbar 
                className="h-16 w-screen justify-evenly" 
                disableGutters
            >
                {mainNavbarButtons.map(button => {
                    if (button.title === "logo") {
                        return <Logo key={button.title} />
                    }

                    if (button.title === "searchBar") {
                        return <SearchBar key={button.title} />
                    };

                    if (button.title === "country") {
                        return <CountrySelectionButton key={button.title} />
                    };

                    if (button.title === "cart") {
                        return <CartButton />
                    }
                    
                    return (
                        <Button 
                            key={button.title} className="normal-case text-white mx-4px w-max h-56px flex-none "
                        >
                            {button.icon}
                            <Box className="text-left w-max flex-col">
                                <Typography className="text-zinc-400 text-sm">
                                    {button.subTitle}
                                </Typography>
                                <Typography className="text-base">
                                    {button.title}
                                </Typography>
                            </Box>
                        </Button>
                    )
                })}
             </Toolbar>
        </React.Fragment>
    )
};

export default MainNavbar;