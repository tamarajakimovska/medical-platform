import { Box, styled } from "@mui/system";
import React from "react";
import { StringLiteralLike } from "typescript";
import { AppointmentsContainer } from "../../containers";
import { Button, Fab, TableCell } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    patient: any;
    areActionsVisible?: boolean
    onEditClick?: (patient: any) => void;
    onDeleteClick?: (patient: any) => void;
}

const StyleButton = styled('div')({
    alignItems: 'center',
    borderRadius: '60%',
    display: 'flex',
    height: '10px',
    justifyContent: 'center',
    padding: '0!important',
    width: '10px'
})

export const Appointment = ({ patient, areActionsVisible = true, onEditClick, onDeleteClick }: Props) => {
    return (
        <React.Fragment>
            <TableCell ><img src={patient.image} alt="patient" style={{ borderRadius: '50%', width: '32px', height: '32px' }} /></TableCell>
            <TableCell align="left">{patient.name}</TableCell>
            <TableCell align="left">{patient.email}</TableCell>
            <TableCell align="left">{patient.date}</TableCell>
            <TableCell align="left">{patient.visitTime}</TableCell>
            <TableCell align="left">{patient.number}</TableCell>
            <TableCell align="left">{patient.doctor}</TableCell>
            <TableCell align="left">{patient.injury}</TableCell>
            {
                areActionsVisible ? (
                    <TableCell align="left">
                        <Fab size="small" color="primary" aria-label="add" onClick={() => onEditClick && onEditClick(patient)}>
                            <EditIcon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add" onClick={() => onDeleteClick && onDeleteClick(patient)}>
                            <DeleteIcon />
                        </Fab>
                    </TableCell>
                ) : null
            }
        </React.Fragment>
    )
}