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
import { Box } from "@mui/system";
import { Appointment } from "../../components";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";

// TO-DO: Use BE here
export const PATIENTS = [
    {
        image: Patient1,
        name: 'Emma',
        email: 'emma@gmail.com',
        date: '2023-05-24',
        visitTime: '9:00 - 9:30',
        number: '0126596452',
        doctor: 'Dr.Liam',
        injury: 'arthritis'
    },
    {
        image: Patient2,
        name: 'Olivia',
        email: 'olivia@gmail.com',
        date: '2023-05-23',
        visitTime: '10:00 - 10:30',
        number: '0126596351',
        doctor: 'Dr.Noah',
        injury: 'depression'
    },
    {
        image: Patient3,
        name: 'Ava',
        email: 'ava@gmail.com',
        date: '2023-05-21',
        visitTime: '11:00 - 11:30',
        number: '0126596537',
        doctor: 'Dr.Emma',
        injury: 'diarrhoea'
    },
    {
        image: Patient4,
        name: 'Noah',
        email: 'noah@gmail.com',
        date: '2023-05-20',
        visitTime: '13:00 - 13:30',
        number: '0126534562',
        doctor: 'Dr.James',
        injury: 'dyslexia'
    },
    {
        image: Patient5,
        name: 'Isabella',
        email: 'isabella@gmail.com',
        date: '2023-05-19',
        visitTime: '9:00 - 9:30',
        number: '0126598459',
        doctor: 'Dr.Noah',
        injury: 'flu'
    },
    {
        image: Patient6,
        name: 'Sophia',
        email: 'sophia@gmail.com',
        date: '2023-05-18',
        visitTime: '16:00 - 16:30',
        number: '0126596621',
        doctor: 'Dr.Olivia',
        injury: 'fracture'
    },
    {
        image: Patient7,
        name: 'Mia',
        email: 'mia@gmail.com',
        date: '2023-05-17',
        visitTime: '15:00 - 15:30',
        number: '0126596941',
        doctor: 'Dr.Ema',
        injury: 'hypothermia'
    },
    {
        image: Patient8,
        name: 'Wiliam',
        email: 'william@gmail.com',
        date: '2023-05-16',
        visitTime: '14:00 - 14:30',
        number: '0126593489',
        doctor: 'Dr.Olivia',
        injury: 'sunburn'
    },
    {
        image: Patient9,
        name: 'James',
        email: 'james@gmail.com',
        date: '2023-05-15',
        visitTime: '9:00 - 9:30',
        number: '012659882',
        doctor: 'Dr.Logan',
        injury: 'mumps'
    },
    {
        image: Patient10,
        name: 'Logan',
        email: 'logan@gmail.com',
        date: '2023-05-14',
        visitTime: '10:00 - 10:30',
        number: '0126596413',
        doctor: 'Dr.Benjamin',
        injury: 'tonsillitis'
    },
    {
        image: Patient11,
        name: 'Emma',
        email: 'emma@gmail.com',
        date: '2023-05-13',
        visitTime: '9:00 - 9:30',
        number: '0126596452',
        doctor: 'Dr.Liam',
        injury: 'arthritis'
    },
    {
        image: Patient12,
        name: 'Emma',
        email: 'emma@gmail.com',
        date: '2023-05-12',
        visitTime: '9:00 - 9:30',
        number: '0126596452',
        doctor: 'Dr.Liam',
        injury: 'arthritis'
    },
    {
        image: Patient13,
        name: 'Emma',
        email: 'emma@gmail.com',
        date: '2023 - 05 - 11',
        visitTime: '9:00 - 9:30',
        number: '0126596452',
        doctor: 'Dr.Liam',
        injury: 'arthritis'
    },
]


const Title = styled('h2')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100%',
})

export const AppointmentsContainer = () => {
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
                    {PATIENTS.map((currentPatient) => {
                        return <TableRow>
                            <Appointment image={currentPatient.image} name={currentPatient.name} email={currentPatient.email} date={currentPatient.date} visitTime={currentPatient.visitTime} number={currentPatient.number} doctor={currentPatient.doctor} injury={currentPatient.injury} />
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </React.Fragment>
};
