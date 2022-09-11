import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import numberWithCommas from "../../../../utils/numberWithCommas";
import StockLabel from "../../../ui/stock-label";
import SavedItemsButtonStack from "./saved-items-button-stack";
// import BuyAgainItemsButtonStack from "./buy-again-items-button-stack"

function CartPanelDescription(props) {
    const { productName, stock, price, point, currentTab, cartId, isSaved } = props;

    let buttonStack;

    if (currentTab === 1) {
        buttonStack = <SavedItemsButtonStack cartId={cartId} isSaved={isSaved} />
    }
    // if (currentTab === 2) {
    //     buttonStack = <BuyAgainItemsButtonStack cartId={cartId} isSaved={isSaved} />
    // };

    return (
        <Box className="flex flex-col flex-1">
            <Typography 
                variant="h5" 
                className="font-light"
            >
                {productName}
            </Typography>

            <StockLabel stock={stock} isCartItem={true} />

            <Typography 
                variant="h5" 
                className="my-2"
            >
                ¥ {numberWithCommas(price)}
            </Typography>

            <Typography variant="body2" className="mb-4">
                Get <span className="text-orange-400">{numberWithCommas(point)}</span> amazon points.
            </Typography>

            {buttonStack}
        </Box>
    )
};

export default CartPanelDescription;