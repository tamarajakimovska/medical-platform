import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Appointment } from "../../components";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { Context } from "../../context";
import { useGetAppointments, useGetPatients } from "../../hooks";
import AddIcon from '@mui/icons-material/Add';


const Title = styled('h2')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100%',
})



export const AppointmentsContainer = () => {
    const state = useContext(Context);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useGetAppointments();

    const onEdit = async (appointment: any) => {
        state.setDialogMode('edit');
        state.setDialogAppointment(appointment);
        state.setIsAddAppointmentDialogOpen(true);
    };

    const onDelete = async (appointment: any) => {
        try {
            const response = await axios.delete(`https://6554a22a63cafc694fe6bb57.mockapi.io/appointments/${appointment.id}`)
        } catch {
            console.log("Delete failed");
        } finally {
            try {
                state.getAppointments();
                const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/appointments');

                state.getAppointmentsSuccess(response.data);
            } catch (error) {
                state.getAppointmentsFail();
            }
        }
    };

    return <Box
        sx={{
            padding: {
                xs: '0 1.5rem 1.5rem 1.5rem',
                sm: '0'

            }
        }}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Title>Appointments</Title>
            <Button variant="contained" onClick={() => state.setIsAddAppointmentDialogOpen(true)} style={{ maxHeight: '36px', minWidth: isMobile ? '0' : '200px' }}>
                <AddIcon /> {isMobile ? null : 'Add Appointment'}
            </Button>
        </Box>
        {
            state.isLoadingAppointments ? <div>Loading appointments ...</div> : (
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
                            {state.appointments.map((appointment: any) => {
                                return <TableRow>
                                    <Appointment
                                        patient={appointment}
                                        onEditClick={() => onEdit(appointment)}
                                        onDeleteClick={() => onDelete(appointment)}
                                    />
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    </Box>
};
