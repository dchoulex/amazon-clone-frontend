import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import { checkoutActions } from "../../../store/checkout-slice";
import EditAddressForm from "../../address/edit-address-form";

function SelectAddressCard(props) {
    const { address, shippingAddress, setOpenSelectAddressDialog, setDataIsChanging } = props;
    const [ openEditAddressForm, setOpenEditAddressForm ] = useState(false);
    const dispatch = useDispatch();

    const handleOpenEditAddressForm = () => {
        setOpenEditAddressForm(true);
    };

    const handleSelectAddress = () => {
        dispatch(checkoutActions.setShippingAddress({ shippingAddress: address }));

        setOpenSelectAddressDialog(false);
    };

    return (
        <Card 
            sx={{
                border: 1,
                borderColor: "#D3D3D3",
                width: "350px",
                height: "280px",
                display: "flex",
                flexDirection: "column",
            }}
            className="border-2 border-solid border-gray-500"
        >
            <Box 
                p={2} 
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <CardHeader 
                    title={address.name.length > 15 ? address.name.slice(0, 15) + "..." : address.name} 
                    sx={{ p: 0 }}
                />

                {address.isDefault &&
                    <Chip 
                        label="DEFAULT"
                        color="primary"
                        sx={{
                            ml: "auto",
                            mr: 1
                        }}
                    />
                }
            </Box>

            <Divider sx={{ borderColor: "gray" }} />

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

            <CardActions sx={{ mt: "auto" }}>
                <Button 
                    disableRipple 
                    onClick={handleOpenEditAddressForm}
                >
                    Edit
                </Button>

                {shippingAddress._id !== address._id && (
                    <Fragment>
                        <Divider orientation="vertical" flexItem variant="middle" />
        
                        <Button onClick={handleSelectAddress}>Select</Button>
                    </Fragment>
                )}

                <EditAddressForm 
                    openEditAddressForm={openEditAddressForm}
                    setOpenEditAddressForm={setOpenEditAddressForm}
                    address={address}
                    setDataIsChanging={setDataIsChanging}
                />
            </CardActions>
        </Card>
    )
};

export default SelectAddressCard;