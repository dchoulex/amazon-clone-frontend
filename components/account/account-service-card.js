import Image from "next/image";
import Link from "next/link";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import PageTitle from "../ui/page-title/page-title";

const accountCards = [
    {
        title: "Your Orders",
        description: "Track, return or buy things again.",
        href: "/account/order-history"
    },
    {
        title: "Your Profile",
        description: "Edit your profile and password.",
        href: "/account/my-profile"
    },
    {
        title: "Your review",
        description: "Check your past review or review a product.",
        href: "/account/review"
    },
    {
        title: "Your Addresses",
        description: "Edit addresses for orders.",
        href: "/account/address"
    },
    {
        title: "Your Payments",
        description: "Manage payment methods.",
        href: "/account/payment-method"
    },
    {
        title: "Gift cards",
        description: "View balance or redeem a gift card.",
        href: "/account/gift-card"
    }, 
    // {
    //     title: "Prime",
    //     description: "View benefits and payment by using prime."
    // },
    // {
    //     title: "Message center",
    //     description: "View your Amazon messages."
    // },
    // {
    //     title: "Contact us",
    //     description: "Contact our customer service via phone or chat."
    // }
];

function AccountServiceCard(props) {
    const { title } = props;

    return (
        <Box className="px-8 py-10">
            <PageTitle title={title} />

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
                            <Card className="flex border-2 border-gray-200 border-solid p-4 cursor-pointer">
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
        </Box>
    )
};

export default AccountServiceCard;