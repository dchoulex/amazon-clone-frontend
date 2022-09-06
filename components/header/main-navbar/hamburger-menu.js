import { useState, Fragment } from "react";
import Link from "next/link";

import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from "@mui/material/Button";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SvgIcon from '@mui/material/SvgIcon';
import ContactsIcon from '@mui/icons-material/Contacts';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PaymentIcon from '@mui/icons-material/Payment';

import JapanIcon from "../../../public/images/jp-flag-icon.svg";
import StyledListItemText from "../styled-list-item-text";
import { useSelector } from "react-redux";

const buttons = [
    {
        icon: <ManageAccountsIcon />,
        name: "Account",
        href: "/account"
    },
    {
        icon: <ListAltIcon />,
        name: "Orders",
        href: "/account/order-history"
    },
    {
        icon: <PersonIcon />,
        name: "My Profile",
        href: "/account/my-profile"
    },
    {
        icon: <RateReviewIcon />,
        name: "My Review",
        href: "/account/review"
    },
    {
        icon: <ContactsIcon />,
        name: "Select your address",
        href: "/account/address"
    },
    {
        icon: <PaymentIcon />,
        name: "Wallet",
        href: "/account/wallet"
    },
    {
        icon: <ShoppingCartOutlinedIcon />,
        name: "Cart",
        href: "/cart"
    }
];

function HamburgerMenu(props) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const { isSmallUp } = props;

    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = useState(false);
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const handleOpenDrawer = () => setOpenDrawer(true);

    const handleCloseDrawer = () => setOpenDrawer(false);

    return (
        <Fragment>
            <IconButton 
                sx={{ 
                    color: "white",
                    justify: "center" 
                }}
                onClick={handleOpenDrawer}
            >
                <MenuIcon />
            </IconButton>

            <SwipeableDrawer 
                anchor="right"
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                onClose={handleCloseDrawer} 
                onOpen={handleOpenDrawer}
            >
                <Box
                    sx={{ width: 350 }}
                    role="presentation"
                >           
                    {!isSmallUp &&
                        <Box 
                            sx={{ backgroundColor: theme.palette.amazon_blue.light }}
                            p={2}
                        >
                            <Box sx={{ display: "flex" }}>
                                <InputBase 
                                    sx={{
                                        display: "flex", 
                                        flex: "1 1 0%",
                                    }}
                                />

                                <Button 
                                    sx={{ 
                                        backgroundColor: "rgb(253 186 116)",
                                        borderTopLeftRadius: "0px",
                                        borderBottomLeftRadius: "0px",
                                        borderColor: "rgb(251 146 60)",
                                        "&:hover": {
                                            backgroundColor: "rgb(251 146 60)",
                                            borderColor: "rgb(251 146 60)"
                                        }
                                    }} 
                                    onClick={handleCloseDrawer} 
                                    startIcon ={<SearchIcon sx={{color: "black"}} />} 
                                />
                            </Box>
                        </Box>
                    } 
        
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <SvgIcon component={JapanIcon} inheritViewBox />
                            </ListItemIcon>

                            <StyledListItemText primary="You are shopping on Amazon Japan" />
                        </ListItem>


                        {buttons.map(button => (
                            <Link 
                                key={`button-${button.name}`}
                                href={button.href}
                            >
                                <ListItemButton 
                                    onClick={handleCloseDrawer} 
                                >
                                    <ListItemIcon>{button.icon}</ListItemIcon>

                                    <StyledListItemText primary={button.name} />
                                </ListItemButton>
                            </Link>
                        ))}

                        {isAuthenticated ?
                            <ListItemButton 
                                disableRipple 
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "inherit",
                                        cursor: "default"
                                    },
                                    justifyContent: "center"
                                }}
                            >
                                <Button variant="contained">
                                    Logout
                                </Button>
                            </ListItemButton> :
                            
                            <Link href="/account/login">
                                <ListItemButton 
                                    disableRipple 
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "inherit",
                                            cursor: "default"
                                        },
                                        justifyContent: "center"
                                    }}
                                >
                                    <Button variant="contained">
                                        Login
                                    </Button>
                                </ListItemButton> 
                            </Link>
                        }
                    </List>
                </Box>
            </SwipeableDrawer>
        </Fragment>
    )
};

export default HamburgerMenu;