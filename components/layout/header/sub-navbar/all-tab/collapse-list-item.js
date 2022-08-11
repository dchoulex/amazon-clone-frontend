import ListItemButton from "@mui/material/ListItemButton";
import AllTabListItemText from "./all-tab-list-item-text";

function CollapseListItem(props) {
    const { item } = props;

    return (
        <ListItemButton sx={{ pl: "2rem" }} disabled>
            <AllTabListItemText primary={item.title} />
        </ListItemButton>
    )
};

export default CollapseListItem;