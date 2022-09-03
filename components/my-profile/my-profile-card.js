import { useState } from "react";
import Link from "next/link";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';

import EditProfileForm from "./edit-profile-form";

function MyProfileCard(props) {
    const { user } = props;
    const [ openEditProfileForm, setOpenEditProfileForm ] = useState(false);

    const handleOpenEditProfileForm = () => {
        setOpenEditProfileForm(true);
    };

    return (
        <Box px={3} pb={4}>
            <Paper className="p-5 border-2 border-solid border-gray-300">
                <Box 
                    className="flex" 
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                    }}
                    py={2}
                >
                    <IconButton>
                        <Avatar
                            alt={user.name}
                            src="/images/"
                            sx={{ width: 120, height: 120 }}
                        />
                    </IconButton>

                    <Box ml={4} className="flex flex-col">
                        <Typography variant="h4" className="mt-2">
                            {user.name}
                        </Typography>

                        <Stack direction="row" spacing={3} mt="auto" pb={2}>
                            <Link href="/auth/reset-password">
                                <Button 
                                    size="small" 
                                    variant="contained"
                                >
                                    Change password
                                </Button>
                            </Link>

                            <Link href="/auth/login">
                                <Button size="small" variant="outlined">
                                    Change account
                                </Button>
                            </Link>
                        </Stack>
                    </Box>

                    <Box className="ml-auto flex flex-col">
                        <IconButton 
                            color="primary" 
                            onClick={handleOpenEditProfileForm} 
                        >
                            <EditIcon />
                        </IconButton>
                        
                        <Typography variant="caption" className="pl-2">Edit</Typography>
                    </Box>
                </Box>

                <Box className="flex" pl={2} pt={2}>
                    <Grid container>
                        <Grid 
                            item 
                            container 
                            className="mb-1 mt-4"
                        >
                            <Grid item xs={2}> 
                                <Typography className="font-bold">Email :</Typography>
                            </Grid>

                            <Grid item xs={10}>
                                <Typography>
                                    {user.email}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid 
                            item 
                            container 
                            className="my-1"
                        >
                            <Grid item xs={2}>
                                <Typography className="font-bold">Phone number :</Typography>
                            </Grid>

                            <Grid item xs={10}>
                                <Typography>
                                    {user.phoneNumber}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>

            <EditProfileForm 
                user={user}
                openEditProfileForm={openEditProfileForm}
                setOpenEditProfileForm={setOpenEditProfileForm}
            />
        </Box>
    )
};

export default MyProfileCard;