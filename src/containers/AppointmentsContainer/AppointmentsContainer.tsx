import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Appointment } from "../../components";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import axios from "axios";
import { Context } from "../../context";


const Title = styled('h2')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100%',
})

export const AppointmentsContainer = () => {
    // const [patients, setPatients] = useState<any>([])
    const state = useContext(Context);

    // useEffect(() => {
    //     const getPatients = async () => {
    //         const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/appointments');

    //         response.status === 200 ? setPatients(response.data) : setPatients([]);
    //     }

    //     getPatients();
    // }, []);

    useEffect(() => {
        const getPatients = async () => {
            // Do not remove this!!!!!
            // const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');
            // response.status === 200 ? setPatients(response.data) : setPatients([]);
            if (!state.patients.length)
                try {
                    state.getPatients();
                    const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');

                    state.getPatientsSuccess(response.data);
                } catch (error) {
                    state.getPatientsFail();
                }
        }

        getPatients();
    }, [])

    const onEdit = (patient: any) => {
        state.setDialogMode('edit');
        state.setDialogPatient(patient);
        state.setIsAddPatientDialogOpen(true);
    };

    const onDelete = () => {

    };

    return <React.Fragment>
        <Title>Appointments</Title>
        {
            state.isLoadingPatients ? <div>Loading patients ...</div> : (
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
                            {state.patients.map((currentPatient: any) => {
                                return <TableRow>
                                    <Appointment
                                        patient={currentPatient}
                                        onEditClick={() => onEdit(currentPatient)}
                                        onDeleteClick={() => onDelete()}
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
