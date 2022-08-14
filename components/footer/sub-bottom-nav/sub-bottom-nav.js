import { Fragment } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Hidden from "@mui/material/Hidden";

import subLinkMenu from "./data/sub-link-menu-data";
import SubAccessibilityNav from "./sub-accessibility-nav";
import ContactInfo from "./contact-info";

function SubBottomNav() {
    //Hidden xsUp hides component when screen size is equal or greater than xs. xsDown means the component will hide at xs breakpoint or below. 
    return (
        <Fragment>
            <Box className="bg-amazon_blue-dark justify-evenly">
                <SubAccessibilityNav />
                <Grid 
                    container
                    className="justify-center"
                >
                    <Grid 
                        sx={{                     
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: 300,
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            paddingY: "1rem"
                        }}
                        className="flex-col sm:flex-row"
                        item
                        xs={12}
                    >
                        {subLinkMenu.map(item => (
                            <Fragment key={item.title}>
                                <p className="hover:cursor-not-allowed hover:underline mx-4 my-1 p-1">
                                    {item.title}
                                </p>    

                                <Hidden xsDown>
                                    { item.title === "Tokushoho" ? null :
                                    <Divider 
                                        orientation="vertical"
                                        flexItem
                                        variant="middle"
                                        className="border-white"
                                    />}
                                </Hidden>
                            </Fragment>
                        ))}
                    </Grid>

                    <Grid      
                        sx={{                     
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: 300,

                        }}
                        className="py-2"
                        item
                        xs={12}
                    >
                        <ContactInfo />     
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
};

export default SubBottomNav;