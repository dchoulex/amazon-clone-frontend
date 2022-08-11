import * as React from "react";
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

// function getWindowDimensions() {
//     return {
//         width: window.innerWidth,
//         height: window.innerHeight
//     };
// }

// function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
  
//     React.useEffect(() => {
//         function handleResize() {
//             setWindowDimensions(getWindowDimensions());
//         }
  
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//     return windowDimensions;
// };
  
const SearchInputBase = styled(InputBase)(() =>({
    backgroundColor: "white",
    minWidth: "250px",
    paddingLeft: "5px",
    // display: "flex",
    // height: "36px",
    // position: "absolute",
    // bottom: "0px",
    // right: "64px"
}));

const EmptyDiv = styled("div")(() =>({
    width: "30px"
}));

const StyledCheckIcon = styled(CheckIcon)(() =>({
    width: "30px"
}));

function SearchBar() {
    const [open, setOpen] = React.useState(false);
    // const anchorRef = React.useRef(null);
    // const categoryRef = React.useRef(null);
    const [categoryIsChange, setCategoryIsChange] = React.useState(false);
    const [searchInputWidth, setSearchInputWidth] = React.useState(200);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const categoryWidth = categoryRef.current?.offsetWidth;

    // React.useEffect(() => {
    //     if (categoryIsChange) {
    //         const newSearchInputWidth = 400 - 64 - categoryWidth;

    //         setSearchInputWidth(newSearchInputWidth);
    //     };

    //     setCategoryIsChange(false);

    // }, [categoryIsChange, searchInputWidth]);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setCategoryIsChange(true);
        setOpen(false);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        };
        setOpen(false);
    };

    return (
        <Paper 
            ref={anchorRef} 
            variant="contained"
            className="flex-none relative w-auto"
        >
            <Button 
                className="bg-zinc-200 pr-1 rounded-r-none" 
                ref={categoryRef}
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
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                className="z-10 opacity-95"
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
            <SearchInputBase sx={{width: "30%"}}/>
            <Button className="bg-orange-300 px-1 outline-orange-500 absolute right-0 rounded-l-none">
                <SearchIcon className="text-black" />
            </Button>
        </Paper> 
    )
};

export default SearchBar;