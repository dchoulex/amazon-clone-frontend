import { useState, Fragment } from "react";
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../public/images/jp-flag-icon.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CountrySelectionButton() {
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
                className="p-0 flex-none ml-16px h-56px"
                aria-owns={anchorEl ? "country-selection-menu" : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={handleOpen}
            >
                <SvgIcon component={JapanIcon} inheritViewBox />
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
                {/* <MenuItem>Change language</MenuItem> */}
                <MenuItem 
                    onClick={handleClose}
                >
                    <SvgIcon 
                        component={JapanIcon} inheritViewBox 
                    />
                    <Typography>
                        You are shopping on Amazon.co.jp
                    </Typography>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
                    <Link href="/thisWorks">
                        <Typography 
                            color="primary">
                            Change country/region
                        </Typography>
                    </Link>
                </MenuItem> */}
            </Menu>
        </Fragment>
    )
};

export default CountrySelectionButton;