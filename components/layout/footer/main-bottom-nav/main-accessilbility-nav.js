import * as React from "react";
import { mainAccessibilityData } from "./data/main-accessibility-data";
import Grid from '@mui/material/Grid';

function MainAccessibilityNav() {
    return (
        <React.Fragment>
                <Grid 
                    direction="row"
                    container 
                    className="justify-evenly w-screen"
                >
                    {mainAccessibilityData.map(rowItem =>(
                    <Grid
                        key={rowItem.title} 
                        item 
                        lg={3}
                        md={6}
                        sm={12}
                        xs={12}
                    >
                        <Grid 
                            direction="column"
                            container  
                            className="p-5"
                        >
                            <Grid 
                                item 
                                className="text-white font-medium text-lg m-1"
                            >
                                {rowItem.title}
                            </Grid>
                            {rowItem.items.map(columnItem => (
                                <Grid 
                                    key={columnItem.title}
                                    item 
                                    className="text-gray-300 font-light m-1 text-base hover:cursor-not-allowed"
                                >
                                    {columnItem.title}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>))}
                </Grid>
        </React.Fragment>
    )
};

export default MainAccessibilityNav;