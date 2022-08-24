import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from 'next/link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Draggable from 'react-draggable';
import DialogContentText from '@mui/material/DialogContentText';

import { authActions } from "../../store/auth-slice";
import LogoButtonWhite from "../../components/ui/logo-button-white";
import FormikTextField from "../../components/ui/forms/formik-text-field";
import FormikEmail from "../../components/ui/forms/formik-email";
import FormikPassword from "../../components/ui/forms/formik-password";
import FormikSubmitButton from "../../components/ui/forms/formik-submit-button";
import getAPI from "../../utils/getAPI";
import { CONFIRM_PASSWORD_SCHEMA, EMAIL_SCHEMA, NAME_SCHEMA, PASSWORD_SCHEMA } from "../../components/ui/forms/form-schema";

const dialogContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla porttitor erat, sed lobortis dui varius a. Nunc feugiat, neque vitae semper congue, libero urna scelerisque velit, at tempus enim augue sit amet dolor. Sed eu congue velit. Nulla porttitor porttitor felis, sit amet aliquet nibh aliquam nec. Suspendisse pretium est lorem, et maximus dolor dictum vel. Praesent consequat eu lorem sit amet ullamcorper. Morbi sem velit, venenatis eu mi pulvinar, cursus luctus magna. Ut nec urna lacus. Sed cursus dolor dui, in faucibus velit elementum vitae. Maecenas ornare sagittis arcu, ac dapibus erat maximus vel. Donec eget est luctus, commodo ipsum vel, convallis orci. Vivamus purus ipsum, sodales elementum neque a, malesuada cursus magna. Ut sit amet eros non tellus luctus pharetra id id odio. Aenean euismod vitae nibh ut tincidunt.

    Ut at pharetra ex. Vestibulum est est, viverra in enim sed, elementum vestibulum nulla. Sed sit amet libero laoreet, dapibus ex eu, lacinia erat. Mauris pharetra est sit amet odio pellentesque, sit amet ornare elit accumsan. Vestibulum hendrerit orci cursus, ullamcorper nisi ornare, fermentum sem. Aliquam erat volutpat. Aenean arcu massa, eleifend sed porta id, sollicitudin sed nisi. Nullam porttitor convallis felis, at blandit nibh pulvinar non. Proin viverra lacinia est, aliquet consectetur orci malesuada fermentum. Nunc laoreet felis eu ante interdum hendrerit. Praesent elementum ut ipsum id porta. Morbi in ante mi.

    Nulla congue eu nibh eget vestibulum. Vivamus purus mi, semper at mattis id, rutrum in nulla. Cras egestas urna a lacus iaculis, ac hendrerit turpis euismod. Curabitur vehicula quam nec ipsum tempus posuere sit amet sed neque. Proin ac iaculis nisi. Duis ut quam ut urna interdum rutrum. Vivamus in leo id neque volutpat mattis. Cras tempus et leo nec tincidunt. Nam elementum nibh sit amet metus dictum mattis. Aenean tempor tincidunt mollis.

    Morbi tempor nisi sit amet congue suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In efficitur augue eu magna pretium dictum. Nulla id accumsan quam. Maecenas porttitor pretium turpis. Ut felis ipsum, pellentesque id tellus eu, feugiat fermentum dolor. Nullam a ex massa. Aenean sed imperdiet dolor. Nam a diam vestibulum tellus pharetra semper.
`;

const SIGN_UP_FORM_INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
};

const SIGN_UP_FORM_VALIDATION = Yup.object().shape({
    name: NAME_SCHEMA,
    email: EMAIL_SCHEMA,
    password: PASSWORD_SCHEMA,
    confirmPassword: CONFIRM_PASSWORD_SCHEMA
});

function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
};

function SignUpPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [ conditionsIsOpen, setConditionsIsOpen ] = useState(false);
    const [ privacyIsOpen, setPrivacyIsOpen ] = useState(false);

    const handleOpenConditions = () => {
        setConditionsIsOpen(true);
    };

    const handleCloseConditions = () => {
        setConditionsIsOpen(false);
    };

    const handleOpenPrivacy = () => {
        setPrivacyIsOpen(true);
    };

    const handleClosePrivacy = () => {
        setPrivacyIsOpen(false);
    };

    const handleSubmitSignUpForm = async (values) => {
        const SIGN_UP_API = getAPI(process.env.NEXT_PUBLIC_SIGN_UP_API);

        const data = await axios.post(SIGN_UP_API, values);

        dispatch(authActions.login());

        router.push('/');

        return data;
    };

    return(
        <Box
            sx={{
                width: "100vw",
                height: "100vh"
            }}
            className="flex justify-center bg-white"
        >
            <Box className="flex flex-col pt-8 mb-2">
                <LogoButtonWhite />

                <Formik
                    initialValues={{...SIGN_UP_FORM_INITIAL_STATE}}
                    validationSchema={SIGN_UP_FORM_VALIDATION}
                    onSubmit={handleSubmitSignUpForm}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Paper
                                className="border-gray-300 border-solid border-2 rounded-lg p-8 w-[400px]"
                            >
                                <Typography variant="h5">Create account</Typography>

                                <FormikTextField 
                                    name="name"
                                    label="Name"
                                    variant="standard"
                                    fullWidth
                                    className="my-2"
                                />

                                <FormikEmail 
                                    name="email"
                                    label="Email" 
                                    className="my-2"
                                />

                                <FormikPassword
                                    name="password"
                                    label="Password"
                                    className="my-2"
                                />

                                <FormikPassword
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    className="my-2"
                                />

                                <FormikSubmitButton 
                                    fullWidth
                                    variant="contained"
                                    className="mt-3 mb-5"
                                    disabled={(touched.email && errors.email) || (touched.password && errors.password) || (touched.name && errors.name) || (touched.reEnterPassword && errors.reEnterPassword) ? true : false}
                                >
                                    Sign up
                                </FormikSubmitButton>

                                <Typography variant="caption">
                                    By creating an account, you agree to Amazon&apos;s <a className="text-blue-500 hover:underline hover:cursor-pointer" onClick={handleOpenConditions}>Conditions of Use</a> and <a className="text-blue-500 hover:underline hover:cursor-pointer" onClick={handleOpenPrivacy}>Privacy Notice.</a>
                                </Typography>
                            </Paper>
                        </Form>
                    )}
                </Formik>

                <Divider 
                    className="mt-5 text-blue-500 text-sm border-sky-500"
                    flexItem
                >
                    Already have an account?
                </Divider> 

                <Link href="/auth/login">
                    <Button 
                        variant="outlined" className="my-5"
                        fullWidth
                    >
                        Login
                    </Button>
                </Link>
            </Box>

            <Dialog
                id="conditions-dialog"
                open={conditionsIsOpen}
                onClose={handleCloseConditions}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-conditions-dialog"
            >
                <DialogTitle 
                    style={{ cursor: 'move' }}
                    id="draggable-conditions-dialog"
                >
                    Conditions of Use
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {dialogContent}
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Dialog
                id="privacy-dialog"
                open={privacyIsOpen}
                onClose={handleClosePrivacy}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-privacy-dialog"
            >
                <DialogTitle 
                    style={{ cursor: 'move' }}
                    id="draggable-privacy-dialog"
                >
                    Privacy Notice
                </DialogTitle>
                
                <DialogContent>
                    <DialogContentText>
                        {dialogContent}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Box>
    )
};

export default SignUpPage;