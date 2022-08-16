import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import OrderItemList from "../ui/order-item-list";

function OrderDetailsItems(props) {
    const { orderItems, imagePath, currentTab } = props;
    
    return (
        <Box px={3} pb={3}>
            <Box className="px-6 py-5 border-2 border-solid border-gray-400 rounded-lg">
                <Typography variant="h5" className="pb-3 inline">Order Items</Typography>

                <Typography variant="overline" className="pb-3 text-sm ml-5">{orderItems.length} items</Typography>

                <Divider />

                <OrderItemList products={orderItems} />
            </Box>
        </Box>
    )
};

export default OrderDetailsItems