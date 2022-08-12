import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import numberWithCommas from "../../../../utils/numberWithCommas";
import StockLabel from "../../../ui/stock-label";
import CartItemsButtonStack from "./cart-items-button-stack";
import SavedItemsButtonStack from "./saved-items-button-stack";
import BuyAgainItemsButtonStack from "./buy-again-items-button-stack"

function PanelListItemDescription(props) {
    const { productName, stock, price, point, currentTab } = props;

    let buttonStack;

    if (currentTab === "cart") {
        buttonStack = <CartItemsButtonStack />
    } else if (currentTab === "save") {
        buttonStack = <SavedItemsButtonStack />
    } else {
        buttonStack = <BuyAgainItemsButtonStack />
    }

    return (
        <Box className="flex flex-col">
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
                Get {numberWithCommas(point)} amazon points.
            </Typography>

            {buttonStack}
        </Box>
    )
};

export default PanelListItemDescription;