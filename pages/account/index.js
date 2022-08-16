import Image from "next/image";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const accountCards = [
    {
        title: "Your Orders",
        description: "Track, return or buy things again."
    },
    {
        title: "Login & security",
        description: "Edit your profile and password."
    },
    {
        title: "Prime",
        description: "View benefits and payment by using prime."
    },
    {
        title: "Manage Addresses",
        description: "Edit addresses for orders."
    },
    {
        title: "Manage Payments",
        description: "Manage payment methods."
    },
    {
        title: "Gift cards",
        description: "View balance or redeem a gift card."
    }, 
    {
        title: "Message center",
        description: "View your Amazon messages."
    },
    {
        title: "Contact us",
        description: "Contact our customer service via phone or chat."
    },
    {
        title: "Amazon Mobile App",
        description: "Donwload Amazon App for mobile phone."
    }
];

function AccountPage() {
    return (
        <Box className="px-8 py-10">
            <Typography 
                variant="h4" 
                pb={3} 
                className="font-light"
            >
                Your Account
            </Typography>

            <Grid container spacing={3}>
                {accountCards.map((card, index) => (      
                    <Grid 
                        key={`account-card-${index}`}
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                    >
                        <Card className="flex border-2 border-gray-200 border-solid p-4">
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
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
};

export default AccountPage;