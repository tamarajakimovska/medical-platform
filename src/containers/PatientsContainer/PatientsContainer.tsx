import React, { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import { Patient } from "../../components";
import axios from "axios";


const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',

})

export const PatientsContainer = () => {
    const [patients, setPatients] = useState<any>([]);

    useEffect(() => {
        const getPatients = async () => {
            const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');

            response.status === 200 ? setPatients(response.data) : setPatients([]);
        }

        getPatients();
    }, [])
    return <TableContainer component={Paper}>
        <Table size="small" style={{ backgroundColor: 'hsla(0,0%,92%,.3)', marginTop: '4%' }}>
            <TableHead style={{ backgroundColor: '#336cfb' }}>
                <TableRow>
                    <TableCell align="left"> <b>Photo </b></TableCell>
                    <TableCell align="left"><b>Name</b></TableCell>
                    <TableCell align="left"><b>ID</b></TableCell>
                    <TableCell align="left"><b>Age</b></TableCell>
                    <TableCell align="left"><b>Adress</b></TableCell>
                    <TableCell align="left"><b>Number</b></TableCell>
                    <TableCell align="left"><b>Last Visit</b></TableCell>
                    <TableCell align="left"><b>Status</b></TableCell>
                    <TableCell align="left"><b>Actions</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {patients.map((currentOurPatient: any) => {
                    return <TableRow>
                        <Patient image={currentOurPatient.image} name={currentOurPatient.name} id={currentOurPatient.id} age={currentOurPatient.age} adress={currentOurPatient.adress} number={currentOurPatient.number} lastVisit={currentOurPatient.lastVisit} />
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
}