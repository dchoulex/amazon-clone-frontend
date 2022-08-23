import Box from "@mui/material/Box";

import PleaseLoginCard from "../../components/ui/please-login-card";
import WalletInfo from "../../components/wallet/wallet-info";

const creditCards = [
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "12334343",
    //     number: "202204",
    //     isDefault: true
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
    // {
    //     type: "Mastercard",
    //     userName: "Fever Pitch",
    //     expirationDate: "202205",
    //     number: "12304566",
    //     isDefault: false
    // },
];

function WalletPage() {
    const isLogin = true;
    const pageTitle = "Wallet"

    return (
        <Box p={3} className="bg-gray-200">
            {isLogin ? 
                <WalletInfo 
                    title={pageTitle}                     
                    creditCards={creditCards}
                /> :
                <PleaseLoginCard 
                    page={"wallet"} 
                    title={pageTitle} 
                />
            }
        </Box>
    )
};

export default WalletPage;