import Link from 'next/link';
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LogoButtonWhite from "../../components/ui/logo-button-white";
import FormikOTP from "../../components/ui/forms/formik-otp";
import { OTP_SCHEMA } from "../../components/ui/forms/form-schema";

const VERIFY_USER_FORM = {
    OTP: ""
};

const VERIFY_USER_FORM_VALIDATION = Yup.object().shape({
    OTP: OTP_SCHEMA,
});

function VerifyUserPage() {
    const handleVerifyUserForm = async (values) => {
        const LOGIN_API = getAPI(process.env.NEXT_PUBLIC_LOGIN_API);

        const data = await axios.post(LOGIN_API, values);

        dispatch(authActions.login());

        router.push('/reset-password');

        return data;
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

                                <Button 
                                    fullWidth
                                    variant="contained"
                                    className="mt-3 mb-5"
                                    disabled={touched.OTP && errors.OTP}
                                >
                                    Continue
                                </Button>

                                <Button 
                                    fullWidth
                                    variant="text"
                                    className="mb-5"
                                    disableRipple
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