import Image from "next/image";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Fragment, useState } from "react";
// import AmazonPrimeDialog from "./amazon-prime-dialog";

function MainProductCard(props) {
    const { title, subheader, action, imagePath, href } = props
    // const isAmazonPrimeCard = title === "Amazon Prime";

    // const [ openAmazonPrimeDialog, setOpenAmazonPrimeDialog ] = useState(false);

    // const handleOpenAmazonPrimeDialog = () => {
    //     setOpenAmazonPrimeDialog(true)
    // }

    return (
        <Card className="w-[350px] flex-col flex">
            <CardHeader 
                title={title} 
                subheader={subheader}
            />

            <div className="mt-auto">
                <div className="flex justify-center">
                    <Image 
                        src={imagePath}
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>

                <CardActions>                        
                    <Link href={href}>
                        <Button className="mt-8">  
                            {action}
                        </Button>
                    </Link>
                </CardActions>
            </div>
        </Card>
    )
};

export default MainProductCard;