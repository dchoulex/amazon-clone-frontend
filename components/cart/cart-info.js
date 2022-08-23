import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { cartActions } from "../../store/cart-slice";
import getPaginatedItems from "../../utils/getPaginatedItems";
import CartPanelList from "./cart-panel-list/cart-panel-list";
import PageTitle from "../ui/page-title/page-title";
import NoItemInfo from "../ui/no-item-info";
import PaginationButtons from "../ui/pagination-buttons";

import numberWithCommas from "../../utils/numberWithCommas";

// const buyAgainTabItems = [
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 0,
//         price: 5000000,
//         point: 1000
//     },
//     {
//         productName: "Ergotron LX Desk Mount",
//         stock: 1,
//         price: 5000000,
//         point: 1000
//     },
// ];
const buyAgainTabItems = [];

function CartInfo(props) {
    const { cartItems, title } = props;
    const dispatch = useDispatch();
    const totalSelectedItems = 5;
    const total = 50000;
    const totalPoints = 500;
    
    const cartTabItems = cartItems.filter(cartItem => !cartItem.isSaved);
    const saveTabItems = cartItems.filter(cartItem => cartItem.isSaved);
    
    const currentTab = useSelector(state => state.cart.currentTab);
    const currentCartTabPage = useSelector(state => state.cart.cartTabPage);
    const currentSaveTabPage = useSelector(state => state.cart.saveTabPage);
    const currentBuyAgainTabPage = useSelector(state => state.cart.buyAgainTabPage);

    const tabItems = {
        cart: {
            numOfResults: cartTabItems.length,
            handleChange: (_, value) => {
                dispatch(cartActions.changeSaveTabPage({ page: value }))
            },
            isEmpty: currentTab === "cart" && cartTabItems.length === 0,
            page: currentCartTabPage,
            paginatedItems: getPaginatedItems(cartTabItems, currentCartTabPage)
        },
        save: {
            numOfResults: saveTabItems.length,
            handleChange: (_, value) => {
                dispatch(cartActions.changeSaveTabPage({ page: value }))
            },
            isEmpty: currentTab === "save" && saveTabItems.length === 0,
            page: currentSaveTabPage,
            paginatedItems: getPaginatedItems(saveTabItems, currentSaveTabPage)
        },
        buyAgain: {
            numOfResults: buyAgainTabItems.length,
            handleChange: (_, value) => {
                dispatch(cartActions.changeSaveTabPage({ page: value }))
            },
            isEmpty: currentTab === "buyAgain" && buyAgainTabItems.length === 0,
            page: currentBuyAgainTabPage,
            paginatedItems: getPaginatedItems(buyAgainTabItems, currentBuyAgainTabPage)
        }
    };

    const handleChangeTab = (_, value) => {
        dispatch(cartActions.changeCurrentTab({ currentTab: value }));
    };

    return (
        <Box className={currentTab === "cart" ? "lg:flex" : ""}>
            <Paper className="bg-white">
                <PageTitle 
                    title={title} 
                    numOfResults={tabItems[currentTab].numOfResults} 
                />

                <TabContext value={currentTab}>
                    <Box 
                        sx={{ 
                            borderBottom: 1, 
                            borderColor: "#b0bec5" 
                        }}
                    >
                        <TabList 
                            value={currentTab} 
                            onChange={handleChangeTab} 
                            aria-label="cart-tabs"
                        >
                            <Tab label="Cart" value="cart" />

                            <Tab label="Save for later" value="save" />

                            <Tab label="Buy again" value="buyAgain" />
                        </TabList>
                    </Box>

                    <TabPanel 
                        value="cart" 
                        className="py-2"
                    >
                        <CartPanelList 
                            items={tabItems["cart"].paginatedItems} 
                            currentTab={currentTab} 
                        />
                    </TabPanel>

                    <TabPanel 
                        value="save"
                        className="py-2"
                    >
                        <CartPanelList 
                            items={ getPaginatedItems(saveTabItems, tabItems["save"].page )} 
                            currentTab={currentTab} 
                        />
                    </TabPanel>

                    <TabPanel 
                        value="buyAgain"  
                        className="py-2"
                    >
                        <CartPanelList 
                            items={ getPaginatedItems(buyAgainTabItems, tabItems[currentTab].page)} 
                            currentTab={currentTab} 
                        />
                    </TabPanel>
                </TabContext>

                {(currentTab === "cart" && !tabItems[currentTab].isEmpty) && 
                    <Fragment>
                        <Box 
                            py={2} 
                            px={4}
                            className="flex"
                            sx={{ 
                                borderTop: 1,
                                borderColor: "divider"
                            }}
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
                    

                        <div className="flex justify-center lg:hidden">
                            <Button 
                                variant="outlined"
                                className="normal-case my-3"
                            >
                                Proceed to checkout
                            </Button>
                        </div>
                    </Fragment>
                }
    
                {tabItems[currentTab].isEmpty ? 
                    <NoItemInfo />:
                    <PaginationButtons 
                        numOfResults={tabItems[currentTab].numOfResults} 
                        page={tabItems[currentTab].page}
                        onChange={tabItems[currentTab].handleChange}
                    />
                }   
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

// export async function getServerSideProps(context) {
//     const GET_ALL_CART_ITEMS_API = process.env.NEXT_GET_ALL_CART_ITEMS_API
// }