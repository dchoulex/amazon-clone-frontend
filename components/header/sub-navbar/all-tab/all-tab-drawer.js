import {  Fragment } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";

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

import { drawerListItems } from "./data/all-tab-data";
import AllTabListItem from "./all-tab-list-item";
import AllTabCollapseListItem from "./all-tab-collapse-list-item";
import { snackbarActions } from "../../../../store/snackbar-slice";
import { authActions } from "../../../../store/auth-slice";
import { userActions } from "../../../../store/user-slice";
import { checkoutActions } from "../../../../store/checkout-slice";

function AllTabDrawer(props) {
    const { name, setOpenDrawer, openDrawer } = props;

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const router = useRouter();
    const dispatch = useDispatch();
    
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const handleCloseDrawer = () => setOpenDrawer(false);

    const handleOpenDrawer = () => setOpenDrawer(true);

    const handleSignOut = async() => {
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_SIGNOUT_API);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true,
                    type: "success",
                    message: "Successfully logged out."
                }))
    
                dispatch(authActions.logout());

                dispatch(userActions.reinitialize());

                dispatch(checkoutActions.reinitialize());
    
                setOpenDrawer(false);
    
                router.push("/");
            }
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }))
        }
    };

    return (
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
                            <Button variant="outlined" onClick={handleSignOut}>
                                Sign out
                            </Button>
                        </ListItemButton> :
                        
                        <Link href="/auth/login">
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
    )
};

export default AllTabDrawer;