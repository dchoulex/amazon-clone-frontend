import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuIcon from '@mui/icons-material/Menu';

const subNavbarTabs = [
    {
        title: "All",
        icon: <MenuIcon />
    },
    {
        title: "Amazon Points: Check your balance"
    },
    {
        title: "Best Sellers"
    },
    {
        title: "Amazon Basics"
    },
    {
        title: "Today's Deals"
    },
    {
        title: "Prime Video",
        disabled: true
    },
    {
        title: "Customer Service",
        disabled: true
    },
    {
        title: "New Releases"
    },
    {
        title: "Japanese Books",
        disabled: true
    },
    {
        title: "Prime",
        disabled: true
    },
    {
        title: "Music",
        disabled: true
    },
];

function subNavbar() {
    return (
        <Toolbar 
        variant="dense" 
        className="h-8 bg-amazon_blue-light"
        disableGutters
        >
            <Tabs 
                value={0}
                indicatorColor="none"  
                variant="scrollable"          
                className="justify-evenly"
            >
                {subNavbarTabs.map(tab => {
                    return (
                        <Tab 
                            key={tab.title}
                            className="text-zinc-200 normal-case px-8px min-w-0 min-h-0 text-base"
                            label={tab.title}
                            icon={tab.icon}
                            iconPosition="start"
                            disabled={tab.disabled}
                            wrapped
                        />
                    )
                })}
            </Tabs>
        </Toolbar>
    )
};

export default subNavbar;