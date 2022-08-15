import Public from '@mui/icons-material/Public';
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../../../public/images/jp-flag-icon.svg";

export const collapseListItems = [
    {
        title: "Smart Home"
    },
    {
        title: "Home & Kitchen & Pet & DIY"
    },
    {
        title: "Drugstore & Beauty"
    },
    {
        title: "Baby, Toys & Hobby"
    },
    {
        title: "Auto & Industrial"
    }
];

export const drawerListItems = [
    {
        title: "Trending",
        items: [
            {
                title: "Best Sellers"
            },
            {
                title: "New Releases"
            },
            {
                title: "Movers & Shakers",
                disabled: true
            }
        ]
    },
    {
        title: "Digital Content & Devices",
        items: [
            {
                title: "Prime Video",
                disabled: true
            }, 
            {
                title: "Amazon Music",
                disabled: true
            },
            {
                title: "Appstore for Android",
                disabled: true
            },
            {
                title: "Echo, Alexa & Ring",
                disabled: true
            },
            {
                title: "Fire Tablets",
                disabled: true
            },
            {
                title: "Fire TV",
                disabled: true
            },
            {
                title: "Kindle E-readers & Books",
                disabled: true
            },
            {
                title: "Audible Audiobooks",
                disabled: true
            }
        ]
    }, 
    {
        title: "Shop By Department",
        items: [
            {
                title: "Electronics & Camera"
            },
            {
                title: "Computers & Office"
            },
            {
                title: "Food, Beverage & Alcohol"
            },
            {
                title: "Sports & Outdoors"
            },
            {
                title: "Clothing, Shoes & Jewelry"
            },
            {
                title: "Books, Comics & Magazines",
                disabled: true
            },
            {
                title: "DVD, Music & Games",
                disabled: true
            },
            {
                title: "See All",
                isCollapseListItem: true
            }
        ]
    },
    {
        title: "Programs & Features",
        items: [
            {
                title: "Credit Cards & Amazon Points"
            }, 
            {
                title: "Amazon Outlet",
                disabled: true
            }
        ]
    },
    {
        title: "Help & Settings",
        items: [
            {
                title: "Your Account"
            },
            {
                title: "English",
                icon: <Public />
            },
            {
                title: "Japan",
                icon: <SvgIcon component={JapanIcon} inheritViewBox />
            },
            {
                title: "Currency Settings",
                disabled: true
            },
            {
                title: "Help"
            },
            {
                title: "Sign in"
            }
        ]
    }
];