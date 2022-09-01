import { Fragment } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Tooltip from "@mui/material/Tooltip";

import { mainAccessibilityData } from "./data/main-accessibility-data";

function MainAccessibilityNav() {
    return (
        <Fragment>
            <Box className="p-5">
                <Grid 
                    direction="row"
                    container 
                >
                    {mainAccessibilityData.map(rowItem =>(
                        <Grid
                            key={rowItem.title} 
                            item 
                            lg={3}
                            md={6}
                            sm={12}
                            xs={12}
                            className="p-5"
                        >
                            <Grid 
                                container
                                direction="column"
                            >
                                <Grid 
                                    item 
                                    className="text-white font-medium text-lg py-2"
                                >
                                    {rowItem.title}
                                </Grid>

                                {rowItem.items.map((columnItem, index) => (
                                    <Tooltip 
                                        key={`main-accessibility-${index}`}
                                        title="Not available yet"
                                    >
                                        <Grid 
                                            item 
                                            className="text-gray-300 font-light text-base hover:cursor-not-allowed py-1"
                                        >
                                            {columnItem.title}
                                        </Grid>
                                    </Tooltip>
                                ))}
                            </Grid>
                        </Grid>))}
                </Grid>
            </Box>
        </Fragment>
    )
};

export default MainAccessibilityNav;