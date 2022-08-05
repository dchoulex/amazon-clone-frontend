import * as React from "react";
import { drawerListItems } from "./all-tab-data";
import { makeStyles } from "@mui/styles";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from "@mui/material/ListItemText";
import Divider from '@mui/material/Divider';
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from '@mui/icons-material/Menu';

import AllTabListItem from "./all-tab-list-item";
import AllTabCollapseListItem from "./all-tab-collapse-list-item";

function AllTab() {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

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
                                    item.isCollapseListItem ? 
                                    <AllTabCollapseListItem key={item} item={item} /> :
                                    <AllTabListItem key={item} item={item} />
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