import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Appointment } from "../../components";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import axios from "axios";


const Title = styled('h2')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100%',
})

export const AppointmentsContainer = () => {
    const [patients, setPatients] = useState<any>([])

    useEffect(() => {
        const getPatients = async () => {
            const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/appointments');

            response.status === 200 ? setPatients(response.data) : setPatients([]);
        }

        getPatients();
    }, []);
    return <React.Fragment>
        <Title>Appointments</Title>
        <TableContainer component={Paper}>
            <Table size="small" style={{ backgroundColor: 'hsla(0,0%,92%,.3)' }}>
                <TableHead>
                    <TableRow>
                        {['Photo', 'Name', 'E-mail', 'Date', 'Visit Time', 'Number', 'Doctor', 'Injury', 'Actions'].map((tableCellName) => {
                            return <TableCell align="left"><b>{tableCellName}</b></TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {patients.map((currentPatient: any) => {
                        return <TableRow>
                            <Appointment image={currentPatient.image} name={currentPatient.name} email={currentPatient.email} date={currentPatient.date} visitTime={currentPatient.visitTime} number={currentPatient.number} doctor={currentPatient.doctor} injury={currentPatient.injury} />
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </React.Fragment>
};
