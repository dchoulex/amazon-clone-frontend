import { useState, Fragment } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function AccountButton() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = event => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = event => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <Fragment>
            <Button 
                className="normal-case text-white mx-1 h-56px flex-none"
                aria-owns={anchorEl ? "country-selection-menu" : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={handleOpen}
            >
                <Box className="text-left w-max flex-col">
                    <Typography className="text-zinc-400 text-sm">
                        Hello, Sign in
                    </Typography>

                    <Typography className="text-base">
                    Account & Lists
                    </Typography>
                </Box>

                <ArrowDropDownIcon className="text-gray-400" />
            </Button>

            <Menu   
                id="country-selection-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem 
                    onClick={handleClose}
                >
                    <Typography>
                        This is account button menu
                    </Typography>
                </MenuItem>
            </Menu>
        </Fragment>
    )
};

export default AccountButton;