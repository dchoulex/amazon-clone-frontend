import { useState, Fragment } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';

function AccountButton() {
    const [anchorEl, setAnchorEl] = useState(null);
    const isLogin = false;
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
  
    return (
        <Fragment>
            <Button 
                className="normal-case text-white h-56px flex-none"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <PersonIcon />

                <Box className="text-left flex-col ml-2">
                    <Typography className="text-zinc-400 text-sm">
                        Hello, Sign in
                    </Typography>

                    <Typography className="text-base">
                        My Account
                    </Typography>
                </Box>

                <ArrowDropDownIcon className="text-gray-400" />
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {isLogin &&
                    <Link href="/account">
                        <MenuItem 
                            onClick={handleClose} 
                            sx={{ justifyContent: "center" }}
                            disableRipple
                        >
                            <Button variant="contained" >
                                Account
                            </Button>
                        </MenuItem>
                    </Link>
                }

                <Link href={isLogin ? "/" : "/auth/login"}>
                    <MenuItem 
                        onClick={handleClose}   
                        sx={{ 
                            justifyContent: "center",
                            "&:hover": {
                                backgroundColor: "white"
                            },
                            pb: 2
                        }}
                        divider
                        disableRipple
                    >
                        <Button variant="outlined" >
                            {isLogin ? "Logout" : "Login"}
                        </Button>
                    </MenuItem>
                </Link>

                {!isLogin &&
                    <Fragment>
                        <MenuItem
                            onClick={handleClose}   
                            sx={{ 
                                justifyContent: "center",
                                "&:hover": {
                                    backgroundColor: "white"
                                }
                            }}
                            disableRipple
                        >
                            <Typography 
                                px={2} 
                                pt={1}
                                variant="outlined"
                            >
                                New to Amazon?
                            </Typography>
                        </MenuItem>

                        <Link href="/auth/sign-up">
                            <MenuItem 
                                onClick={handleClose}   
                                sx={{ 
                                    justifyContent: "center",
                                    "&:hover": {
                                        backgroundColor: "white"
                                    } 
                                }}
                                disableRipple
                            >
                                <Button variant="contained" >
                                    Sign Up
                                </Button>
                            </MenuItem>
                        </Link>                
                    </Fragment>
                }
            </Menu>

            
        </Fragment>
    )
};

export default AccountButton;