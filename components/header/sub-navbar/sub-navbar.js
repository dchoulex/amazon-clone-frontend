import { useState } from "react";
import Link from "next/link";

import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuIcon from '@mui/icons-material/Menu';

import AllTabDrawer from "./all-tab/all-tab-drawer";

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
    }
];

function SubNavbar(props) {
    const { amazonPoints, name } = props;
    const [ openDrawer, setOpenDrawer ] = useState(false);

    const handleOpenDrawer = () => setOpenDrawer(true);

    return (
        <Toolbar 
            variant="dense" 
            className="h-8 bg-amazon_blue-light justify-evenly"
            disableGutters
        >
            <Tabs 
                indicatorColor="none"  
                variant="scrollable"          
                className="justify-evenly bg-amazon_blue-light"
            >
                <Tab 
                    className="text-gray-200 normal-case min-w-0 min-h-0 text-base font-light opacity-100"
                    label={"All"}
                    icon={<MenuIcon />}
                    iconPosition="start"
                    onClick={handleOpenDrawer}
                    value="1"
                />

                <AllTabDrawer 
                    name={name} 
                    setOpenDrawer={setOpenDrawer}
                    openDrawer={openDrawer}
                />

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
                    value="2"
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
                                value={index + 3 + ""}
                            />         
                        </Link>   
                    )
                })}
            </Tabs>
        </Toolbar>
    )
};

export default SubNavbar;