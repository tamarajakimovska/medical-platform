import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Appointment } from "../../components";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import axios from "axios";
import { Context } from "../../context";
import { useGetAppointments, useGetPatients } from "../../hooks";


const Title = styled('h2')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100%',
})

export const AppointmentsContainer = () => {
    const state = useContext(Context);

    useGetAppointments();

    const onEdit = async (patient: any) => {
        state.setDialogMode('edit');
        state.setDialogPatient(patient);
        state.setIsAddPatientDialogOpen(true);
    };

    const onDelete = async (patient: any) => {
        try {
            const response = await axios.delete(`https://6555e1d584b36e3a431e8f4f.mockapi.io/patients/${patient.id}`)

            if (response.status === 200) {
                try {
                    state.getPatients();
                    const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');

                    state.getPatientsSuccess(response.data);
                } catch (error) {
                    state.getPatientsFail();
                }
            }
        } catch {
            console.log("Delete failed");
        }
    };

    return <React.Fragment>
        <Title>Appointments</Title>
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
    </React.Fragment>
};
