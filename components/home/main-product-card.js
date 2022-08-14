import Image from "next/image";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function MainProductCard(props) {
    const { title, subheader, action, imagePath } = props;

    return (
        <Card className="w-[350px] flex-col flex">
            <CardHeader 
                title={title} 
                subheader={subheader}
            />

            <div className="mt-auto">
                <div className="flex justify-center">
                    <Image 
                        src="/images/amazon-logo.png"
                        alt="Picture"
                        width={200}
                        height={200}
                    />
                </div>

                <CardActions>
                    <Button className="mt-8">{action || "see more"}</Button>
                </CardActions>
            </div>
        </Card>
    )
};

export default MainProductCard;