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

import getAPI from "../../../utils/getAPI";
import EditAddressForm from "../../address/edit-address-form";

function SelectAddressCard(props) {
    const { address } = props;
    const [ openEditAddressForm, setOpenEditAddressForm ] = useState(false);

    const handleOpenEditAddressForm = () => {
        setOpenEditAddressForm(true);
    };

    return (
        <Card 
            sx={{
                border: 1,
                borderColor: "#D3D3D3"
            }}
        className="border-2 border-solid border-gray-500 w-[350px] h-[300px] flex flex-col">
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

                <Button>Select</Button>

                <EditAddressForm 
                    openEditAddressForm={openEditAddressForm}
                    setOpenEditAddressForm={setOpenEditAddressForm}
                    address={address}
                />
            </CardActions>
        </Card>
    )
};

export default SelectAddressCard;