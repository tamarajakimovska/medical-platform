import { Box } from "@mui/material";
import React from "react";
import { DoctorProfile, DoctorTimeline } from "../../components";

export const DoctorProfileContainer = () => {
    return <Box display={'flex'} justifyContent={'space-between'}>
        <Box sx={{
            width: {
                xs: '100%',
                sm: '48%'
            }
        }}>
            <DoctorProfile />
        </Box>
        <Box sx={{
            width: {
                xs: '100%',
                sm: '48%'
            }
        }}>
            <DoctorTimeline />
        </Box>
    </Box>
};
