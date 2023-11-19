import React, { useEffect, useState } from "react";
import { Appointment, DashboardCart, DonutChart } from "../../components";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SickIcon from '@mui/icons-material/Sick';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PaidIcon from '@mui/icons-material/Paid';
import axios from "axios";


const DASHBOARD_CART = [
    {
        icon: <LocalHospitalIcon />,
        name: "Appointments",
        count: 213
    },
    {
        icon: <SickIcon />,
        name: "New patients",
        count: 213
    },
    {
        icon: <VaccinesIcon />,
        name: "Operations",
        count: 23
    },
    {
        icon: <PaidIcon />,
        name: "Earnings",
        count: 5238
    },
]

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100%',
})

export const DashboardContainer = () => {
    const [patients, setPatients] = useState<any>([]);

    useEffect(() => {
        const getPatients = async () => {
            const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');

            response.status === 200 ? setPatients(response.data) : setPatients([]);
        }

        getPatients();
    }, [])

    return <React.Fragment>
        <Box display={'flex'} justifyContent={'space-between'}>
            {DASHBOARD_CART.map((currentCart) => {
                return <DashboardCart icon={currentCart.icon} name={currentCart.name} count={currentCart.count} />
            })}
        </Box>
        <Box display={'flex'} justifyContent={'space-between'}>
            <Box><h3> Age </h3>
                <DonutChart series={[19, 17, 13, 11, 38]} labels={["0-10", "10-20", "20-30", "30-40", "40+"]} responsive={[]} donutChartType="donut" /> </Box>
            <Box> <h3>Gender</h3>
                <DonutChart series={[53, 47]} labels={["Male", "Female"]} responsive={[]} donutChartType="pie" /> </Box>
            <Box> <h3> Departments </h3>
                <DonutChart series={[115, 173, 154, 180, 219]} labels={["Cardiology", "Dentistry", "Laboratory", "Pulmonology", "Gynecology"]} responsive={[]} donutChartType="polarArea" />
            </Box>
        </Box>
        <Box>
            <Title>Last Appointments</Title>
            <TableContainer component={Paper}>
                <Table size="small" style={{ backgroundColor: 'hsla(0,0%,92%,.3)' }}>
                    <TableHead style={{ backgroundColor: '#EBEBEB' }}>
                        <TableRow>
                            {['Photo', 'Name', 'E-mail', 'Date', 'Visit Time', 'Number', 'Doctor', 'Injury'].map((tableCellName) => {
                                return <TableCell align="left"><b>{tableCellName}</b></TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    {<TableBody>
                        {patients.map((currentPatient: any) => {
                            return <TableRow>
                                <Appointment image={currentPatient.image} name={currentPatient.name} email={currentPatient.email} date={currentPatient.date} visitTime={currentPatient.visitTime} number={currentPatient.number} doctor={currentPatient.doctor} injury={currentPatient.injury} areActionsVisible={false} />
                            </TableRow>
                        })}
                    </TableBody>}
                </Table>
            </TableContainer>
        </Box>
    </React.Fragment>
}