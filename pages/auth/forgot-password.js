import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Link from 'next/link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { authActions } from "../../store/auth-slice";
import { EMAIL_SCHEMA } from "../../components/ui/forms/form-schema";
import FormikSubmitButton from "../../components/ui/forms/formik-submit-button";
import FormikEmail from "../../components/ui/forms/formik-email";
import LogoButtonWhite from "../../components/ui/logo-button-white";

const FORGOT_PASSWORD_FORM_INITIAL_STATE = {
    email: ""
};

const FORGOT_PASSWORD_FORM_VALIDATION = Yup.object().shape({
    email: EMAIL_SCHEMA
});

function ForgotPasswordPage() {
    const dispatch = useDispatch();

    const handleSubmitForgotPasswordForm = async (values) => {
        const FORGOT_PASSWORD_API = getAPI(process.env.NEXT_PUBLIC_FORGOT_PASSWORD_API);

        const data = await axios.post(FORGOT_PASSWORD_API, values);

        dispatch(authActions.login());

        router.push('/auth/verify-user')

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
                    initialValues={{ ...FORGOT_PASSWORD_FORM_INITIAL_STATE }}
                    validationSchema={FORGOT_PASSWORD_FORM_VALIDATION}
                    onSubmit={handleSubmitForgotPasswordForm}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Paper
                                className="border-gray-300 border-solid border-2 rounded-lg p-8 w-[400px]"
                            >
                                <Typography variant="h5">Password Assistance</Typography>

                                <Typography variant="caption">
                                    Enter the email address associated with your Amazon account.
                                </Typography>

                                <FormikEmail 
                                    name="email"
                                    label="Email" 
                                />

                                <FormikSubmitButton 
                                    fullWidth
                                    variant="contained"
                                    className="mt-3 mb-5"
                                    disabled={(touched.email && errors.email) ? true : false}
                                >
                                    Continue
                                </FormikSubmitButton>
                                
                                <Link href="/auth/login">
                                    <Button 
                                        variant="text" className="normal-case block mt-2"
                                    >
                                            Back to login page
                                    </Button>
                                </Link>
                            </Paper>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    )
};

export default ForgotPasswordPage;