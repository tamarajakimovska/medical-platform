import { TableCell } from "@mui/material";
import React from "react";

interface Props {
    bill: number;
    patient: string;
    doctor: string;
    date: string;
    charges: number;
    tax: number
    discount: number;
    total: number;
}

export const Payment = ({ bill, patient, doctor, date, charges, tax, discount, total }: Props) => {
    return (
        <React.Fragment>
            <TableCell align="left">{bill}</TableCell>
            <TableCell align="left">{patient}</TableCell>
            <TableCell align="left">{doctor}</TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="left">{charges}$</TableCell>
            <TableCell align="left">{tax}%</TableCell>
            <TableCell align="left">{discount}$</TableCell>
            <TableCell align="left">{total}$</TableCell>


        </React.Fragment>
    )
}
