import * as React from "react";
import { makeStyles } from "@mui/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import Divider from '@mui/material/Divider';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import Public from '@mui/icons-material/Public';
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../../public/images/jp-flag-icon.svg";

const useStyles = makeStyles(theme => ({
    menuMargin: {
        height: "80px"
    }
}));

const drawerListItems = [
    {
        title: "Trending",
        items: [
            {
                title: "Best Sellers"
            },
            {
                title: "New Releases"
            },
            {
                title: "Movers & Shakers",
                disabled: true
            }
        ]
    },
    {
        title: "Digital Content & Devices",
        items: [
            {
                title: "Prime Video",
                disabled: true
            }, 
            {
                title: "Amazon Music",
                disabled: true
            },
            {
                title: "Appstore for Android",
                disabled: true
            },
            {
                title: "Echo, Alexa & Ring",
                disabled: true
            },
            {
                title: "Fire Tablets",
                disabled: true
            },
            {
                title: "Fire TV",
                disabled: true
            },
            {
                title: "Kindle E-readers & Books",
                disabled: true
            },
            {
                title: "Audible Audiobooks",
                disabled: true
            }
        ]
    }, 
    {
        title: "Shop By Department",
        items: [
            {
                title: "Electronics & Camera"
            },
            {
                title: "Computers & Office"
            },
            {
                title: "Food, Beverage & Alcohol"
            },
            {
                title: "Sports & Outdoors"
            },
            {
                title: "Clothing, Shoes & Jewelry"
            },
            {
                title: "Books, Comics & Magazines",
                disabled: true
            },
            {
                title: "DVD, Music & Games",
                disabled: true
            },
            {
                title: "See All"
            },
            {
                title: "Smart Home",
                disabled: true
            },
            {
                title: "Home & Kitchen & Pet & DIY",
                disabled: true
            },
            {
                title: "Drugstore & Beauty",
                disabled: true
            },
            {
                title: "Baby, Toys & Hobby",
                disabled: true
            },
            {
                title: "Auto & Industrial",
                disabled: true
            },
            {
                title: "See Less"
            }
        ]
    },
    {
        title: "Programs & Features",
        items: [
            {
                title: "Credit Cards & Amazon Points"
            }, 
            {
                title: "Amazon Outlet",
                disabled: true
            }
        ]
    },
    {
        title: "Help & Settings",
        items: [
            {
                title: "Your Account"
            },
            {
                title: "English",
                icon: <Public />
            },
            {
                title: "Japan",
                icon: <SvgIcon component={JapanIcon} inheritViewBox />
            },
            {
                title: "Currency Settings",
                disabled: true
            },
            {
                title: "Help"
            },
            {
                title: "Sign in"
            }
        ]
    }
];



function AllTab() {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const classes = useStyles();

    const handleOpenDrawer = () => setOpenDrawer(true);

    const hanldeCloseDrawer = () => setOpenDrawer(false);

    return (
        <React.Fragment>
            <Tab 
                className="text-gray-200 normal-case px-8px min-w-0 min-h-0 text-base font-light opacity-100"
                label={"All"}
                icon={<MenuIcon />}
                iconPosition="start"
                onClick={handleOpenDrawer}
            />
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer} 
                anchor="left"
                onClose={hanldeCloseDrawer} 
                onOpen={handleOpenDrawer}
            >
                <Box
                    sx={{ width: 350 }}
                    role="presentation"
                >      
                    <List disablePadding>
                        <ListItem
                            sx={{ 
                                bgcolor: "#232f3e",
                                padding: "1rem",
                                width: "350px"
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText 
                                primaryTypographyProps={{color: "white"}}
                                primary="Hello, Sign in" 
                            />
                        </ListItem>

                        {drawerListItems.map(listItem => (
                            <React.Fragment key={listItem.title}>
                                <ListSubheader 
                                    sx={{
                                        fontSize: 22,
                                        color: "black",
                                        fontWeight: "400",
                                        paddingTop: "10px",
                                        paddingLeft: "1.5rem"
                                    }} 
                                >
                                    {listItem.title}
                                </ListSubheader>
                                {listItem.items.map(item => (
                                    <ListItemButton 
                                        key={item.title}
                                        disabled={item.disabled} 
                                        sx={{
                                            paddingLeft: "2rem"
                                        }}
                                    >
                                        {item.icon && 
                                            <ListItemIcon sx={{minWidth: "40px"}}>{item.icon}</ListItemIcon>
                                        }
                                        <ListItemText 
                                            primaryTypographyProps={{
                                                color: "#484848",
                                                fontWeight: "lighter"
                                            }}
                                            primary={item.title}
                                        />
                                    </ListItemButton>
                                ))}
                                <Divider />
                            </React.Fragment>
                        ))}
                  
                    </List>
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    )
};

export default AllTab;