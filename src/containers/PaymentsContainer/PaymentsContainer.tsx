import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import React from "react";
import { Payment } from "../../components";

const PAYMENTS = [
    {
        bill: 132,
        patient: 'Priya Patel',
        doctor: 'Juan Freeman',
        date: '2023-05-25',
        charges: 155,
        tax: 10,
        discount: 5,
        total: 160
    },
    {
        bill: 131,
        patient: 'Mayank Jani',
        doctor: 'Christina Thomas',
        date: '2023-05-24',
        charges: 121,
        tax: 10,
        discount: 5,
        total: 125
    },
    {
        bill: 130,
        patient: 'Jenish Shah',
        doctor: 'Juan Freeman',
        date: '2023-05-23',
        charges: 70,
        tax: 10,
        discount: 5,
        total: 75
    },
    {
        bill: 129,
        patient: 'Jayna Sharma',
        doctor: 'Jessica Patterson',
        date: '2023-05-22',
        charges: 45,
        tax: 10,
        discount: 5,
        total: 48
    },
    {
        bill: 128,
        patient: 'Sonali Malik',
        doctor: 'Lori Perkins',
        date: '2023-05-21',
        charges: 120,
        tax: 10,
        discount: 5,
        total: 124
    },
    {
        bill: 127,
        patient: 'Mayank Jani',
        doctor: 'Jessica Patterson',
        date: '2023-05-20',
        charges: 25,
        tax: 10,
        discount: 5,
        total: 27
    },
    {
        bill: 126,
        patient: 'Pooja Patel',
        doctor: 'Juan Freeman',
        date: '2023-05-19',
        charges: 320,
        tax: 10,
        discount: 5,
        total: 340
    },
    {
        bill: 125,
        patient: 'Pooja Patel',
        doctor: 'Christina Thomas',
        date: '2023-05-18',
        charges: 124,
        tax: 10,
        discount: 5,
        total: 130
    },
    {
        bill: 124,
        patient: 'Jacob Ryan',
        doctor: 'Lori Perkins',
        date: '2023-05-17',
        charges: 200,
        tax: 10,
        discount: 5,
        total: 217
    },
    {
        bill: 123,
        patient: 'Megha Trivedi',
        doctor: 'Lori Perkins',
        date: '2023-05-16',
        charges: 125,
        tax: 10,
        discount: 5,
        total: 129
    }
]

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',

})

export const PaymentsContainer = () => {
    return <TableContainer component={Paper}>
        <Title>Payments</Title>
        <Table size="small" style={{ backgroundColor: 'hsla(0,0%,92%,.3)', marginTop: '4%' }}>
            <TableHead>
                <TableRow>
                    <TableCell align="left"> <b>Bill </b></TableCell>
                    <TableCell align="left"><b>Patient</b></TableCell>
                    <TableCell align="left"><b>Doctor</b></TableCell>
                    <TableCell align="left"><b>Date</b></TableCell>
                    <TableCell align="left"><b> Charges</b></TableCell>
                    <TableCell align="left"><b>Tax</b></TableCell>
                    <TableCell align="left"><b>Discount</b></TableCell>
                    <TableCell align="left"><b>Total</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {PAYMENTS.map((currentPayment) => {
                    return <TableRow>
                        <Payment bill={currentPayment.bill} patient={currentPayment.patient} doctor={currentPayment.doctor} date={currentPayment.date} charges={currentPayment.charges} tax={currentPayment.tax} discount={currentPayment.discount} total={currentPayment.total} />
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
}