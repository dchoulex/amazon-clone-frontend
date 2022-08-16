import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';

function PageTitle(props) {
    const { title, numberOfResults } = props;
    const router = useRouter();
    const isOrderPage = title === "Your Orders";
    const isOrderDetailPage = title === "Order Details";

    return (
        <Box className="bg-white p-5 pb-2">
            {router.pathname.includes("/order-history") &&
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
            }

            <Typography variant="h4" className="font-light mb-2">
                {title}
            </Typography>

            {numberOfResults !== undefined &&
                <Typography 
                    variant="overline" 
                    className="text-base font-light"
                >
                    {numberOfResults} items
                </Typography>
            }

            {title === "Shopping Cart" &&
                <Stack direction="row" spacing={2} className="mt-4">
                    <Button 
                        disableRipple 
                        color="error"
                        className="normal-case text-base hover:bg-inherit p-0"
                    >
                        Deselect all items
                    </Button> 
                </Stack>
            }
        </Box>
    )
};

export default PageTitle;