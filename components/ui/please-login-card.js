import Link from "next/link";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function PleaseLoginCard(props) {
    const { page, title } = props;

    return (
        <Card className="p-2 border-2 border-solid border-gray-200 mt-3">
            <Typography 
                variant="h4" 
                p={2}
                className="font-light mb-2"
            >
                {title}
            </Typography>

            <Divider className="mb-2" />

            <CardHeader 
                title="Your are not logged in yet." 
                subheader={`Please login to view your ${page}.`}
            />

            <CardActions>
                <Link href="/auth/login">
                    <Button 
                        variant="outlined"
                    >
                        Login
                    </Button>
                </Link>

                <Link href="/auth/sign-up">
                    <Button 
                        variant="contained"
                    >
                        Sign up
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
};

export default PleaseLoginCard;