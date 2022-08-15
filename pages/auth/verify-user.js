import { useState, Fragment } from "react";
import Link from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LogoButtonWhite from "../../components/ui/logo-button-white";

function VerifyUserPage() {
    const [isValidOTP, setIsValidOTP] = useState(true);
    const [OTP, setOTP] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const handleCheckIsValidOTP = event => {
        const OTP = event.target.value;

        if (OTP === "" || isNaN(Number(OTP)) || OTP.length !== 6) {
            setIsDisabled(true);
            setIsValidOTP(false);
            return;
        };

        setIsValidOTP(true);
        setIsDisabled(false);
    };

    const handleSetOTP = event => {
        setOTP(event.target.value)
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
                    <Typography variant="h5">Verification Required</Typography>
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
                    <TextField 
                        label="OTP" 
                        id="OTP"
                        value={OTP}
                        variant="outlined"
                        size="small"
                        fullWidth
                        margin="normal"
                        required
                        error={!isValidOTP}
                        helperText={!isValidOTP ? "Please input valid OTP" : null}
                        onBlur={handleCheckIsValidOTP}
                        onChange={handleSetOTP}
                    />
                    <Button 
                        fullWidth
                        variant="contained"
                        className="mt-3 mb-5"
                        disabled={isDisabled}
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
            </Box>
        </Box>
    )
};

export default VerifyUserPage;