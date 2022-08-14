import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import subAccessibilityData from "./data/sub-accessibility-data";

function SubAccessibilityNav() {

    return (
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
    )
};

export default SubAccessibilityNav;