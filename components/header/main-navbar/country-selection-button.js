import { useState, Fragment } from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../public/images/jp-flag-icon.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CountrySelectionButton() {
    const [anchorEl, setAnchorEl] = useState(null);
    const isLogin = true;

    const open = Boolean(anchorEl);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    return (
        <Fragment>
            <Button 
                className="p-0 flex-none mx-1 h-56px"
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <SvgIcon component={JapanIcon} inheritViewBox />

                <ArrowDropDownIcon className="text-gray-400" />
            </Button>

            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Paper sx={{ p: 2 }}>
                    You are shopping on Amazon Japan.
                </Paper>
            </Popover>
        </Fragment>
    )
};

export default CountrySelectionButton;