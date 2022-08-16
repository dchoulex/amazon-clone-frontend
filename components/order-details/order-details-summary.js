import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function OrderDetailsSummary(props) {
    const { name, postCode, city, address, credit } = props;

    return (
        <Box px={3} mb={3}>
            <Box className="flex px-6 py-5 border-2 border-solid border-gray-400 rounded-lg">
                <div className="flex flex-col">
                    <Typography className="font-semibold mb-1 text-lg">
                        Shipping Address
                    </Typography>

                    <div>
                        <Typography className="text-base">
                            {name}
                        </Typography>

                        <Typography className="text-base">
                            {postCode}
                        </Typography>

                        <Typography className="text-base">
                            {city}
                        </Typography>

                        <Typography className="text-base">
                            {address}
                        </Typography>
                    </div>
                </div>

                <div className="ml-10">
                    <Typography className="font-semibold mb-1 text-lg">
                        Payment Methods
                    </Typography>

                    <Typography className="text-base">
                        {credit}
                    </Typography>
                </div>

                <div className="ml-auto">
                    <Typography className="font-semibold mb-1 text-lg">
                        Order Summary
                    </Typography>

                    <div>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                            Subtotal :&nbsp;
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                            {credit}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow >
                                        <TableCell sx={{ borderBottom: "0px", paddingY: "5px" }}>
                                            Shipping cost :&nbsp;
                                        </TableCell>

                                        <TableCell sx={{borderBottom: "0px", paddingY: "5px" }}>
                                            {credit}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell sx={{ paddingY: "5px"}}>
                                            Subtotal :&nbsp;
                                        </TableCell>

                                        <TableCell sx={{ paddingY: "5px"}}>
                                            {credit}
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell sx={{ borderBottom: "0px", paddingY: "5px", fontWeight: "bold" }}>
                                            Grand Total :&nbsp;
                                        </TableCell>

                                        <TableCell sx={{ borderBottom: "0px", paddingY: "5px"}}>
                                            {credit}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>

            </Box>
        </Box>
    )
};

export default OrderDetailsSummary;