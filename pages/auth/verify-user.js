import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LogoButtonWhite from "../../components/ui/logo-button-white";
import FormikOTP from "../../components/ui/forms/formik-otp";
import { OTP_SCHEMA } from "../../components/ui/forms/form-schema";
import { snackbarActions } from '../../store/snackbar-slice';
import FormikSubmitButton from '../../components/ui/forms/formik-submit-button';
import { authActions } from '../../store/auth-slice';

const VERIFY_USER_FORM = {
    OTP: ""
};

const VERIFY_USER_FORM_VALIDATION = Yup.object().shape({
    OTP: OTP_SCHEMA
});

function VerifyUserPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const email = useSelector(state => state.auth.email);

    useEffect(() => {
        if (!email || email === "") {
            router.push("/auth/forgot-password");

            return;
        }
    }, [ email, router ])

    const handleVerifyUserForm = async(values) => {
        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_VERIFY_OTP_API, values);

            if (res.status === 200) {
                router.push("/auth/reset-password");

                dispatch(authActions.setOTP({ OTP: values.OTP }));
            }
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "OTP is invalid."
            }))
        }
    };

    const handleResendOTP = async() => {
        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_FORGOT_PASSWORD_API, { email });

            if (res.status === 200) {
                router.push('/auth/verify-user');

                dispatch(snackbarActions.setSnackbarState({
                    open: true , 
                    type: "success", 
                    message: "Successfully resend OTP."
                }))
            };
        } catch(err) {
            dispatch(snackbarActions.setSnackbarState({
                open: true , 
                type: "error", 
                message: "No user found."
            }))
        }
    }

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
                    initialValues={{...VERIFY_USER_FORM}}
                    validationSchema={VERIFY_USER_FORM_VALIDATION}
                    onSubmit={handleVerifyUserForm}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Paper
                                className="border-gray-300 border-solid border-2 rounded-lg p-8 w-[400px]"
                            >
                                <Typography variant="h5">
                                    Verification Required
                                </Typography>

                                <Typography variant="subtitle2">
                                    To continue, complete this verification step. We&apos;ve sent a One Time Password (OTP) to your email. Please enter it below.
                                </Typography>

                                <Typography 
                                    variant="body1" 
                                    mt={2}
                                >
                                    Your OTP will expires in 2 minutes.
                                </Typography>

                                <Typography variant="body1" className="mt-5 font-bold">
                                    Enter OTP
                                </Typography>

                                <FormikOTP 
                                    name="OTP" 
                                    label="OTP"
                                />

                                <FormikSubmitButton 
                                    fullWidth
                                    variant="contained"
                                    className="mt-3 mb-5"
                                    disabled={touched.OTP && errors.OTP}
                                >
                                    Continue
                                </FormikSubmitButton>

                                <Button 
                                    fullWidth
                                    variant="text"
                                    className="mb-5"
                                    disableRipple
                                    onClick={handleResendOTP}
                                >
                                    Resend OTP
                                </Button>
                                
                                <Button 
                                    variant="text" className="normal-case block mt-2"
                                >
                                    <Link href="/auth/login">
                                        Back to login page
                                    </Link>
                                </Button>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
};

export default VerifyUserPage;