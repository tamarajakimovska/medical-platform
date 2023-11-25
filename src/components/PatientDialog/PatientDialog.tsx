import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material";
import { useState } from "react";

interface Props {
    isOpen: boolean;
    mode: 'add' | 'edit';
    patient?: any;
    onClose: () => void;
    onSubmit: (patient: any, mode: 'add' | 'edit') => void;
}

export const PatientDialog = ({ isOpen, mode, patient, onClose, onSubmit }: Props) => {
    const [localPatient, setLocalPatient] = useState<any>(patient);

    useEffect(() => {
        setLocalPatient(patient)
    }, [patient])

    return <React.Fragment>
        <Dialog open={isOpen} onClose={() => onClose()}>
            <DialogTitle>{mode === 'add' ? 'Add' : 'Edit'} patient</DialogTitle>
            <Box></Box>
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
                        console.log('123')
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
                        onChange={(event) => setLocalPatient({ ...localPatient, age: event.target.value })}
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
                    value={localPatient.address || ''}
                    onChange={(event) => setLocalPatient({ ...localPatient, address: event.target.value })}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()}>Cancel</Button>
                <Button variant="contained" onClick={() => onSubmit(localPatient, mode)}>{mode === 'add' ? 'Add' : 'Update'} patient</Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
}
