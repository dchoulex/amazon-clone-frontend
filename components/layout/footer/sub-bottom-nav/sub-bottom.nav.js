import * as React from "react";
import Link from "next/link";
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import subAccessibilityData from "./data/sub-accessibility-data";
import subLinkMenu from "./data/sub-link-menu-data";

// Customization using next js
const StyledLink = styled.a`
    color: #D9D9D9;
    &:hover {
        text-decoration: underline
    };
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0.5rem 1rem
`

function SubBottomNav() {
    return (
        <React.Fragment>
            <Box className="bg-amazon_blue-dark">
                <Grid 
                    container
                    spacing={1}
                    className="p-2"
                >
                    {subAccessibilityData.map(item => (
                        <Grid
                            key={item.title}
                            item
                            xs={6}
                            sm={6}
                            md={3}
                        >
                            <Box className="w-100">
                                <Typography className="text-sm text-gray-200">
                                    {item.title}
                                </Typography>
                                <Typography className="text-xs text-zinc-400">
                                    {item.description}
                                </Typography>
                            </Box>
                            {/* <Box className="bg-inherit w-20"
                            >
                            </Box> */}
                        </ Grid>
                    ))}
                </Grid>
                <Box 
                    sx={{ 
                        display: "flex", 
                        justifyContent: "center",
                        paddingY: "1rem"
                    }}
                >
                    {subLinkMenu.map(item => (
                        <React.Fragment key={item.title}>
                            <Link 
                                href="/" 
                                passHref
                            >
                                <StyledLink>{item.title}</StyledLink>     
                            </Link>
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
                            className="text-zinc-200 text-base" 
                        >
                            Created by
                            <Link 
                            href="https://www.linkedin.com/in/david-choulex/" 
                            passHref
                        >
                            <a className="hover:underline text-white hover:text-blue-400 ml-2">David Choulex</a>     
                        </Link>
                        </Typography>
                    </Box>
                </Box>
             
            
                {/* <List>
                    <ListItemButton>
                        <ListItemText className="text-black normal-case" primary="Test"/>
                    <Divider orientation="vertical" className="" flexItem/>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText className="text-black normal-case" primary="Test2"/>
                    <Divider orientation="vertical" className="" flexItem/>
                    </ListItemButton>
               

                </List> */}
            </Box>


        </React.Fragment>
    )
};

export default SubBottomNav;