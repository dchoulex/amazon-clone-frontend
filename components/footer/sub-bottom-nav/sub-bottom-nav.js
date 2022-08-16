import { Fragment } from "react";
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import subLinkMenu from "./data/sub-link-menu-data";
import subAccessibilityData from "./data/sub-accessibility-data";
import ContactInfo from "./contact-info";

function SubBottomNav() {
    const theme = useTheme();
    const isXsUp = useMediaQuery(theme.breakpoints.up("xs"));
    //Hidden xsUp hides component when screen size is equal or greater than xs. xsDown means the component will hide at xs breakpoint or below. 
    return (
        <Fragment>
            <Box className="bg-amazon_blue-dark">
                <div>
                    <Grid 
                        container
                        spacing={1}
                        className="p-2"
                    >
                        {subAccessibilityData.map(item => (
                            <Grid
                                key={item.title}
                                item
                                md={3}
                                sm={6}
                                xs={12}
                                className="md:flex md:justify-center hover:cursor-not-allowed"
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
                </div>

                <div>
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
                                <Box key={item.title} className="flex">
                                    <Tooltip title="Not available yet">
                                        <Box 
                                            className="hover:cursor-not-allowed hover:underline mx-4 my-1 p-1"
                                        >
                                            {item.title}
                                        </Box>    
                                    </Tooltip>
                                    <Divider 
                                        orientation="vertical" 
                                        variant="middle"
                                        flexItem
                                        sx={{borderColor: "white" }}
                                    />
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
                </div>
            </Box>
        </Fragment>
    )
};

export default SubBottomNav;