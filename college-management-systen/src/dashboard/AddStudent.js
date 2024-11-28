import React, {useEffect, useState} from "react";
import {
    TextField,
    Button,
    Container,
    Box,
    Grid
} from "@mui/material";
import { useLocation } from "react-router-dom";


const AddStudent = () => {

    const location = useLocation();
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [standard, setStandard] = useState("");
    const [dob, setDob] = useState("");
    const [classTeacher, setClassTeacher] = useState("");
    const [yearOfJoining, setYearOfJoining] = useState("");

    useEffect(() => {
        if (location.state && location.state.student) {
            const id = location.state.student.id;

        }
    }, [location.state]);



    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            id: students.length + 1,
            name,
            regNumber,
            standard,
            dob,
            classTeacher,
            yearOfJoining,
        };

        setStudents([...students, newStudent]);
        setName("");
        setRegNumber("");
        setStandard("");
        setDob("");
        setClassTeacher("");
        setYearOfJoining("");
    };



    return (
        <Container sx={{ p: 3 }}>


            <form onSubmit={handleSubmit}>
                <Box mb={2}>
                    <Grid container spacing={3} justifyContent="center">

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Reg Number"
                                fullWidth
                                value={regNumber}
                                onChange={(e) => setRegNumber(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Department"
                                fullWidth
                                value={standard}
                                onChange={(e) => setStandard(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Date of Birth"
                                fullWidth
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Class Coordinator"
                                fullWidth
                                value={classTeacher}
                                onChange={(e) => setClassTeacher(e.target.value)}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Year of Joining"
                                fullWidth
                                type="number"
                                value={yearOfJoining}
                                onChange={(e) => setYearOfJoining(e.target.value)}
                                required
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={2} display="flex" justifyContent="center">
                    <Grid container spacing={2} justifyContent="center">




                        <Grid item xs={12} sm={6} md={4}>
                            <Button
                                variant="contained"
                                color="default"
                                fullWidth
                                onClick={() => {}}
                                sx={{
                                    height: "100%",
                                    backgroundColor: "white",
                                    borderColor: "#B0B0B0",
                                    color: "#000",
                                    '&:hover': {
                                        backgroundColor: "#F5F5F5",
                                        borderColor: "#B0B0B0",
                                    },
                                }}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                type="submit"
                                sx={{ height: "100%" }}
                            >
                                Add Student
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </form>




        </Container>
    );
};

export default AddStudent;
