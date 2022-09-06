import Public from '@mui/icons-material/Public';
import SvgIcon from '@mui/material/SvgIcon';
import JapanIcon from "../../../../../public/images/jp-flag-icon.svg";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
                title: "Best Sellers",
                href: "/products/best/sellers",
                disabled: false
            },
            {
                title: "New Releases",
                disabled: true
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
                title: "Credit Cards",
                href: "/account/wallet",
                disabled: false,
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
                title: "Account",
                icon: <ManageAccountsIcon />,
                href: "/account"
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
                title: "Help",
                disabled: true
            }
        ]
    }
];