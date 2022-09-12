import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

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
        title: "Shipping Address",
        description: "Edit addresses for orders.",
        href: "/account/address"
    },
    {
        title: "Wallet",
        description: "Manage payment methods.",
        href: "/account/wallet"
    }
];

function AccountServiceCard() {
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
                        <Card className="flex border-2 border-gray-300 border-solid p-4 cursor-pointer" >
                            <Image 
                                src={`/images/icons/${slugify(card.title, { lower: true })}.png`}
                                alt=""
                                width={80}
                                height={80}
                            />

                            <CardContent className="p-0 ml-4 flex flex-col flex-1">
                                <Typography variant="h6">
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