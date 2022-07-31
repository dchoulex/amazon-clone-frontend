import * as React from "react";
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../../public/images/jp-flag-icon.svg";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CountrySelectionButton() {
    return (
        <React.Fragment>
            <Button className="p-0 flex-none ml-16px h-56px">
                <SvgIcon component={JapanIcon} inheritViewBox />
                <ArrowDropDownIcon className="text-gray-400" />
            </Button>
        </React.Fragment>
    )
};

export default CountrySelectionButton;