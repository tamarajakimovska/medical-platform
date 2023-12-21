import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const AppointmentLoaders = () => {
    return <Box>
        <Skeleton variant={'rounded'} width={'400px'} height={'700px'} />
    </Box>
}