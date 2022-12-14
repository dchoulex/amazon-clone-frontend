import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";

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
import ConfirmDeleteDialog from "./confirm-delete-dialog";
import { snackbarActions } from "../../store/snackbar-slice";
import ChangePasswordForm from "./change-password-form";
import PageSpinner from "../ui/pageSpinner";
import ErrorInfo from "../ui/dogs-info/error-info";
import getImagePath from "../../utils/getImagePath";

function MyProfileCard(props) {
    const router = useRouter();
    const dispatch = useDispatch();

    const [ openEditProfileForm, setOpenEditProfileForm ] = useState(false);
    const [ openConfirmDeleteDialog, setOpenConfirmDeleteDialog ] = useState(false);
    const [ openChangePasswordForm, setOpenChangePasswordForm ] = useState(false);
    const [ dataIsChanging, setDataIsChanging ] = useState(false);
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const snackbarIsOpen = useSelector(state => state.snackbar.open);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error, isValidating } = useSWR(process.env.NEXT_PUBLIC_GET_MY_PROFILE_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />

    if (!isValidating && dataIsChanging && !snackbarIsOpen) {
        dispatch(snackbarActions.setSnackbarState({
            open: true,
            type: "info",
            message: "Revalidating..."
        }));
    };
    
    if (isValidating && dataIsChanging) {
        setDataIsChanging(false);
    
        dispatch(snackbarActions.closeSnackbar());
    };

    const resData = data.data;

    const user = {
        name: resData.name,
        email: resData.email,
        phoneNumber: resData.phoneNumber
    };

    const handleOpenEditProfileForm = () => {
        setOpenEditProfileForm(true);
    };

    const handleOpenConfirmDeleteDialog = async() => {
        setOpenConfirmDeleteDialog(true);
    };

    const handleOpenChangePasswordForm = () => {
        setOpenChangePasswordForm(true)
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
                            src={getImagePath(user.email)}
                            sx={{ width: 120, height: 120 }}
                        />
                    </IconButton>

                    <Box ml={4} className="flex flex-col">
                        <Typography variant="h4" className="mt-2">
                            {user.name}
                        </Typography>

                        <Stack direction="row" spacing={3} mt="auto" pb={1}>
                            <Button  
                                variant="contained"
                                onClick={handleOpenChangePasswordForm}
                            >
                                Change password
                            </Button>

                            <ChangePasswordForm 
                                openChangePasswordForm={openChangePasswordForm}
                                setOpenChangePasswordForm={setOpenChangePasswordForm}
                            />
        
                            <Button 
                                variant="outlined" 
                                color="error"
                                onClick={handleOpenConfirmDeleteDialog}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Delete account"}
                            </Button>

                            <ConfirmDeleteDialog
                                openConfirmDeleteDialog={openConfirmDeleteDialog}
                                setOpenConfirmDeleteDialog={setOpenConfirmDeleteDialog}
                                setIsSubmitting={setIsSubmitting}
                                isSubmitting={isSubmitting}
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
                        
                        <Typography 
                            variant="caption" 
                            className="pl-2"
                        >
                            Edit
                        </Typography>

                        <EditProfileForm 
                            user={user}
                            openEditProfileForm={openEditProfileForm}
                            setOpenEditProfileForm={setOpenEditProfileForm}
                            setDataIsChanging={setDataIsChanging}
                        />
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
        </Box>
    )
};

export default MyProfileCard;