import { useState, Fragment } from "react";
import { collapseListItems } from "./data/all-tab-data";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import StyledListItemText from "../../styled-list-item-text";

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
                <StyledListItemText primary="See More" />
                
                <ExpandMore />
            </ListItemButton>}

            <Collapse in={seeAllIsOpen}>
                <List component="div" disablePadding>
                {collapseListItems.map(item => (
                    <ListItemButton key={item} sx={{ pl: "2rem" }} disabled>
                        <StyledListItemText primary={item.title} />
                    </ListItemButton>
                ))}
                </List>
            </Collapse>

            {!seeAllIsOpen ||
            <ListItemButton 
                onClick={handleCloseSeeAll} 
                sx={{ pl: "2rem" }}
            >
                <StyledListItemText primary="See Less" />
                <ExpandLess />
            </ListItemButton>}
        </Fragment>
    )
};

export default AllTabCollapseListItem;