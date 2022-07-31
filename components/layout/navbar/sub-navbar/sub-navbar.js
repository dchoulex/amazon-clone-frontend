import * as React from "react";
import Link from "next/link";
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
    const [index, setIndex] = React.useState(0);

    const handleChange = (event, index) => {
        event.preventDefault();

        setIndex(index);
    };

    return (
        <Toolbar 
        variant="dense" 
        className="h-8 bg-amazon_blue-light"
        disableGutters
        >
            <Tabs 
                value={index}
                indicatorColor="none"  
                variant="scrollable"          
                className="justify-evenly"
                onChange={handleChange}
            >
                {subNavbarTabs.map(tab => {
                    return (
                        <Link 
                            href="/thisWorks" 
                            key={tab.title}
                        >
                            <Tab 
                                className="text-gray-200 normal-case px-8px min-w-0 min-h-0 text-base font-light opacity-100"
                                label={tab.title}
                                icon={tab.icon}
                                iconPosition="start"
                                disabled={tab.disabled}
                            />
                        </Link>
                    )
                })}
            </Tabs>
        </Toolbar>
    )
};

export default subNavbar;