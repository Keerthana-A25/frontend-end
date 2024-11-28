import React from "react";
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import {performanceDetails, subjectDetails} from "../constant/constant";

const ViewSubject = () => {
    const location = useLocation();
    const { type } = location.state || {};

    const data =
        type === 'viewSubject'
            ? subjectDetails
            : performanceDetails


    return (
        <Container maxWidth="lg" sx={{padding: 5}}>
            {type === 'viewSubject' ? (
                <Box>
                    <Typography variant="h5" sx={{paddingBottom: 5}}>View Subject</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.No</TableCell>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Staff Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((row, index) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{row.subject}</TableCell>
                                        <TableCell>{row.staffName}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ) : (
                <Box>
                    <Typography variant="h5" sx={{paddingBottom: 5}}>Academic Performance</Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Semester 1</TableCell>
                                    <TableCell>Maths</TableCell>
                                    <TableCell>Physics</TableCell>
                                    <TableCell>Chemistry</TableCell>
                                    <TableCell>English</TableCell>
                                    <TableCell>CG</TableCell>
                                    <TableCell>Computer Programing</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {data.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.semester}</TableCell>
                                        <TableCell>{row.maths}</TableCell>
                                        <TableCell>{row.history}</TableCell>
                                        <TableCell>{row.geography}</TableCell>
                                        <TableCell>{row.english}</TableCell>
                                        <TableCell>{row.computer}</TableCell>
                                        <TableCell>{row.art}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Container>
    );
};

export default ViewSubject;
