import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';

import { authActions } from "../../store/auth-slice";
import EditProfileForm from "./edit-profile-form";
import ConfirmDeleteDialog from "./confirm-delete-dialog";
import { snackbarActions } from "../../store/snackbar-slice";

function getImagePath(name) {
    let imagePath;

    switch(name) {
        case "User One":
            imagePath = "/images/users/dummy-user-1.jpg";
            break;

        case "User Two":
            imagePath = "/images/users/dummy-user-2.jpg";
            break; 

        case "User Three":
            imagePath = "/images/users/dummy-user-3.jpg";
            break;     

        default:
            break;
    }

    return imagePath
};

function MyProfileCard(props) {
    const { user } = props;
    const router = useRouter();
    const dispatch = useDispatch();

    const [ openEditProfileForm, setOpenEditProfileForm ] = useState(false);
    const [ openConfirmDeleteDialog, setOpenConfirmDeleteDialog ] = useState(false);

    const handleOpenEditProfileForm = () => {
        setOpenEditProfileForm(true);
    };

    const handleOpenConfirmDeleteDialog = async() => {
        setOpenConfirmDeleteDialog(true);
    };

    const handleDelete = async() => {
        try {
            const res = await axios.delete(process.env.NEXT_PUBLIC_DELETE_ACCOUNT_API);

            if (res.status === 204) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully delete item."
                }))
            } 
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }))
        };

        setOpenConfirmDeleteDialog(false);

        dispatch(authActions.logout());

        router.push("/");
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
                            src={getImagePath(user.name)}
                            sx={{ width: 120, height: 120 }}
                        />
                    </IconButton>

                    <Box ml={4} className="flex flex-col">
                        <Typography variant="h4" className="mt-2">
                            {user.name}
                        </Typography>

                        <Stack direction="row" spacing={3} mt="auto" pb={1}>
                            {/* <Link href="/auth/reset-password">
                                <Button  
                                    variant="contained"
                                >
                                    Change password
                                </Button>
                            </Link> */}

                            {/* <Link href="/auth/login">
                                <Button size="small" variant="outlined">
                                    Change account
                                </Button>
                            </Link> */}
        
                            <Button 
                                variant="outlined" 
                                color="error"
                                onClick={handleOpenConfirmDeleteDialog}
                            >
                                Delete account
                            </Button>

                            <ConfirmDeleteDialog
                                openConfirmDeleteDialog={openConfirmDeleteDialog}
                                setOpenConfirmDeleteDialog={setOpenConfirmDeleteDialog}
                                handleDelete={handleDelete}
                            />
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