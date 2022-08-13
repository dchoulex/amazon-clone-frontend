import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Divider from '@mui/material/Divider';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CartPanelList from "./cart-panel-list/cart-panel-list";
import PageTitle from "../ui/page-title";
import PaginationButtons from "../ui/pagination-buttons";

import numberWithCommas from "../../utils/numberWithCommas";

const savedItems = [
    {
        productName: "Ergotron LX Desk Mount",
        stock: 10,
        price: 300,
        point: 2000
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 122,
        price: 50,
        point: 1000
    },
]

const buyAgainItems = [
    {
        productName: "Ergotron LX Desk Mount",
        stock: 0,
        price: 5000000,
        point: 1000
    },
    {
        productName: "Ergotron LX Desk Mount",
        stock: 1,
        price: 5000000,
        point: 1000
    },
]

function CartInfo(props) {
    const { cartItems, numberOfResults, title } = props;
    const [currentTab, setCurrentTab] = useState("cart");
    const numberOfPages = 4;
    const totalSelectedItems = 5;
    const total = 50000;
    const totalPoints = 500;

    const handleChange = (_, newValue) => {
        setCurrentTab(newValue)
    };

    return (
        <Box className={currentTab === "cart" ? "lg:flex" : ""}>
            <Paper className="bg-white">
                <PageTitle title={title} numberOfResults={numberOfResults} />

                <TabContext value={currentTab}>
                    <Box 
                        sx={{ 
                            borderBottom: 1, 
                            borderColor: "#b0bec5" 
                        }}
                    >
                        <TabList 
                            value={currentTab} 
                            onChange={handleChange} 
                            aria-label="cart-tabs"
                        >
                            <Tab label="Cart" value="cart" />

                            <Tab label="Save for later" value="save" />

                            <Tab label="Buy it again" value="buy" />
                        </TabList>
                    </Box>

                    <TabPanel 
                        value="cart" 
                        className="py-2"
                    >
                        <CartPanelList items={cartItems} currentTab={currentTab} />
                    </TabPanel>

                    <TabPanel 
                        value="save"
                        className="py-2"
                    >
                        <CartPanelList items={savedItems} currentTab={currentTab} />
                    </TabPanel>

                    <TabPanel 
                        value="buy"  
                        className="py-2"
                    >
                        <CartPanelList items={buyAgainItems} currentTab={currentTab} />
                    </TabPanel>
                </TabContext>

                <Divider />

                {currentTab === "cart" &&
                    <Box 
                        py={2} 
                        px={4}
                        className="flex"
                    >
                        <div className="ml-auto">
                            <Typography 
                                variant="body1" 
                                className="text-xl"
                            >
                                Subtotal ({totalSelectedItems} items) : &nbsp;
                                <span className="text-red-500">¥{numberWithCommas(total)}</span>
                            </Typography>

                            <Typography className="text-right my-1">
                                Points to be earned : &nbsp;
                                <span className="text-blue-700">{totalPoints} pt</span>
                            </Typography>
                        </div>
                    </Box>
                }

                {currentTab === "cart" && 
                    <div className="flex justify-center lg:hidden">
                        <Button 
                            variant="outlined"
                            className="normal-case my-3"
                        >
                            Proceed to checkout
                        </Button>
                    </div>
                }
    
                <PaginationButtons numberOfPages={numberOfPages} />
            </Paper>

            {currentTab === "cart" &&
                <Paper className="ml-5 p-5 h-[150px] hidden lg:block">
                    <Typography 
                        variant="body1" 
                        className="text-lg"
                    >
                        Subtotal ({totalSelectedItems} items) : &nbsp;
                        <span className="text-red-500">¥{numberWithCommas(total)}</span>
                    </Typography>

                    <Typography className="my-1">
                        Points to be earned : &nbsp;
                        <span className="text-blue-700">{totalPoints} pt</span>
                    </Typography>

                    <div className="flex justify-center">
                        <Button 
                            variant="outlined"
                            className="normal-case my-3"
                        >
                            Proceed to checkout
                        </Button>
                    </div>
                </Paper>
            }
        </Box>
    )
};

export default CartInfo;