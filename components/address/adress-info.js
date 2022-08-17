import { useState } from "react";
import { getCountries } from "node-countries";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import PageTitle from "../ui/page-title/page-title";
import PaginationButtons from "../ui/pagination-buttons";
import AddressCard from "./address-card";

function AddressInfo(props) {
    const { title, addresses } = props;
    const numberOfPages = 4;
    const countries = getCountries().map(country => country.name).sort();

    const [ openAddressDialog, setOpenAddressDialog ] = useState(false);
    const [ openConfirmCloseDialog, setOpenConfirmCloseDialog ] = useState(false);


    const [ country, setCountry ] = useState("Japan");

    const handleOpenAddressDialog = () => {
        setOpenAddressDialog(true);
    };

    const handleCloseAddressDialog = () => {
        setOpenAddressDialog(false);
    };

    const handleOpenConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(true);
    };

    const handleCloseConfirmCloseDialog = () => {
        setOpenConfirmCloseDialog(false);
    };

    const handleChangeCountry = event => {
        setCountry(event.target.value);
    };

    const handleCloseAllDialog = () => {
        setOpenConfirmCloseDialog(false);
        setOpenAddressDialog(false);
    }

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 300
            }
        },
    };

    return (
        <Box>
            <Paper className="bg-white">
                <PageTitle title={title} />

                <Divider className="border-gray-400 mb-5"/>

                <Button 
                    variant="contained"
                    className="ml-5 mb-4"
                    size="small"
                    startIcon={<ControlPointIcon />}
                    onClick={handleOpenAddressDialog}
                >
                    Add new address
                </Button>

                <Dialog open={openAddressDialog}>
                    <DialogTitle>
                        <div className="flex">
                            <Typography variant="overline">Add a new address </Typography> 
                            <CloseIcon />
                        </div>
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText sx={{ mb: "1rem" }}>
                            Please enter your address information.
                        </DialogContentText>

                        <TextField 
                            label="Full name" 
                            variant="standard"
                        />

                        <FormControl>
                            <InputLabel id="country-name">Country</InputLabel>
                            <Select
                                labelId="country-name"
                                id="country-name"
                                value={country}
                                label="Country"
                                fullWidth
                                onChange={handleChangeCountry}
                                MenuProps={MenuProps}
                            >
                                {countries.map((country, index) => (
                                    <MenuItem 
                                        key={`country-${index}`}
                                        value={country}
                                    >
                                        {country}
                                    </MenuItem>
                                ))}
                            </Select>

                            <TextField 
                                label="Phone number" 
                                variant="standard"
                            />

                            <TextField 
                                label="Postal code" 
                                variant="standard"
                            />

                            <TextField 
                                label="Prefecture" 
                                variant="standard"
                            />

                            <TextField 
                                label="City, Ward, Town" 
                                variant="standard"
                            />

                            <TextField 
                                label="Chome, Banchi, Go" 
                                variant="standard"
                            />
                            
                            <TextField 
                                label="Building name" 
                                variant="standard"
                            />
                            <TextField 
                                label="Unit" 
                                variant="standard"
                            />
                        </FormControl>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleOpenConfirmCloseDialog}>Cancel</Button>

                        <Button>Add address</Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={openConfirmCloseDialog}>
                    <DialogTitle id="confirm-close-dialog">
                        Are you sure you want to close?
                    </DialogTitle>

                    <DialogContent id="confirm-close-dialog-title">
                        <DialogContentText id="confirm-close-dialog-description">
                            You will lose all of the information you have input so far if you close.
                        </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleCloseConfirmCloseDialog}>No</Button>

                        <Button onClick={handleCloseAllDialog}>Yes</Button>
                    </DialogActions>
                </Dialog>

                <Box px={5} my={2}>
                    <Grid container spacing={3}>
                        {addresses.map((address, index) => (
                            <Grid 
                                key={`address-card-${index}`} 
                                item 
                                xs={12} 
                                md={6} 
                                lg={4} 
                                xl={3}
                                className="flex justify-center items-center"
                            >
                                <AddressCard address={address} />
                            </Grid>
                        ))}   
                    </Grid>
                </Box>

    
                <PaginationButtons numberOfPages={numberOfPages} />
            </Paper>
        </Box>
    )
};

export default AddressInfo;