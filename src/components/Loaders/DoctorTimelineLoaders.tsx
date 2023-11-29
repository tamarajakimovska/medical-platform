import { Box, Skeleton } from "@mui/material";
import React from "react";

export const DoctorTimelineLoaders = () => {
    return <Box mt={5}>
        <Skeleton variant={'rounded'} width={'400px'} height={'700px'} />
    </Box>
}