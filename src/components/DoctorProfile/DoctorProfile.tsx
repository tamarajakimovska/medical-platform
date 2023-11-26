import { Box, TextField } from "@mui/material";
import React from "react";

export const DoctorProfile = () => {
    return <Box>
        <Box pt={5}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="name"
                variant="standard"
                value='Dr.Sophie Mackins'
            />
            <Box display={'flex'} justifyContent={'space-between'} width={'80%'}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Speciality"
                    label="Speciality"
                    type="Speciality"
                    variant="standard"
                    value='Gynecologist'
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="gender"
                    label="Gender"
                    type="Gender"
                    variant="standard"
                    value='Female'
                />
            </Box>
            <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Address"
                type="Address"
                fullWidth
                variant="standard"
                value='795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'
            />
        </Box>
    </Box >
}