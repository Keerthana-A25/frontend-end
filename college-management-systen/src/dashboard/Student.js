import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
    Typography,
    Button,
    IconButton,
    Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate} from "react-router-dom";

const ViewStudent = () => {
    const navigate = useNavigate();
    const students = [
        { id: 1, name: "Ajith", regNumber: "91251310301", department: "Computer Science", dob: "2005-05-12", classCoordinator: "Aanjan" },
        { id: 2, name: "Arun", regNumber: "91251310302", department: "Computer Science", dob: "2006-06-23", classCoordinator: "Ponvasan" },
        { id: 3, name: "Bala", regNumber: "91251310303", department: "Computer Science", dob: "2007-04-17", classCoordinator: "Geetha" },
        { id: 4, name: "Shakthi", regNumber: "91251310304", department: "Computer Science", dob: "2004-09-10", classCoordinator: "Janaki Raman" },
        { id: 5, name: "Keerathana", regNumber: "91251310305", department: "Computer Science", dob: "2003-11-22", classCoordinator: "Mohana" },

    ];

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Number of rows per page

    // Handle page change
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Calculate paginated data
    const paginatedStudents = students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const handleAddStudent = () => {
        navigate("/addStudent")
    };

    const handleEdit = (id) => {
        navigate("/addStudent", { state: { student: id } });
    };

    const handleDelete = (id) => {
        alert(`Delete student with ID: ${id}`);
    };

    return (
        <Paper sx={{ padding: 2, margin: "20px auto", maxWidth: "90%" }}>
            {/* Header with Add Student Button */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                <Typography variant="h5">View Students</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddStudent}
                >
                    Add Student
                </Button>
            </Box>

            {/* Student Table */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>S. No</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Reg Number</TableCell>
                            <TableCell>Standard</TableCell>
                            <TableCell>D.O.B</TableCell>
                            <TableCell>Class Teacher</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedStudents.map((student, index) => (
                            <TableRow key={student.id}>
                                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.regNumber}</TableCell>
                                <TableCell>{student.department}</TableCell>
                                <TableCell>{student.dob}</TableCell>
                                <TableCell>{student.classCoordinator}</TableCell>
                                <TableCell align="center">
                                    <IconButton color="primary" onClick={() => handleEdit(student.id)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(student.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
                component="div"
                count={students.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[2, 5, 10]}
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: 'center',
                    textAlign: 'center'

                }}
            />
        </Paper>
    );
};

export default ViewStudent;
