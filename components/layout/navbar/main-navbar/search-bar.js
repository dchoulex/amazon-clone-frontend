import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';
import Typography from "@mui/material/Typography";

const searchOptions = ["All Departments", "Amazon Fresh", "Software", "Software"];

const SearchInputBase = styled(InputBase)(() =>({
    backgroundColor: "white",
    minWidth: "200px"
}));

const EmptyDiv = styled("div")(() =>({
    width: "30px"
}));

const StyledCheckIcon = styled(CheckIcon)(() =>({
    width: "30px"
}));

function SearchBar() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen)
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        };

        setOpen(false);
    };

    return (
        <ButtonGroup 
            ref={anchorRef} 

            variant="contained"
            className="flex-none"
        >
            <Button 
                className="bg-zinc-200 pr-1" 
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy split button"
                aria-haspopup="menu"
                onClick={handleToggle}
            >
                <Typography className="text-sm text-neutral-600 normal-case font-light outline-zinc-400">
                    {searchOptions[selectedIndex]}
                </Typography>
                <ArrowDropDownIcon className="text-gray-700"/>
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                className="z-10 opacity-90"
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
                            <MenuList id="split-button-menu" autoFocusItem className="bg-zinc-700 rounded-2xl">
                                {searchOptions.map((option, index) => (
                                    <MenuItem
                                        className="w-250 text-white font-light border-solid divide-y divide-white"
                                        key={option}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                    {index === selectedIndex ? <StyledCheckIcon /> : <EmptyDiv />}
                                    {option}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
                )}
            </Popper>
            <SearchInputBase />
            <Button className="bg-orange-300 px-1 outline-orange-500">
                <SearchIcon className="text-black" />
            </Button>
        </ButtonGroup> 
    )
};

export default SearchBar;