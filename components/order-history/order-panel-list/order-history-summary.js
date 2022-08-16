import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import numberWithCommas from "../../../utils/numberWithCommas";

function OrderHistorySummary(props) {
    const { orderAt, total, address, id, status } = props;

    return (
        <Box className="flex flex-col flex-1">
            <div>
                <Chip 
                    color="primary"
                    label="Test"
                    className="max-w-[100px]"
                />
            </div>

            <div className="flex">
                <div className="min-w-[100px] mr-5">
                    <Typography variant="overline">
                        Order placed
                    </Typography>

                    <Typography variant="body1">
                        {orderAt}
                    </Typography>
                </div>

                <div className="min-w-[50px] mx-5">
                    <Typography variant="overline">
                        Total
                    </Typography>

                    <Typography variant="body1">
                        ¥ {numberWithCommas(total)}
                    </Typography>
                </div>

                <div className="min-w-[50px] ml-5">
                    <Typography variant="overline">
                        Ship to
                    </Typography>

                    <Typography variant="body1">
                        {address}
                    </Typography>
                </div>

                <div className="ml-auto mr-5">
                    <Typography variant="overline">
                        Order {id}
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <Button disableRipple className="hover:bg-inherit normal-case p-0">
                            View order details
                        </Button>

                        <Button disableRipple className="hover:bg-inherit normal-case p-0">
                            Invoice
                        </Button>
                    </Stack>
                </div>
            </div> 
        </Box>
    )
};

export default OrderHistorySummary;