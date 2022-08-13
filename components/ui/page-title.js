import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function PageTitle(props) {
    const { title, numberOfResults } = props;

    return (
        <Box className="bg-white p-5 pb-2">
            <Typography variant="h4" className="font-light mb-2">
                {title}
            </Typography>
        
            <Typography 
                variant="overline" 
                className="text-base font-light"
            >
                {numberOfResults} items
            </Typography>

            {title === "Shopping Cart" &&
                <Stack direction="row" spacing={2} className="mt-4">
                    <Button 
                        disableRipple 
                        color="error"
                        className="normal-case text-base hover:bg-inherit p-0"
                    >
                        Deselect all items
                    </Button> 
                </Stack>
            }
        </Box>
    )
};

export default PageTitle;