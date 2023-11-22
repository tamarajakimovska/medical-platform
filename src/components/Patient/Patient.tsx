import { Button, Fab, TableCell } from "@mui/material";
import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

interface Props {
    image: string;
    name: string;
    id: number;
    age: number;
    adress: string;
    number: string;
    lastVisit: string;

}



export const Patient = ({ image, name, id, age, adress, number, lastVisit }: Props) => {
    return (<React.Fragment>
        <TableCell><img src={image} alt="patient" style={{ borderRadius: '50%' }} /></TableCell>
        <TableCell align="left">{name}</TableCell>
        <TableCell align="left">{id}</TableCell>
        <TableCell align="left">{age}</TableCell>
        <TableCell align="left">{adress}</TableCell>
        <TableCell align="left">{number}</TableCell>
        <TableCell align="left">{lastVisit}</TableCell>
        <TableCell align="left">
            <Button variant="contained" color="success">
                Approved
            </Button>
        </TableCell>
        <TableCell align="left" >
            <Fab size="small" style={{ backgroundColor: 'black', color: 'white', }} aria-label="add">
                <AccountBoxIcon />
            </Fab>
            <Fab size="small" color="primary" aria-label="add" >
                <EditIcon />
            </Fab>
            <Fab size="small" style={{ backgroundColor: 'red', color: 'white' }} aria-label="add">
                <DeleteIcon />
            </Fab>
        </TableCell>

    </React.Fragment >
    )
}