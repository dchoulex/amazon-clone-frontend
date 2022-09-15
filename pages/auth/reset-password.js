import { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import FormikPassword from "../../components/ui/forms/formik-password";
import { PASSWORD_SCHEMA, CONFIRM_PASSWORD_SCHEMA } from "../../components/ui/forms/form-schema";
import { authActions } from "../../store/auth-slice";
import { snackbarActions } from "../../store/snackbar-slice";
import LogoButtonWhite from "../../components/ui/logo-button-white";
import FormikSubmitButton from "../../components/ui/forms/formik-submit-button";

const RESET_PASSWORD_FORM_INITIAL_STATE = {
    password: "",
    confirmPassword: ""
};

const RESET_PASSWORD_FORM_VALIDATION = Yup.object().shape({
    password: PASSWORD_SCHEMA,
    confirmPassword: CONFIRM_PASSWORD_SCHEMA
});

function ResetPasswordPage() {
    const OTP = useSelector(state => state.auth.OTP);
    const router = useRouter();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (!OTP || OTP === "" || OTP.length !== 6) {
            router.push("/auth/forgot-password");
            return;
        }
    }, [ OTP, router ])

    const handleSubmitResetPasswordForm = async(values) => {
        try {
            const res = await axios.patch(process.env.NEXT_PUBLIC_RESET_PASSWORD_API, values);

            if (res.status === 200) {
                dispatch(snackbarActions.setSnackbarState({
                    open: true, 
                    type: "success", 
                    message: "Successfully reset password."
                }));

                dispatch(authActions.login());

                dispatch(authActions.setOTP({ OTP: null }));

                dispatch(authActions.setUserEmail({ email: null }));
        
                router.replace('/');
            }
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "Oops... Something went wrong."
            }))
        }
    };

    return (
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
                    initialValues={{...RESET_PASSWORD_FORM_INITIAL_STATE}}
                    validationSchema={RESET_PASSWORD_FORM_VALIDATION}
                    onSubmit={handleSubmitResetPasswordForm}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Paper
                                className="border-gray-300 border-solid border-2 rounded-lg p-8 w-[400px]"
                            >
                                <Typography variant="h5">
                                    Create new password
                                </Typography>

                                <Typography variant="subtitle2">
                                    We&apos;ll ask for this password whenever you Sign-In.
                                </Typography>

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
                                    disableRipple
                                    disabled={(touched.confirmPassword && errors.confirmPassword) || (touched.password && errors.password) ? true : false }
                                    variant="contained"
                                    className="my-5"
                                >
                                    Save changes
                                </FormikSubmitButton>
                            </Paper>
                        </Form>
                    )}
                </Formik>

                <Box className="w-[300px] justify-center">
                    <Typography 
                        variant="h6"
                        className="ml-5 mt-5 mb-2"
                    >
                        Secure password tips:
                    </Typography>

                    <ul className="my-0 leading-6 pb-5">
                        <li>Use at least 8 characters, a combination of numbers and letters is best.
                        </li>
                        <li>Do not use the same password you have used with us previously.</li>
                        <li>Do not use dictionary words, your name, e-mail address, mobile phone number or other personal information that can be easily obtained.</li>
                        <li>Do not use the same password for multiple online accounts.</li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
};

export default ResetPasswordPage;