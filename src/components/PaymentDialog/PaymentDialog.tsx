import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Payment } from "../../interfaces";

interface Props {
    isOpen: boolean;
    mode: 'add',
    payment?: Payment;
    onClose: () => void;
    onSubmit: (payment: Payment, mode: 'add') => void;
}


export const PaymentDialog = ({ isOpen, mode, payment, onClose, onSubmit }: Props) => {
    const [localPayment, setLocalPayment] = useState<any>(payment);

    useEffect(() => {
        setLocalPayment(payment)
    }, [payment])

    return <React.Fragment>
        <Dialog open={isOpen} onClose={() => onClose()}>
            <DialogTitle>Add payment</DialogTitle>
            <Box></Box>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Bill NO"
                    label="Bill NO"
                    type="Bill NO"
                    fullWidth
                    variant="standard"
                    value={localPayment.bill || ''}
                    onChange={(event) => {
                        setLocalPayment({ ...localPayment, bill: event.target.value })
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="patient"
                    label="Patient"
                    type="patient"
                    fullWidth
                    variant="standard"
                    value={localPayment.patient || ''}
                    onChange={(event) => setLocalPayment({ ...localPayment, patient: event.target.value })}
                />
                <Box display={'flex'} >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="doctor"
                        label="Doctor"
                        type="doctor"
                        fullWidth
                        variant="standard"
                        value={localPayment.doctor || null}
                        onChange={(event) => setLocalPayment({ ...localPayment, doctor: event.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Date"
                        type="date"
                        fullWidth
                        variant="standard"
                        value={localPayment.date || ''}
                        onChange={(event) => setLocalPayment({ ...localPayment, date: event.target.value })}
                    />
                </Box>
                <TextField
                    autoFocus
                    margin="dense"
                    id="charges"
                    label="Charges"
                    type="charges"
                    fullWidth
                    variant="standard"
                    value={localPayment.charges || ''}
                    onChange={(event) => setLocalPayment({ ...localPayment, charges: event.target.value })}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="tax"
                    label="Tax"
                    type="tax"
                    fullWidth
                    variant="standard"
                    value={localPayment.tax || ''}
                    onChange={(event) => setLocalPayment({ ...localPayment, tax: event.target.value })}
                />
                <Box display={'flex'}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="discount"
                        label="Discount"
                        fullWidth
                        variant="standard"
                        type='discount'
                        value={localPayment.discount || ''}
                        onChange={(event) => setLocalPayment({ ...localPayment, discount: event.target.value })}

                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="total"
                        label="Total"
                        type="total"
                        fullWidth
                        variant="standard"
                        value={localPayment.total || ''}
                        onChange={(event) => setLocalPayment({ ...localPayment, total: event.target.value })}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button variant="contained" onClick={() => onSubmit(localPayment, mode)}>Add payments</Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
}
