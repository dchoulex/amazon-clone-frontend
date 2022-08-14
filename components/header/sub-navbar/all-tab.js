import { useState, Fragment } from "react";
import Link from "next/link";

import { drawerListItems } from "./data/all-tab-data";

import Tab from "@mui/material/Tab";
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

import AllTabListItem from "./all-tab-list-item";
import AllTabCollapseListItem from "./all-tab-collapse-list-item";

function AllTab() {
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
                        <Link href="/auth/login">
                            <ListItemButton
                                sx={{ 
                                    bgcolor: "#232f3e",
                                    padding: "1rem",
                                    width: "350px",
                                    "&:hover": {
                                        backgroundColor: "#232f3e" 
                                    }
                                }}
                                onClick={handleCloseDrawer}
                                className="bg-amazon_blue-light"
                            >
                                    <ListItemAvatar>
                                        <Avatar />
                                    </ListItemAvatar>

                                    <ListItemText 
                                        primaryTypographyProps={{color: "white"}}
                                        primary="Hello, Sign in" 
                                    />
                            </ListItemButton>
                        </Link>

                        {drawerListItems.map(listItem => (
                            <Fragment key={listItem.title}>
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
                                    item.isCollapseListItem ? 
                                    <AllTabCollapseListItem 
                                        key={item} 
                                        item={item}
                                        onClick={handleCloseDrawer} 
                                    /> :
                                    <AllTabListItem 
                                        key={item} 
                                        item={item} 
                                        onClick={handleCloseDrawer}
                                    />
                                ))}

                                <Divider />
                            </Fragment>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </Fragment>
    )
};

export default AllTab;