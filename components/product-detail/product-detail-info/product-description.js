import { useState } from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function ProductDescription(props) {
    const { title, description } = props;

    const [isCollapse, setIsCollapse] = useState(false);
    const handleToggleCollapse = () => {
        setIsCollapse(!isCollapse);
    };

    return (
        <Box className="pb-10 lg:pl-5">
            <Typography variant="h4" mb={2}>
                {title}
            </Typography>

            <Divider className="border-gray-300"/>

            <Box>
                <Collapse in={isCollapse} collapsedSize={400}>
                    <Typography 
                        variant="body1" 
                        mt={2}
                    >
                        {description}
                    </Typography>
                </Collapse>
            </Box>
            
            <Stack className="flex">
                {!isCollapse && 
                    <Button 
                        variant="text" 
                        endIcon={<ExpandMoreIcon />}
                        disableRipple
                        className="normal-case hover:bg-inherit ml-auto py-4"
                        onClick={handleToggleCollapse}
                    >
                        See more
                    </Button>
                }

                {isCollapse &&            
                    <Button 
                        variant="text" 
                        endIcon={<ExpandLessIcon />}
                        disableRipple
                        className="normal-case hover:bg-inherit ml-auto py-4"
                        onClick={handleToggleCollapse}
                    >
                        See less
                    </Button>
                }
            </Stack>
        </Box>
    )
};

export default ProductDescription;