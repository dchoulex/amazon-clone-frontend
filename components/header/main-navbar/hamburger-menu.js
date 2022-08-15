import { useState, Fragment } from "react";
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
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../public/images/jp-flag-icon.svg";

import StyledListItemText from "../styled-list-item-text";

const buttons = [
    {
        icon: <LocationOnOutlinedIcon />,
        name: "Select your address"
    },
    {
        icon: <PersonIcon />,
        name: "Account"
    },
    {
        icon: <ListAltIcon />,
        name: "Orders"
    },
    {
        icon: <ShoppingCartOutlinedIcon />,
        name: "Cart"
    }
];

function HamburgerMenu(props) {
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
                            <ListItemButton 
                                key={`button-${button.name}`}
                                onClick={handleCloseDrawer} 
                            >
                                <ListItemIcon>{button.icon}</ListItemIcon>

                                <StyledListItemText primary={button.name} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </Fragment>
    )
};

export default HamburgerMenu;