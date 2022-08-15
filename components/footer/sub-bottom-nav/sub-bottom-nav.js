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

                <Grid container direction="column">
                    <Grid 
                        sx={{                     
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: 300,
                            textAlign: "center",
                            justifyContent: "center",
                            paddingY: "1rem"
                        }}
                        item
                        className="flex flex-col md:flex-row"
                    >
                        {subLinkMenu.map((item, index) => (
                            <Box key={item.title}>
                                <p className="hover:cursor-not-allowed hover:underline mx-4 my-1 p-1">
                                    {item.title}
                                </p>    

                                <Hidden xsDown>
                                    {index === subLinkMenu.length - 1 || 
                                        <Divider 
                                            orientation="vertical"
                                            flexItem
                                            variant="middle"
                                            className="border-white"
                                        />
                                    }
                                </Hidden>
                            </Box>
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