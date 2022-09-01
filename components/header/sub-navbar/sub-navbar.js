import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import AllTab from "./all-tab/all-tab";

const subNavbarTabs = [
    {
        title: "Best Sellers",
        disabled: false
    },
    {
        title: "Today's Deals",
        disabled: false
    },
    {
        title: "Amazon Basics",
        disabled: false
    },
    {
        title: "Electronics & Camera",
        disabled: false
    },
    {
        title: "Computers & Office",
        disabled: false
    },
    {
        title: "Food, Beverage & Alcohol",
        disabled: false
    },
    {
        title: "Sports & Outdoors",
        disabled: false
    },
    {
        title: "Clothing, Shoes & Jewelry",
        disabled: false
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
        title: "Coupons",
        disabled: true
    },
    {
        title: "Gift Cards",
        disabled: true
    },
    {
        title: "Customer Service",
        disabled: true
    }
];

function subNavbar(props) {
    const { amazonPoints, name } = props;

    return (
        <Toolbar 
            variant="dense" 
            className="h-8 bg-amazon_blue-light justify-evenly"
            disableGutters
        >
            <Tabs 
                indicatorColor="none"  
                variant="scrollable"          
                className="justify-evenly"
            >
                <AllTab name={name} />

                <Tab 
                    sx={{opacity: 100}}
                    className="text-gray-300 normal-case min-h-0 text-base font-light"
                    label={`Amazon Points: ${amazonPoints}`}
                    disableRipple
                />

                {subNavbarTabs.map((tab, index) => {
                    return (
                        <Link 
                            href="/thisWorks" 
                            key={`sub-navbar-tab-${index}`}
                        >
                            {tab.disabled === true ?
                                <Tab 
                                    sx={{opacity: 100}}
                                    className="text-gray-300 normal-case min-h-0 text-base font-light"
                                    label={tab.title}
                                    disabled={tab.disabled}
                                />:
                                <Tab 
                                    sx={{opacity: 100}}
                                    className="text-gray-300 normal-case min-h-0 text-base font-light"
                                    label={tab.title}
                                />                           
                            }

                            
                        </Link>
                    )
                })}
            </Tabs>
        </Toolbar>
    )
};

export default subNavbar;