import { useState, useRef } from "react";
import { useField, useFormikContext } from "formik";
import slugify from "slugify";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
import Typography from "@mui/material/Typography";

import { SEARCH_CATEGORY } from "../../../../appConfig";

const EmptyDiv = styled("div")(() =>({
    width: "30px"
}));

const StyledCheckIcon = styled(CheckIcon)(() =>({
    width: "30px"
}));

function CategoryButton(props) {
    const { name, ...otherProps } = props;
    const { setFieldValue } = useFormikContext();
    const [ field, _ ] = useField(name);

    const [ selectedIndex, setSelectedIndex ] = useState(0);
    const [ anchorEl, setAnchorEl ] = useState(null);
    const [ open, setOpen ] = useState(false);
    const [ categoryIsChange, setCategoryIsChange ] = useState(false);
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
        const categorySlug = slugify(SEARCH_CATEGORY[index], { lower: true });

        setSelectedIndex(index);
        setCategoryIsChange(true);
        setFieldValue(name, categorySlug);

        setOpen(false);
    };

    const configCategory = {
        ...field,
        ...otherProps
    }

    return (
        <div>
            <Button 
                className="bg-zinc-200 px-4 rounded-r-none" 
                aria-controls={open ? "split-button-menu" : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy split button"
                aria-haspopup="menu"
                onClick={handleToggle}
                {...configCategory}
            >
                <Typography 
                    className="text-sm text-neutral-600 normal-case font-light outline-zinc-400"
                >
                    {SEARCH_CATEGORY[selectedIndex]}
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
                                {SEARCH_CATEGORY.map((option, index) => (
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