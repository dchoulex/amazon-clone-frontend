import { useState, Fragment } from "react";
import { collapseListItems } from "./data/all-tab-data";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import CollapseListitem from "./collapse-list-item";
import AllTabListItemText from "./all-tab-list-item-text";

function AllTabCollapseListItem(props) {
    const { item } = props;

    const [seeAllIsOpen, setOpenSeeAll] = useState(false);

    const handleOpenSeeAll = () => setOpenSeeAll(true);
    const handleCloseSeeAll = () => setOpenSeeAll(false);

    return (
        <Fragment>
            {seeAllIsOpen || 
            <ListItemButton 
                onClick={handleOpenSeeAll}
                sx={{ pl: "2rem" }}
            >
                <AllTabListItemText primary="See More" />
                <ExpandMore />
            </ListItemButton>}
            <Collapse in={seeAllIsOpen}>
                <List component="div" disablePadding>
                {collapseListItems.map(item => (
                    <CollapseListitem key={item} item={item} />
                ))}
                </List>
            </Collapse>
            {!seeAllIsOpen ||
                <ListItemButton 
                    onClick={handleCloseSeeAll} 
                    sx={{ pl: "2rem" }}
                >
                <AllTabListItemText primary="See Less" />
                <ExpandLess />
            </ListItemButton>}
        </Fragment>
    )
};

export default AllTabCollapseListItem;