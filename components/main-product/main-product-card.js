import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function MainProductCard(props) {
    const { product } = props;

    return (
        <Card className="w-[350px] relative flex-col flex">
            <CardHeader 
                title={product.title} 
                subheader={product.subheader}
            />
            <CardMedia 
                component="img"
                height="230"
                image="/images/amazon-logo.png"
                className="mb-auto"
                alt={product.title}
            />
            <CardActions>
                <Button className="mt-8">{product.action || "see more"}</Button>
            </CardActions>
        </Card>
    )
};

export default MainProductCard;