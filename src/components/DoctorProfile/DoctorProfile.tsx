import { Box, TextField } from "@mui/material";
import React from "react";


interface Props {
    doctor: any
}

export const DoctorProfile = ({ doctor }: Props) => {

    return <Box>
        <img src={doctor.image} width={'120px'} style={{ borderRadius: '50%', marginTop: '26px' }} />
        <Box pt={5}>
            <TextField
                id="name"
                label="Name"
                type="name"
                variant="standard"
                value={doctor?.name}
            />
            <Box display={'flex'} justifyContent={'space-between'} width={'80%'} mt={2}>
                <TextField
                    id="Speciality"
                    label="Speciality"
                    type="Speciality"
                    variant="standard"
                    value={doctor.specialty}
                />
                <TextField
                    margin="dense"
                    id="gender"
                    label="Gender"
                    type="Gender"
                    variant="standard"
                    value={doctor.gender}
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
                value={doctor.adress}
            />
        </Box>
    </Box >
}