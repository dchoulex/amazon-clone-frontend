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
            const res = await axios.get(process.env.NEXT_PUBLIC_AUTHENTICATE_API);

            const data = res.data.data;
            
            if (data.isAuthenticated) {
                const { user, defaultAddress, defaultCreditCard, totalAmount } = data;

                dispatch(authActions.login());

                dispatch(userActions.setUser({
                    name: user.name,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    amazonPoints: user.amazonPoints,
                    defaultAddress,
                    defaultCreditCard
                }));

                dispatch(cartActions.setTotalAmount({
                    totalAmount
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
        defaultCreditCard: state.user.defaultCreditCard
    }));

    let totalAmount = useSelector(state => state.cart.totalAmount);

    if (!isAuthenticated) {
        user.name = "Sign in",
        user.amazonPoints = "Check your balance",
        user.defaultAddress = {
            postCode : "Your address",
            rest : "Select your address"
        },
        totalAmount = 0
    };

    let defaultAddressPostCode = "No default address";
    let defaultAddressLine = "Select a default address";

    if (user.defaultAddress && Object.keys(user.defaultAddress).length !== 0) {
        defaultAddressPostCode = user.defaultAddress.postCode;

        if (user.defaultAddress.city) {
            defaultAddressLine = isAuthenticated ? `${user.defaultAddress.city}, ${user.defaultAddress.rest}` : user.defaultAddress.rest
        } else {
            defaultAddressLine = user.defaultAddress.rest 
        };
    };

    return(
        <Fragment>
            <AppBar 
                className="bg-amazon_blue-dark"
                position="static"
            >
                <MainNavbar 
                    name={user.name}
                    defaultAddressPostCode={defaultAddressPostCode}
                    defaultAddressLine={defaultAddressLine}
                    cartNumber={totalAmount}
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