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
import { Patient } from "../../interfaces";
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    isOpen: boolean;
    mode: 'add' | 'edit';
    patient?: Patient;
    onClose: () => void;
    onSubmit: (patient: Patient, mode: 'add' | 'edit') => void;
}

export const PatientDialog = ({ isOpen, mode, patient, onClose, onSubmit }: Props) => {
    const [localPatient, setLocalPatient] = useState<Patient>(patient!);

    useEffect(() => {
        setLocalPatient(patient!)
    }, [patient])

    return <React.Fragment>
        <Dialog open={isOpen} onClose={() => onClose()}>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center' onClick={() => onClose()}>
                    <span>{mode === 'add' ? 'Add' : 'Edit'} patient</span>
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
                    value={localPatient.name || ''}
                    onChange={(event) => {
                        setLocalPatient({ ...localPatient, name: event.target.value })
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
                    value={localPatient.number || ''}
                    onChange={(event) => setLocalPatient({ ...localPatient, number: event.target.value })}
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
                        value={localPatient.age || null}
                        onChange={(event) => setLocalPatient({ ...localPatient, age: Number(event.target.value) })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="gender"
                        label="Gender"
                        type="gender"
                        fullWidth
                        variant="standard"
                        value={localPatient.gender || ''}
                        onChange={(event) => setLocalPatient({ ...localPatient, gender: event.target.value })}
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
                    value={localPatient.adress || ''}
                    onChange={(event) => setLocalPatient({ ...localPatient, adress: event.target.value })}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="E-Mail"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={localPatient.email || ''}
                    onChange={(event) => setLocalPatient({ ...localPatient, email: event.target.value })}
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
                        value={dayjs(localPatient?.date).format("YYYY-MM-DD") || ''}
                        onChange={(event) => setLocalPatient({ ...localPatient, date: event.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="visitTime"
                        label="Visit Time"
                        type="visitTime"
                        fullWidth
                        variant="standard"
                        value={localPatient.visitTime || ''}
                        onChange={(event) => setLocalPatient({ ...localPatient, visitTime: event.target.value })}
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
                        value={localPatient.doctor || ''}
                        onChange={(event) => setLocalPatient({ ...localPatient, doctor: event.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="injury"
                        label="Injury"
                        type="injury"
                        fullWidth
                        variant="standard"
                        value={localPatient.injury || ''}
                        onChange={(event) => setLocalPatient({ ...localPatient, injury: event.target.value })}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button variant="contained" onClick={() => onSubmit(localPatient, mode)}>{mode === 'add' ? 'Add' : 'Update'} patient</Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
}
