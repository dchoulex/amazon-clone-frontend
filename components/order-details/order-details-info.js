import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import PageTitle from "../ui/page-title/page-title";
import OrderDetailsSummary from "./order-details-summary";
import OrderDetailsItems from "./order-details-items";

function OrderDetailsInfo(props) {
    const { order, title } = props;

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />

                <Box className="flex" pl={3} mb={2}>
                    <Typography variant="body1" className="mr-3">
                        Ordered on {order.orderAt} 
                    </Typography>  

                    <Divider orientation="vertical" flexItem />

                    <Typography className="ml-3">
                        Order# {order.orderId}
                    </Typography>        
                </Box>

                <OrderDetailsSummary 
                    name={order.name}
                    postCode={order.postCode}
                    city={order.city}
                    address={order.address}
                    credit={order.credit}
                />
                
                <OrderDetailsItems orderItems={order.orderItems}/>
            </Paper>
        </Box>
    )
};

export default OrderDetailsInfo;