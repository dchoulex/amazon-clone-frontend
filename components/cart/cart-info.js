import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import axios from "axios";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Paper from "@mui/material/Paper";

import { cartActions } from "../../store/cart-slice";
import getPaginatedItems from "../../utils/getPaginatedItems";
import CartPanelList from "./cart-panel-list/cart-panel-list";
import PageTitle from "../ui/page-title/page-title";
import NoItemInfo from "../ui/no-item-info";
import PaginationButtons from "../ui/pagination-buttons";
import CheckoutForm from "./checkout-form/checkout-form";

function CartInfo(props) {
    const { title } = props;
    const dispatch = useDispatch();

    const currentTab = useSelector(state => state.cart.currentTab);
    const currentCartTabPage = useSelector(state => state.cart.cartTabPage);
    const currentSaveTabPage = useSelector(state => state.cart.saveTabPage);
    // const currentBuyAgainTabPage = useSelector(state => state.cart.buyAgainTabPage);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(process.env.NEXT_PUBLIC_GET_ALL_CART_ITEMS_API, fetcher, { refreshInterval: 1000 });

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>

    const cartItems = data.data;
    
    const cartTabItems = cartItems.filter(cartItem => !cartItem.isSaved);
    const saveTabItems = cartItems.filter(cartItem => cartItem.isSaved);

    const tabItems = [
        {
            numOfResults: cartTabItems.reduce((total, cartItem) => total + cartItem.amount, 0),
            handleChange: (_, value) => {
                dispatch(cartActions.changeSaveTabPage({ page: value }))
            },
            isEmpty: currentTab === 0 && cartTabItems.length === 0,
            page: currentCartTabPage,
            paginatedItems: getPaginatedItems(cartTabItems, currentCartTabPage),
            subTotal: cartTabItems.reduce((subTotal, item) => subTotal + item.product.price * item.amount, 0),
            point: cartTabItems.reduce((point, item) => point + item.product.point * item.amount, 0)
        },
        {
            numOfResults: saveTabItems.reduce((total, cartItem) => total + cartItem.amount, 0),
            handleChange: (_, value) => {
                dispatch(cartActions.changeSaveTabPage({ page: value }))
            },
            isEmpty: currentTab === 1 && saveTabItems.length === 0,
            page: currentSaveTabPage,
            paginatedItems: getPaginatedItems(saveTabItems, currentSaveTabPage)
        },
        // {
        //     numOfResults: buyAgainTabItems.length,
        //     handleChange: (_, value) => {
        //         dispatch(cartActions.changeSaveTabPage({ page: value }))
        //     },
        //     isEmpty: currentTab === 3 && buyAgainTabItems.length === 0,
        //     page: currentBuyAgainTabPage,
        //     paginatedItems: getPaginatedItems(buyAgainTabItems, currentBuyAgainTabPage)
        // }
    ];

    const handleChangeTab = (_, value) => {
        dispatch(cartActions.changeCurrentTab({ currentTab: value }));
    };

    return (
        <Box >
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
                            <Tab label="Cart" value={0} />

                            <Tab label="Save for later" value={1} />

                            {/* <Tab label="Buy again" value={3} /> */}
                        </TabList>
                    </Box>

                    <TabPanel 
                        value={0} 
                        className="py-2"
                    >
                        {!tabItems[0].isEmpty &&
                            <CheckoutForm 
                                items={tabItems[0].paginatedItems}
                                numOfCartItems={tabItems[0].numOfResults}
                                subTotal={(tabItems[0].subTotal)}
                                point={tabItems[0].point}
                                isEmpty={tabItems[currentTab].isEmpty}
                            />
                        }
                    </TabPanel>

                    <TabPanel 
                        value={1}
                        className="py-2"
                    >
                        <CartPanelList 
                            items={getPaginatedItems(saveTabItems, tabItems[1].page)} 
                            currentTab={currentTab} 
                        />
                    </TabPanel>

                    {/* <TabPanel 
                        value={3}  
                        className="py-2"
                    >
                        <CartPanelList 
                            items={ getPaginatedItems(buyAgainTabItems, tabItems[currentTab].page)} 
                            currentTab={currentTab} 
                        />
                    </TabPanel> */}
                </TabContext>
    
                {tabItems[currentTab].isEmpty ? 
                    <NoItemInfo />:
                    <PaginationButtons 
                        numOfResults={tabItems[currentTab].numOfResults} 
                        page={tabItems[currentTab].page}
                        onChange={tabItems[currentTab].handleChange}
                    />
                }   
            </Paper>
        </Box>
    )
};

export default CartInfo;