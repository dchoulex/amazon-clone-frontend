import { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from 'axios';

import AppBar from "@mui/material/AppBar";

import { authActions } from "../../store/auth-slice";
import { userActions } from "../../store/user-slice";
import { cartActions } from "../../store/cart-slice";
import MainNavbar from "./main-navbar/main-navbar";
import SubNavbar from "./sub-navbar/sub-navbar";

function Header() {
    let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const isAuthenticatedRes = await axios.get("/api/v1/auth/authenticate");

            if (!isAuthenticatedRes) return;

            const data = isAuthenticatedRes.data.data;
            const user = data.data;

            if (data.isAuthenticated) {
                const defaultAddressRes = await axios.get("/api/v1/addresses/default");
                const defaultCreditCardRes = await axios.get("/api/v1/cards/default");
                const cartRes = await axios.get("/api/v1/carts");

                if (!defaultAddressRes || !defaultCreditCardRes || !cartRes) return;

                dispatch(authActions.login());

                dispatch(userActions.setUser({
                    name: user.name,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    amazonPoints: user.amazonPoints
                }));

                dispatch(userActions.setDefaultAddress({
                    defaultAddress: defaultAddressRes.data.data
                }));

                dispatch(userActions.setDefaultCreditCard({
                    defaultCreditCard: defaultCreditCardRes.data.data
                }));

                dispatch(cartActions.setNumOfCartItems({
                    numOfCartItems: cartRes.data.data.length
                }));
            };
        };

        if (!isAuthenticated) fetchData();
    }, [isAuthenticated, dispatch]);
    
    const user = useSelector(state => ({
        name: state.user.name,
        email: state.user.email,
        phoneNumber: state.user.phoneNumber,
        amazonPoints: state.user.amazonPoints,
        defaultAddress: state.user.defaultAddress,
    }));

    let numOfCartItems = useSelector(state => state.cart.numOfCartItems);

    if (!isAuthenticated) {
        user.name = "Sign in",
        user.amazonPoints = "Check your balance",
        user.defaultAddress = {
            postCode : "Your address",
            rest : "Select your address"
        },
        numOfCartItems = 0
    };

    return(
        <Fragment>
            <AppBar 
                className="bg-amazon_blue-dark"
                position="static"
            >
                <MainNavbar 
                    name={user.name}
                    defaultAddressPostCode={user.defaultAddress.postCode}
                    defaultAddressLine={isAuthenticated ? `${user.defaultAddress.city} ${user.defaultAddress.rest}` : user.defaultAddress.rest}
                    cartNumber={numOfCartItems}
                    isAuthenticated={isAuthenticated}
                />

                <SubNavbar 
                    name={user.name}
                    amazonPoints={user.amazonPoints} 
                />
            </AppBar>
        </Fragment>
    )
};

export default Header;