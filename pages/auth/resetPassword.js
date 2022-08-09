import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import LogoButtonWhite from "../../components/ui/logo-button-white";

function ResetPasswordPage() {
    const [newPassword, setNewPassword] = React.useState("");
    const [isValidPassword, setIsValidPassword] = React.useState(true);
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [areSamePassword, setAreSamePassword] = React.useState(true);
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [showNewPassword, setShowNewPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleCheckIsValidPassword = event => {
        const password = event.target.value;

        if (password === "") {
            setIsValidPassword(false);
            return;
        };

        if (confirmPassword !== "" || password === confirmPassword) {
            setAreSamePassword(true);
            setIsDisabled(false);
        };

        if (confirmPassword !== "" && password !== confirmPassword) {
            setAreSamePassword(false);
            setIsDisabled(true);
        };

        setIsValidPassword(true);
    };

    const handleSetNewPassword = event => {
        setNewPassword(event.target.value);
    };

    const handleCheckAreSamePassword = event => {
        if (event.target.value === newPassword) {
            setAreSamePassword(true);
            setIsDisabled(false);
            return;
        };

        setIsDisabled(true);
        setAreSamePassword(false);
    };

    const handleSetConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    };

    const handleClickShowNewPassword = () => {
        setShowNewPassword(!showNewPassword)
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
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
                    <Typography variant="h5">Create new password</Typography>
                    <Typography variant="subtitle2">
                        We'll ask for this password whenever you Sign-In.
                    </Typography>
                    <TextField 
                        label="New password" 
                        id="new-password"
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        variant="standard"
                        size="small"
                        fullWidth
                        margin="normal"
                        required
                        error={!isValidPassword}
                        helperText={!isValidPassword ? "This field is required" : null}
                        InputProps={{
                            endAdornment: 
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowNewPassword}
                                >
                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }}
                        onBlur={handleCheckIsValidPassword}
                        onChange={handleSetNewPassword}
                    />
                    <TextField 
                        label="Confirm password" 
                        id="confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        variant="standard"
                        size="small"
                        fullWidth
                        margin="normal"
                        required
                        error={!areSamePassword}
                        helperText={!areSamePassword ? "The password are different. Please input the same password." : null}
                        InputProps={{
                            endAdornment: 
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowConfirmPassword}
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }}
                        onBlur={handleCheckAreSamePassword}
                        onChange={handleSetConfirmPassword}
                    />
                    <Button 
                        fullWidth
                        disableRipple
                        disabled={isDisabled}
                        variant="contained"
                        className="my-5 normal-case"
                    >
                        Save Changes and Sign-In
                    </Button>
                </Paper>
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