import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import InputBase from '@mui/material/InputBase';
import Typography from "@mui/material/Typography";

const searchOptions = ["All Categories", "Clothing", "Bag", "Jewelry", "Computers", "Peripherals", "Office", "Electronics", "Camera", "Food", "Beverage", "Alcohol", "Sports", "Outdoors"];

const EmptyDiv = styled("div")(() =>({
    width: "30px"
}));

const StyledCheckIcon = styled(CheckIcon)(() =>({
    width: "30px"
}));

function CategoryButton() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [categoryIsChange, setCategoryIsChange] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = event => {
        setOpen(prevOpen => !prevOpen);

        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        };

        setOpen(false);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);

        setCategoryIsChange(true);

        setOpen(false);
    };

    return (
        <div>
            <Button 
                className="bg-zinc-200 px-4 rounded-r-none" 
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy split button"
                aria-haspopup="menu"
                onClick={handleToggle}
            >
                <Typography 
                    className="text-sm text-neutral-600 normal-case font-light outline-zinc-400"
                >
                    {searchOptions[selectedIndex]}
                </Typography>
                
                <ArrowDropDownIcon className="text-gray-700"/>
            </Button>

            <Popper
                open={open}
                anchorEl={anchorEl}
                role={undefined}
                transition
                disablePortal
                className="z-20 opacity-95"
            >
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{
                    transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                >
                    <Paper className="rounded-2xl">
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList id="split-button-menu" autoFocusItem className="rounded-2xl">
                                {searchOptions.map((option, index) => (
                                    <MenuItem
                                        className="w-250 font-light border-solid divide-y divide-white"
                                        key={option}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {index === selectedIndex ? 
                                            <StyledCheckIcon /> : 
                                            <EmptyDiv />
                                        }

                                        {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
            </Popper>
        </div>
    )
};

export default CategoryButton;