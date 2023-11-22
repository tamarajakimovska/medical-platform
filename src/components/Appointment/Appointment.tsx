import { Box, styled } from "@mui/system";
import React from "react";
import { StringLiteralLike } from "typescript";
import { AppointmentsContainer } from "../../containers";
import { Button, Fab, TableCell } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    image: string;
    name: string;
    email: string;
    date: string;
    visitTime: string;
    number: string;
    doctor: string;
    injury: string;
    areActionsVisible?: boolean
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

export const Appointment = ({ image, name, email, date, visitTime, number, doctor, injury, areActionsVisible = true }: Props) => {
    return (
        <React.Fragment>
            <TableCell ><img src={image} alt="patient" style={{ borderRadius: '50%', width: '32px', height: '32px' }} /></TableCell>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="left">{visitTime}</TableCell>
            <TableCell align="left">{number}</TableCell>
            <TableCell align="left">{doctor}</TableCell>
            <TableCell align="left">{injury}</TableCell>
            {
                areActionsVisible ? (
                    <TableCell align="left">
                        <Fab size="small" color="primary" aria-label="add">
                            <EditIcon />
                        </Fab>
                        <Fab size="small" color="secondary" aria-label="add">
                            <DeleteIcon />
                        </Fab>
                    </TableCell>
                ) : null
            }
        </React.Fragment>
    )
}