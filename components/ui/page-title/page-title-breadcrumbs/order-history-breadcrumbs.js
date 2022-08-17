import Link from "next/link";
import Box from "@mui/material/Box";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';

function OrderHistoryBreadcrumbs(props) {
    const { isOrderPage, isOrderDetailPage } = props;

    return (
        <Box mb={2}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="/account">
                    <Chip 
                        clickable
                        label="Your Account"
                        size="small"
                        icon={<PersonIcon fontSize="small"/>}
                    />
                </Link>

                <Link href={isOrderPage ? "#" : "/account/order-history"}>
                    <Chip 
                        clickable
                        label="Your Orders"
                        size="small"
                        color={isOrderPage ? "secondary" : "default"}
                        icon={<ListAltIcon fontSize="small"/>}
                    />
                </Link>

                {isOrderDetailPage &&
                    <Link href="#">
                        <Chip 
                            clickable
                            label="Order Details"
                            size="small"
                            color="secondary"
                        />
                    </Link>
                }
            </Breadcrumbs>
        </Box>      
    )
};

export default OrderHistoryBreadcrumbs;