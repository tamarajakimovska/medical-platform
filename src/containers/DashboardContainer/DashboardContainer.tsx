import React, { useContext, useEffect, useState } from "react";
import { Appointment, BasicAreaChart, DashboardCart, DonutChart } from "../../components";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SickIcon from '@mui/icons-material/Sick';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PaidIcon from '@mui/icons-material/Paid';
import { Context } from "../../context";
import { AreaChart } from "../../components";
import { useGetPatients } from "../../hooks/use-get-patients.hook";


const DASHBOARD_CART = [
    {
        icon: <LocalHospitalIcon fontSize="large" />,
        name: "Appointments",
        count: 213
    },
    {
        icon: <SickIcon fontSize="large" />,
        name: "New patients",
        count: 213
    },
    {
        icon: <VaccinesIcon fontSize="large" />,
        name: "Operations",
        count: 23
    },
    {
        icon: <PaidIcon fontSize="large" />,
        name: "Earnings",
        count: 5238
    },
]

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100%',
})

const IncomeInCurrentMonth = styled('div')({
    color: 'rgb(157, 157, 157)',
    fontSize: '14px',
    marginLeft: '20px'
})

const Income = styled('div')({
    marginLeft: '20px',
    fontSize: '20px',

})

export const DashboardContainer = () => {
    // const [patients, setPatients] = useState<any>([]);
    const state = useContext(Context);

    useGetPatients();

    return <Box
        sx={{
            margin: {
                xs: '1.5rem',
                sm: '0'
            }
        }}>
        <Box display={'flex'} justifyContent={'space-between'}
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
            {DASHBOARD_CART.map((currentCart) => {
                return <DashboardCart icon={currentCart.icon} name={currentCart.name} count={currentCart.count} />
            })}
        </Box>
        <Box mt={3}>
            <Income> <b>Hospital survey</b></Income>
            <Box my={1}>
                <IncomeInCurrentMonth>Number of patients in {new Date().getFullYear()}</IncomeInCurrentMonth>
            </Box>
            <BasicAreaChart />
        </Box>
        <Box mt={3}>
            <Income> <b>Income</b></Income>
            <Box my={1}>
                <IncomeInCurrentMonth>Income in current month</IncomeInCurrentMonth>
            </Box>
            <AreaChart />
        </Box>
        <Box display={'flex'} justifyContent={'space-between'}
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
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
            {
                state.isLoadingPatients ? <div>Loading ...</div> : (
                    <TableContainer component={Paper}>
                        <Table size="small" style={{ backgroundColor: 'hsla(0,0%,92%,.3)' }}>
                            <TableHead style={{ backgroundColor: '#EBEBEB' }}>
                                <TableRow>
                                    {['Photo', 'Name', 'E-mail', 'Date', 'Visit Time', 'Number', 'Doctor', 'Injury'].map((tableCellName) => {
                                        return <TableCell align="left"><b>{tableCellName}</b></TableCell>
                                    })}
                                </TableRow>
                            </TableHead>
                            {
                                <TableBody>
                                    {state.patients.map((currentPatient: any) => {
                                        return <TableRow>
                                            <Appointment
                                                patient={currentPatient}
                                                areActionsVisible={false}
                                            />
                                        </TableRow>
                                    })}
                                </TableBody>
                            }
                        </Table>
                    </TableContainer>
                )
            }
        </Box>
    </Box>
}