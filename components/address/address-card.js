import { useState, Fragment } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import getAPI from "../../utils/getAPI";
import EditAddressForm from "./edit-address-form";

function AddressCard(props) {
    const { address } = props;
    const [ openEditAddressForm, setOpenEditAddressForm ] = useState(false);

    const handleOpenEditAddressForm = () => {
        setOpenEditAddressForm(true);
    };

    const handleSetAsDefault = async () => {
        const SET_ADDRESS_AS_DEFAULT_API = getAPI(process.env.NEXT_PUBLIC_SET_ADDRESS_AS_DEFAULT_API, { id: address._id });

        await axios.patch(SET_ADDRESS_AS_DEFAULT_API);
    };

    const handleRemoveAddress = async () => {
        const DELETE_ADDRESS_API = getAPI(process.env.NEXT_PUBLIC_DELETE_ADDRESS_API, { id: address._id });

        await axios.delete(DELETE_ADDRESS_API);
    };

    return (
        <Card className="border-2 border-solid border-gray-200 w-[350px] h-[300px] flex flex-col">
            <Box 
                p={2} 
                className="flex items-center"
            >
                <CardHeader 
                    title={address.name.length > 15 ? address.name.slice(0, 15) + "..." : address.name} 
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
                    {address.rest}
                </Typography>

                <Typography variant="body1">
                    {address.country}
                </Typography>

                <Typography variant="body1" className="my-2">
                    <span className="font-semibold">Phone number : </span>{address.phoneNumber}
                </Typography>
            </CardContent>

            <CardActions className="mt-auto">
                <Button disableRipple onClick={handleOpenEditAddressForm}>Edit</Button>

                <EditAddressForm 
                    openEditAddressForm={openEditAddressForm}
                    setOpenEditAddressForm={setOpenEditAddressForm}
                    address={address}
                />

                <Divider 
                    orientation="vertical"
                    variant="middle" 
                    flexItem 
                />

                <Button disableRipple onClick={handleRemoveAddress}>Remove</Button>

                {!address.isDefault && (
                    <Fragment>
                        <Divider 
                            orientation="vertical"
                            variant="middle" 
                            flexItem 
                        />

                        <Button disableRipple onClick={handleSetAsDefault}>Set as default</Button>
                    </Fragment>
                )}
            </CardActions>
        </Card>
    )
};

export default AddressCard;