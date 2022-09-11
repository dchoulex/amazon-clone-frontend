import { useState, Fragment } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Divider from '@mui/material/Divider';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from '@mui/icons-material/Menu';

import { drawerListItems } from "./data/all-tab-data";
import AllTabListItem from "./all-tab-list-item";
import AllTabCollapseListItem from "./all-tab-collapse-list-item";

function AllTab(props) {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const { name } = props;
    
    const [openDrawer, setOpenDrawer] = useState(false);
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const handleOpenDrawer = () => setOpenDrawer(true);

    const handleCloseDrawer = () => setOpenDrawer(false);

    return (
        <Fragment>
            <Tab 
                className="text-gray-200 normal-case min-w-0 min-h-0 text-base font-light opacity-100"
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
                onClose={handleCloseDrawer} 
                onOpen={handleOpenDrawer}
            >
                <Box
                    sx={{ width: 350 }}
                    role="presentation"
                >      
                    <List disablePadding>
                        <ListItemButton
                            sx={{ 
                                bgcolor: "#232f3e",
                                padding: "1rem",
                                width: "350px",
                                "&:hover": {
                                    backgroundColor: "#232f3e" 
                                },
                                cursor: "default"
                            }}
                            className="bg-amazon_blue-light"
                            disableRipple
                        >
                                <ListItemAvatar>
                                    <Avatar />
                                </ListItemAvatar>

                                <ListItemText 
                                    primaryTypographyProps={{color: "white"}}
                                    primary={isAuthenticated ? `Hello, ${name}` : "Hello, please sign in."} 
                                />
                        </ListItemButton>

                        {drawerListItems.map((listItem, index) => (
                            <Fragment key={`list-item-${index}`}>
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

                                {listItem.items.map((item, index) => (
                                    item.isCollapseListItem ? 
                                    <AllTabCollapseListItem 
                                        key={`collapse-list-item-${index}`} 
                                        onClick={handleCloseDrawer} 
                                    /> :
                                    
                                    <AllTabListItem 
                                        key={`all-tab-list-item-${index}`} 
                                        item={item} 
                                        onClick={handleCloseDrawer}
                                    />
                                ))}

                                {index !== drawerListItems.length - 1 &&
                                    <Divider />
                                }
                            </Fragment>
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
                                <Button variant="outlined">
                                    Sign out
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
                                    <Button variant="outlined">
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

export default AllTab;