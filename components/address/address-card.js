import { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

function AddressCard(props) {
    const { address } = props;

    return (
        <Card className="border-2 border-solid border-gray-200 w-[350px] h-[300px] flex flex-col">
            <Box 
                p={2} 
                className="flex items-center"
            >
                <CardHeader 
                    title={address.name} 
                    className="p-0"
                />

                {address.isDefault &&
                    <Chip 
                        label="DEFAULT"
                        color="primary"
                        className="ml-auto mr-4"
                    />
                }
            </Box>

            <Divider sx={{borderColor: "gray"}} />

            <CardContent>
                <Typography variant="body1">
                    {address.postCode}
                </Typography>

                <Typography variant="body1">
                    {address.city}
                </Typography>

                <Typography variant="body1">
                    {address.detail}
                </Typography>

                <Typography variant="body1">
                    {address.country}
                </Typography>

                <Typography variant="body1">
                    Phone number : {address.phoneNumber}
                </Typography>
            </CardContent>

            <CardActions className="mt-auto">
                <Button disableRipple>Edit</Button>

                <Divider 
                    orientation="vertical"
                    variant="middle" 
                    flexItem 
                />

                <Button disableRipple>Remove</Button>

                {!address.isDefault && (
                    <Fragment>
                        <Divider 
                            orientation="vertical"
                            variant="middle" 
                            flexItem 
                        />

                        <Button disableRipple>Set as default</Button>
                    </Fragment>
                )}
            </CardActions>
        </Card>
    )
};

export default AddressCard;