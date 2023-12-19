import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Payment } from "../../components";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { Context } from "../../context";

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',

})

export const PaymentsContainer = () => {
    const state = useContext(Context);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        const getPayments = async () => {
            try {
                state.getPayments();
                const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/payments');

                state.getPaymentsSuccess(response.data);
            } catch (error) {
                state.getPaymentsFail();
            }
        }

        getPayments();
    }, []);
    return <Box
        sx={{
            padding: {
                xs: '1.5rem 1.5rem 1.5rem 1.5rem',
                sm: '0'
            }
        }}>
        <TableContainer>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Title>Payments</Title>
                <Button variant="contained" style={{ maxHeight: '36px', minWidth: isMobile ? '0' : '200px' }} onClick={() => state.setIsPaymentDialogOpen(true)}>
                    <AddIcon /> {isMobile ? null : 'Add Payment'}
                </Button>
            </Box>
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
                    {state.payments.map((currentPayment: any) => {
                        return <TableRow>
                            <Payment bill={currentPayment.bill} patient={currentPayment.patient} doctor={currentPayment.doctor} date={currentPayment.date} charges={currentPayment.charges} tax={currentPayment.tax} discount={currentPayment.discount} total={currentPayment.total} />
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
}