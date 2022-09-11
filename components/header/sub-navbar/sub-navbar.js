import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";

import AllTab from "./all-tab/all-tab";

const subNavbarTabs = [
    {
        title: "Electronics & Camera",
        disabled: false,
        href: "/products/electronics/camera"
    },
    {
        title: "Computers & Office",
        disabled: false,
        href: "/products/computers/office"
    },
    {
        title: "Food, Beverage & Alcohol",
        disabled: false,
        href: "/products/food/beverage/alcohol"
    },
    {
        title: "Sports & Outdoors",
        disabled: false,
        href: "/products/sports/outdoors"
    },
    {
        title: "Clothing, Shoes & Jewelry",
        disabled: false,
        href: "/products/clothing/shoes/jewelry"
    },
    // {
    //     title: "Amazon Basics",
    //     disabled: true
    // },
    // {
    //     title: "Prime",
    //     disabled: true
    // },
    // {
    //     title: "Music",
    //     disabled: true
    // },
    // {
    //     title: "Coupons",
    //     disabled: true
    // },
    // {
    //     title: "Gift Cards",
    //     disabled: true
    // },
    // {
    //     title: "Customer Service",
    //     disabled: true
    // }
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
                    sx={{
                        opacity: 100,
                        "&:hover" : {
                            cursor: "default"
                        }
                    }}
                    className="text-gray-300 normal-case min-h-0 text-base font-light"
                    label={`Amazon Points: ${amazonPoints}`}
                    disableRipple
                />

                {subNavbarTabs.map((tab, index) => {
                    return (                   
                        <Link 
                            href={tab.href} 
                            key={`sub-navbar-tab-${index}`}
                        >
                            <Tab 
                                sx={{opacity: 100}}
                                className="text-gray-300 normal-case min-h-0 text-base font-light"
                                label={tab.title}
                                disabled={false}
                            />                     
                        </Link>                  
                    )
                })}
            </Tabs>
        </Toolbar>
    )
};

export default subNavbar;