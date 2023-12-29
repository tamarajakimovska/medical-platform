import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";
import { useState } from "react";
import dayjs from 'dayjs';
import { Appointment } from "../../interfaces";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    isOpen: boolean;
    mode: 'add' | 'edit';
    appointment?: Appointment;
    onClose: () => void;
    onSubmit: (appointment: Appointment, mode: 'add' | 'edit') => void;
}

export const AppointmentDialog = ({ isOpen, mode, appointment, onClose, onSubmit }: Props) => {
    const [localAppointment, setLocalAppointment] = useState<Appointment>(appointment!);

    useEffect(() => {
        setLocalAppointment(appointment!)
    }, [appointment])

    return <React.Fragment>
        <Dialog open={isOpen} onClose={() => onClose()}>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center' onClick={() => onClose()}>
                    <span>{mode === 'add' ? 'Add' : 'Edit'} appointment</span>
                    <CloseIcon />
                </Box>
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="name"
                    fullWidth
                    variant="standard"
                    value={localAppointment.name || ''}
                    onChange={(event) => {
                        setLocalAppointment({ ...localAppointment, name: event.target.value })
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Phone"
                    type="phone"
                    fullWidth
                    variant="standard"
                    value={localAppointment.number || ''}
                    onChange={(event) => setLocalAppointment({ ...localAppointment, number: event.target.value })}
                />
                <Box display={'flex'} >
                    <TextField
                        autoFocus
                        margin="dense"
                        id="age"
                        label="Age"
                        type="age"
                        fullWidth
                        variant="standard"
                        value={localAppointment.age || null}
                        onChange={(event) => setLocalAppointment({ ...localAppointment, age: Number(event.target.value) })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="gender"
                        label="Gender"
                        type="gender"
                        fullWidth
                        variant="standard"
                        value={localAppointment.gender || ''}
                        onChange={(event) => setLocalAppointment({ ...localAppointment, gender: event.target.value })}
                    />
                </Box>
                <TextField
                    autoFocus
                    margin="dense"
                    id="address"
                    label="Address"
                    type="address"
                    fullWidth
                    variant="standard"
                    value={localAppointment.adress || ''}
                    onChange={(event) => setLocalAppointment({ ...localAppointment, adress: event.target.value })}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="E-Mail"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={localAppointment.email || ''}
                    onChange={(event) => setLocalAppointment({ ...localAppointment, email: event.target.value })}
                />
                <Box display={'flex'}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        label="Date"
                        fullWidth
                        variant="standard"
                        type='date'
                        defaultValue={dayjs(new Date()).format("YYYY-MM-DD")}
                        value={dayjs(localAppointment?.date).format("YYYY-MM-DD") || ''}
                        onChange={(event) => setLocalAppointment({ ...localAppointment, date: event.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="visitTime"
                        label="Visit Time"
                        type="visitTime"
                        fullWidth
                        variant="standard"
                        value={localAppointment.visitTime || ''}
                        onChange={(event) => setLocalAppointment({ ...localAppointment, visitTime: event.target.value })}
                    />
                </Box>
                <Box display={'flex'}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="doctor"
                        label="Doctor"
                        type="doctor"
                        fullWidth
                        variant="standard"
                        value={localAppointment.doctor || ''}
                        onChange={(event) => setLocalAppointment({ ...localAppointment, doctor: event.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="injury"
                        label="Injury"
                        type="injury"
                        fullWidth
                        variant="standard"
                        value={localAppointment.injury || ''}
                        onChange={(event) => setLocalAppointment({ ...localAppointment, injury: event.target.value })}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button type='submit' variant="contained" onClick={() => onSubmit(localAppointment, mode)}>{mode === 'add' ? 'Add' : 'Update'} appointment</Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
}
