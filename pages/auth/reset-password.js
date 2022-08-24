import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import Link from 'next/link';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import FormikPassword from "../../components/ui/forms/formik-password";
import { PASSWORD_SCHEMA, CONFIRM_PASSWORD_SCHEMA } from "../../components/ui/forms/form-schema";
import LogoButtonWhite from "../../components/ui/logo-button-white";

const RESET_PASSWORD_FORM_INITIAL_STATE = {
    password: "",
    confirmPassword: ""
};

const RESET_PASSWORD_FORM_VALIDATION = Yup.object().shape({
    password: PASSWORD_SCHEMA,
    confirmPassword: CONFIRM_PASSWORD_SCHEMA
});

function ResetPasswordPage() {
    const dispatch = useDispatch();

    const handleSubmitResetPasswordForm = async (values) => {
        const SIGN_UP_API = getAPI(process.env.NEXT_PUBLIC_SIGN_UP_API);

        const data = await axios.post(SIGN_UP_API, values);

        dispatch(authActions.login());

        router.push('/');

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

                                <Button 
                                    fullWidth
                                    disableRipple
                                    disabled={(touched.confirmPassword && errors.confirmPassword) || (touched.password && errors.password) ? true : false }
                                    variant="contained"
                                    className="my-5"
                                >
                                    Save changes
                                </Button>
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