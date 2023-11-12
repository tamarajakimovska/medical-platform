import React from "react";
import Patient1 from '../../images/patient1.jpeg';
import Patient2 from '../../images/patient2.jpeg';
import Patient3 from '../../images/patient3.jpeg';
import Patient4 from '../../images/patient4.jpeg';
import Patient5 from '../../images/patient5.jpeg';
import Patient6 from '../../images/patient6.jpeg';
import Patient7 from '../../images/patient7.jpeg';
import Patient8 from '../../images/patient8.jpeg';
import Patient9 from '../../images/patient9.jpeg';
import Patient10 from '../../images/patient10.jpeg';
import Patient11 from '../../images/patient11.jpeg';
import Patient12 from '../../images/patient12.jpeg';
import Patient13 from '../../images/patient13.jpeg';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Patient } from "../../components";

const OUR_PATIENTS = [
    {
        image: Patient1,
        name: 'Emma',
        id: 10021,
        age: 42,
        adress: '71 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-25',

    },
    {
        image: Patient2,
        name: 'Olivia',
        id: 10022,
        age: 22,
        adress: '72 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-24',
    },
    {
        image: Patient3,
        name: 'Ava',
        id: 10023,
        age: 28,
        adress: '73 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-23',
    },
    {
        image: Patient4,
        name: 'Noah',
        id: 10024,
        age: 36,
        adress: '74 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-22',
    },
    {
        image: Patient5,
        name: 'Isabella',
        id: 10025,
        age: 33,
        adress: '75 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-21',
    },
    {
        image: Patient6,
        name: 'Sophia',
        id: 10026,
        age: 21,
        adress: '76 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-20',
    },
    {

        image: Patient7,
        name: 'Mia',
        id: 10027,
        age: 47,
        adress: '77 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-19',
    },
    {
        image: Patient8,
        name: 'Wiliam',
        id: 10028,
        age: 29,
        adress: '78 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-18',
    },
    {
        image: Patient9,
        name: 'James',
        id: 10029,
        age: 37,
        adress: '79 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-17',
    },
    {
        image: Patient1,
        name: 'Logan',
        id: 10030,
        age: 31,
        adress: '80 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-16',
    },
    {
        image: Patient10,
        name: 'Emma',
        id: 10031,
        age: 27,
        adress: '81 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-15',
    },
    {
        image: Patient11,
        name: 'Emma',
        id: 10032,
        age: 32,
        adress: '82 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-14',
    },
    {
        image: Patient12,
        name: 'Emma',
        id: 10033,
        age: 19,
        adress: '83 Pilgrim Avenue Chevy Chase, MD 20815',
        number: '0126596452',
        lastVisit: '2023-05-13',
    },
]


export const PatientsContainer = () => {
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
                {OUR_PATIENTS.map((currentOurPatient) => {
                    return <TableRow>
                        <Patient image={currentOurPatient.image} name={currentOurPatient.name} id={currentOurPatient.id} age={currentOurPatient.age} adress={currentOurPatient.adress} number={currentOurPatient.number} lastVisit={currentOurPatient.lastVisit} />
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
}