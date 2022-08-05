import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from '@mui/material/ListItemIcon';

import AllTabListItemText from "./all-tab-list-item-text";

function AllTabListItem(props) {
    const { item } = props;

    return (
        <React.Fragment>
            <ListItemButton 
                key={item.title}
                disabled={item.disabled} 
                sx={{ pl: "2rem" }}
            >
                {item.icon && 
                    <ListItemIcon sx={{minWidth: "40px"}}>{item.icon}</ListItemIcon>
                }
                <AllTabListItemText primary={item.title} />
            </ListItemButton>
        </React.Fragment>
    )
};

export default AllTabListItem;