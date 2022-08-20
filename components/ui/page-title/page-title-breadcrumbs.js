import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactsIcon from '@mui/icons-material/Contacts';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InfoIcon from '@mui/icons-material/Info';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PaymentIcon from '@mui/icons-material/Payment';

function getChipLabel(path) {
    const names = path.split("-");
    const chipLabels = [];

    if (path === "[orderId]") {
        return "Order Details"
    }

    for (const name of names) {
        const capitalizeName = name.slice(0, 1).toUpperCase() + name.slice(1);

        chipLabels.push(capitalizeName);
    };

    return chipLabels.join(" ");
};

function getChipIcon(path) {
    let icon;

    switch (path) {
        case "account":
            icon = <ManageAccountsIcon />
            break;
        case "order-history":
            icon = <ListAltIcon />
            break;
        case "[orderId]":
            icon = <InfoIcon />;
            break;
        case "my-profile":
            icon = <PersonIcon />
            break;
        case "review":
            icon = <RateReviewIcon />
            break;
        case "address": 
            icon = <ContactsIcon />
            break;
        case "wallet": 
            icon = <PaymentIcon />
            break;
        default:
            icon = null;
            break;
    }  

    return icon;
};

function getChipPath(paths, index) {
    const copyPaths = paths.slice();
    const chipPath = "/" + copyPaths.slice(0, index + 1).join("/");

    return chipPath;
};

function PageTitleBreadcrumbs() {
    const router = useRouter();
    const paths = router.pathname.split("/").slice(1);

    return (
        <Box mb={2}>
            <Breadcrumbs aria-label="breadcrumb">
                {paths.map((path, index) => (
                    <Link 
                        key={`path-${index}`} 
                        href={index === paths.length - 1 ? "#" : getChipPath(paths, index)}
                    >
                        <Chip
                            label={getChipLabel(path)}
                            icon={getChipIcon(path)}
                            size="small"
                            color={index === paths.length - 1 ? "secondary" : "default"}
                            clickable
                        />
                    </Link>
                ))}
            </Breadcrumbs>
        </Box>  
    )
};

export default PageTitleBreadcrumbs;