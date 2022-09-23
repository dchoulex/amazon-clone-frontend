import { useState } from "react";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";

function PleaseLoginCard(props) {
    const { page, title } = props;
    const router = useRouter();

    const [ isRequesting, setIsRequesting ] = useState(false);

    const handleLogin = () => {
        setIsRequesting(true);

        router.push("/auth/login")
    };

    const handleSignUp = () => {
        setIsRequesting(true);

        router.push("/auth/sign-up")
    };

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
                <Button 
                    variant="outlined"
                    disabled={isRequesting}
                    onClick={handleLogin}
                >
                    Login
                </Button>

                <Button 
                    variant="contained"
                    disabled={isRequesting}
                    onClick={handleSignUp}
                >
                    Sign up
                </Button>
            </CardActions>
        </Card>
    )
};

export default PleaseLoginCard;