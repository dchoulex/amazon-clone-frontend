import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import AllTab from "./all-tab";

const subNavbarTabs = [
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
    {
        title: "Amazon Fashion",
        disabled: true
    },
    {
        title: "Kindle Books",
        disabled: true
    },
    {
        title: "Computers & Peripherals",
        disabled: false
    },
    {
        title: "Food & Beverage",
        disabled: true
    },
    {
        title: "Coupons",
        disabled: true
    },
    {
        title: "Gift Cards",
        disabled: true
    },
    {
        title: "Home & Kitchen",
        disabled: true
    },
    {
        title: "Gift Ideas",
        disabled: true
    },
    {
        title: "Sports & Outdoors",
        disabled: true
    },
];

function subNavbar() {
    return (
        <Toolbar 
            variant="dense" 
            className="h-8 bg-amazon_blue-light w-screen justify-evenly"
            disableGutters
        >
            <Tabs 
                indicatorColor="none"  
                variant="scrollable"          
                className="justify-evenly"
            >
                <AllTab />
                {subNavbarTabs.map(tab => {
                    return (
                        <Link 
                            href="/thisWorks" 
                            key={tab.title}
                        >
                            <Tab 
                                className="text-gray-200 normal-case px-8px min-h-0 text-base font-light opacity-100 mx-1"
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