import { useState, Fragment } from "react";
import Link from 'next/link';
import validator from "validator";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LogoButtonWhite from "../../components/ui/logo-button-white";

function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

    const handleSetEmail = event => {
        setEmail(event.target.value)
    };

    const handleIsValidEmail = () => {
        if (!validator.isEmail(email)) {
            setIsValidEmail(false);
            setButtonIsDisabled(true);
            return;
        }

        setButtonIsDisabled(false);
        setIsValidEmail(true);
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

                <Paper
                    className="border-gray-300 border-solid border-2 rounded-lg p-8 w-[400px]"
                >
                    <Typography variant="h5">Password Assistance</Typography>

                    <Typography variant="caption">
                        Enter the email address associated with your Amazon account.
                    </Typography>

                    <TextField 
                        label="Email" 
                        error={!isValidEmail}
                        helperText={isValidEmail ? null : "Please input valid email address"}
                        id="email"
                        variant="standard"
                        size="small"
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleSetEmail}
                        onBlur={handleIsValidEmail}
                    />

                    <Button 
                        fullWidth
                        variant="contained"
                        className="mt-3 mb-5"
                        disabled={buttonIsDisabled}
                    >
                        Continue
                    </Button>
                    
                    <Button 
                        variant="text" className="normal-case block mt-2"
                    >
                        <Link href="/auth/login">
                            Back to login page
                        </Link>
                    </Button>
                </Paper>
            </Box>
        </Box>
    )
};

export default ForgotPasswordPage;