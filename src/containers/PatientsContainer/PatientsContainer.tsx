import React, { useContext, useEffect, useState } from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import { Patient } from "../../components";
import axios from "axios";
import { useGetPatients } from "../../hooks";
import { Context } from "../../context";
import { Patient as IPatient } from "../../interfaces";
import { TableLoaders } from "../../components/Loaders/TableLoaders";


const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',

})

export const PatientsContainer = () => {
    const state = useContext(Context);

    useGetPatients();

    const onDelete = async (patient: IPatient) => {
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

    const onEditPatient = async (patient: IPatient) => {
        state.setDialogMode('edit');
        state.setDialogPatient(patient);
        state.setIsAddPatientDialogOpen(true);
    }

    return <Box
        sx={{
            padding: {
                xs: '1.5rem 1.5rem 1.5rem 1.5rem',
                sm: '0'
            }
        }}>
        <Title>Patients</Title>
        {
            state.isLoadingPatients ? <TableLoaders /> : (
                <TableContainer component={Paper}>
                    <Table size="small" style={{ backgroundColor: 'hsla(0,0%,92%,.3)' }}>
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
                            {state.patients.map((currentPatient: IPatient) => {
                                return <TableRow>
                                    <Patient
                                        patient={currentPatient}
                                        onEditClick={() => onEditPatient(currentPatient)}
                                        onDeleteClick={() => onDelete(currentPatient)}
                                    />
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    </Box>
}