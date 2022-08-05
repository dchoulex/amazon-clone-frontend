import * as React from "react";
import { mainAccessibilityData } from "./main-accessibility-data";
import Grid from '@mui/material/Grid';

function MainAccessibilityNav() {
    return (
        <React.Fragment>
                <Grid 
                    direction="row"
                    container 
                    className="justify-evenly"
                >
                    {mainAccessibilityData.map(rowItem =>(
                    <Grid
                        key={rowItem.title} 
                        item 
                    >
                        <Grid 
                            direction="column"
                            container  
                            className="p-5 m-1"
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
                                    className="text-gray-300 font-light m-1 text-base"
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