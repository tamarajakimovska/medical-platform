import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { Context } from '../../context';
import axios from 'axios';
import { useState } from 'react';

export const DialogContainer = () => {
    const state = React.useContext(Context);
    const [patient, setState] = useState<any>({
        name: '',
        number: '',
        age: null,
        gender: '',
        address: ''
    });

    console.log('patient', patient);

    const onAddPatient = async () => {
        const response = await axios.post('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients', {
            image: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            name: patient.name,
            age: patient.age,
            adress: patient.address,
            number: patient.number
        })

        // Close the dialog
        if (response.status === 201) {
            state.setIsAddPatientDialogOpen(false);
            // TO-DO: Create a hook for Refetch the patients
            try {
                state.getPatients();
                const response = await axios.get('https://6555e1d584b36e3a431e8f4f.mockapi.io/patients');

                state.getPatientsSuccess(response.data);
            } catch (error) {
                state.getPatientsFail();
            }
        }

    }

    return (
        <React.Fragment>
            <Dialog open={state.isAddPatientDialogOpen} onClose={() => state.setIsAddPatientDialogOpen(false)}>
                <DialogTitle>Add patient</DialogTitle>
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
                        value={patient.name}
                        onChange={(event) => setState({ ...patient, name: event.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="phone"
                        fullWidth
                        variant="standard"
                        value={patient.number}
                        onChange={(event) => setState({ ...patient, number: event.target.value })}
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
                            value={patient.age}
                            onChange={(event) => setState({ ...patient, age: event.target.value })}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="gender"
                            label="Gender"
                            type="gender"
                            fullWidth
                            variant="standard"
                            value={patient.gender}
                            onChange={(event) => setState({ ...patient, gender: event.target.value })}
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
                        value={patient.address}
                        onChange={(event) => setState({ ...patient, address: event.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => state.setIsAddPatientDialogOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={() => onAddPatient()}>Add patient</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}