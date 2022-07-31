import * as React from "react";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../../public/images/jp-flag-icon.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CountrySelectionButton() {
    return (
        <React.Fragment>
            <Button className="flex-none ml-16px">
                <IconButton className="p-0">
                    <SvgIcon component={JapanIcon} inheritViewBox />
                </IconButton>
                <ArrowDropDownIcon className="text-gray-400" />
            </Button>
        </React.Fragment>
    )
};

export default CountrySelectionButton;