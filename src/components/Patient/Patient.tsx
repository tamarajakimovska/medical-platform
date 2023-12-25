import { Button, Fab, TableCell } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Patient as IPatient } from "../../interfaces";

interface Props {
    patient: IPatient
    onEditClick?: (patient: IPatient) => void;
    onDeleteClick?: (patient: IPatient) => void;
}

export const Patient = ({ patient, onEditClick, onDeleteClick }: Props) => {
    return (<React.Fragment>
        <TableCell><img src={patient.image} width='100%' alt="patient" style={{ borderRadius: '50%', width: '32px', height: '32px' }} /></TableCell>
        <TableCell align="left">{patient.name}</TableCell>
        <TableCell align="left">{patient.id}</TableCell>
        <TableCell align="left">{patient.age}</TableCell>
        <TableCell align="left">{patient.adress}</TableCell>
        <TableCell align="left">{patient.number}</TableCell>
        <TableCell align="left">{patient.lastVisit}</TableCell>
        <TableCell align="left">
            <Button variant="contained" color="success">
                Approved
            </Button>
        </TableCell>
        <TableCell align="left" style={{ display: 'flex' }} >
            <Fab size="small" color="primary" aria-label="add" onClick={() => onEditClick && onEditClick(patient)} >
                <EditIcon />
            </Fab>
            <Fab size="small" style={{ backgroundColor: 'red', color: 'white' }} aria-label="add" onClick={() => onDeleteClick && onDeleteClick(patient)}>
                <DeleteIcon />
            </Fab>
        </TableCell>
    </React.Fragment >
    )
}