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

export const DialogContainer = () => {
    const state = React.useContext(Context);

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
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="phone"
                        fullWidth
                        variant="standard"
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
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="gender"
                            label="Gender"
                            type="gender"
                            fullWidth
                            variant="standard"
                        />
                    </Box>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="status"
                        label="Status"
                        type="status"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        type="address"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>

                    <Button onClick={() => state.setIsAddPatientDialogOpen(false)}>Cancel</Button>
                    <Button variant="contained">Add patient</Button>


                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}