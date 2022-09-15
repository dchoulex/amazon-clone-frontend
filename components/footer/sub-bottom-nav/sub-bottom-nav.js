import { Fragment } from "react";
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import subLinkMenu from "./data/sub-link-menu-data";
import subAccessibilityData from "./data/sub-accessibility-data";
import ContactInfo from "./contact-info";

function SubBottomNav() {
    const theme = useTheme();
    // const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Fragment>           
            <Box className="bg-amazon_blue-dark">
                <div>
                    <Grid container direction="column">
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