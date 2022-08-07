import * as React from "react";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import subAccessibilityData from "./data/sub-accessibility-data";
import subLinkMenu from "./data/sub-link-menu-data";
import SubAccessibilityNav from "./sub-accessibility-nav";

function SubBottomNav() {
    return (
        <React.Fragment>
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
                            paddingTop: "7px",
                            display: "flex",
                            justifyContent: "center",
                            paddingY: "1rem"
                        }}
                        className="flex-col content-center sm:flex-row"
                        item
                        xs={12}

                    >
                        {subLinkMenu.map(item => (
                            <React.Fragment key={item.title}>
                                <p className="hover:cursor-not-allowed hover:underline mx-4 my-1 p-1">
                                    {item.title}
                                </p>                               
                                { item.title === "Tokushoho" ? null :
                                <Divider 
                                    orientation="vertical"
                                    flexItem
                                    variant="middle"
                                    className="border-white"
                                />}
                            </React.Fragment>
                        ))}
                    </Grid>
                    <Grid      
                        sx={{                     
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: 300,
                            textAlign: "center",
                            paddingTop: "7px",
                            margin: "0 1rem 0 3rem"
                        }}
                        item
                        sm={12}
                    >
                        <Typography 
                            className="text-blue-500 text-base" 
                        >
                            Created by
                            <Link 
                            href="https://www.linkedin.com/in/david-choulex/" 
                            passHref
                        >
                            <a className="hover:underline text-white hover:text-zinc-200 ml-2">David Choulex</a>     
                        </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
};

export default SubBottomNav;