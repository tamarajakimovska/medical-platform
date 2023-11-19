import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Payment } from "../../components";
import axios from "axios";

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',

})

export const PaymentsContainer = () => {
    const [payments, setPayments] = useState<any>([]);

    useEffect(() => {
        const getPayments = async () => {
            const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/payments');

            response.status === 200 ? setPayments(response.data) : setPayments([]);
        }

        getPayments();
    }, []);
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
                {payments.map((currentPayment: any) => {
                    return <TableRow>
                        <Payment bill={currentPayment.bill} patient={currentPayment.patient} doctor={currentPayment.doctor} date={currentPayment.date} charges={currentPayment.charges} tax={currentPayment.tax} discount={currentPayment.discount} total={currentPayment.total} />
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
}