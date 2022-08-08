import * as React from "react";
import Link from "next/link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from '@mui/material/ListItemIcon';

import AllTabListItemText from "./all-tab-list-item-text";

function AllTabListItem(props) {
    const { item, onClick } = props;

    return (
        <React.Fragment>
            <Link href="/thisWorks">
                <ListItemButton 
                    key={item.title}
                    disabled={item.disabled} 
                    sx={{ pl: "2rem" }}
                    onClick={onClick}
                >
                    {item.icon && 
                        <ListItemIcon sx={{minWidth: "40px"}}>{item.icon}</ListItemIcon>
                    }
                    <AllTabListItemText primary={item.title} />
                </ListItemButton>
            </Link>
        </React.Fragment>
    )
};

export default AllTabListItem;