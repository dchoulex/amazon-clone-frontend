import * as React from "react";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import subAccessibilityData from "./data/sub-accessibility-data";
import subLinkMenu from "./data/sub-link-menu-data";

function SubBottomNav() {
    return (
        <React.Fragment>
            <Box className="bg-amazon_blue-dark justify-evenly">
                <Grid 
                    container
                    spacing={1}
                    className="p-2"
                >
                    {subAccessibilityData.map(item => (
                        <Grid
                            key={item.title}
                            item
                            sm={6}
                            md={3}
                            className="flex justify-center hover:cursor-not-allowed"
                        >
                            <Box className="w-100">
                                <Typography className="text-sm text-gray-200 ">
                                    {item.title}
                                </Typography>
                                <Typography className="text-xs text-zinc-400">
                                    {item.description}
                                </Typography>
                            </Box>
                        </ Grid>
                    ))}
                </Grid>
                <Box 
                    sx={{                     
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: 300,
                        textAlign: "center",
                        paddingTop: "7px",
                        margin: "0 1rem 0 3rem",
                        display: "flex",
                        justifyContent: "center",
                        paddingY: "1rem"
                    }}
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
                    <Box      
                        sx={{                     
                            color: "white",
                            fontSize: "1rem",
                            fontWeight: 300,
                            textAlign: "center",
                            paddingTop: "7px",
                            margin: "0 1rem 0 3rem"
                        }}
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
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
};

export default SubBottomNav;