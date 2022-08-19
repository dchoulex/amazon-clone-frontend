import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';

function MyProfileCard() {
    return (
        <Box px={3} pb={4} pt={2}>
            <Paper className="p-5 border-2 border-solid border-gray-300 flex">
                <IconButton>
                    <Avatar
                        alt="Remy Sharp"
                        src="/images/"
                        sx={{ width: 120, height: 120 }}
                    />
                </IconButton>

                <Divider 
                    orientation="vertical" 
                    flexItem 
                    className="border-gray-300 mx-10"
                />

                <Box className="flex flex-col">
                    <Typography variant="h5">Fever Pitch</Typography>

                    <Box sx={{ width: 300 }}>
                        <Grid container>
                            <Grid item container className="mb-1 mt-4">
                                <Grid item xs={6}> 
                                    <Typography className="font-bold">Email :</Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography>Something@somtehing.com</Typography>
                                </Grid>
                            </Grid>

                            <Grid item container className="my-1">
                                <Grid item xs={6}>
                                    <Typography className="font-bold">Phone number :</Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography>xxx-xxxx</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                    <Stack direction="row" spacing={3} mt={2}>
                        <Button size="small" variant="contained">Change password</Button>
                        <Button size="small" variant="outlined">Change account</Button>
                    </Stack>
                </Box>

                <Box className="ml-auto flex flex-col">
                    <IconButton color="primary">
                        <EditIcon />
                    </IconButton>
                    <Typography variant="caption" className="pl-2">Edit</Typography>
                </Box>
            </Paper>
        </Box>
    )
};

export default MyProfileCard;