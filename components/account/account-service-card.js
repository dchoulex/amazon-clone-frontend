import Image from "next/image";
import Link from "next/link";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const accountCards = [
    {
        title: "Order History",
        description: "Track, return or buy things again.",
        href: "/account/order-history"
    },
    {
        title: "My Profile",
        description: "Edit your profile and password.",
        href: "/account/my-profile"
    },
    {
        title: "My Review",
        description: "Check your past review or review a product.",
        href: "/account/review"
    },
    {
        title: "Delivery Address",
        description: "Edit addresses for orders.",
        href: "/account/address"
    },
    {
        title: "Payment Methods",
        description: "Manage payment methods.",
        href: "/account/payment-method"
    },
    {
        title: "Gift cards",
        description: "View balance or redeem a gift card.",
        href: "#"
    }
];

function AccountServiceCard() {
    const activeCard = "flex border-2 border-gray-300 border-solid p-4 cursor-pointer";
    const disabledCard = "flex border-2 border-gray-300 border-solid p-4 bg-gray-300 bg-opacity-70 cursor-not-allowed"

    return (
        <Grid container spacing={3}>
            {accountCards.map((card, index) => (      
                <Grid 
                    key={`account-card-${index}`}
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                >
                    <Link href={card.href}>
                        <Card className={index === accountCards.length - 1 ? disabledCard : activeCard}>
                            <Image 
                                src="/images/amazon-logo.png"
                                alt="Picture1"
                                width={80}
                                height={80}
                            />
                            <CardContent className="p-0 ml-4 flex flex-col flex-1">
                                <Typography className="text-xl">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    )
};

export default AccountServiceCard;