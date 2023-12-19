import { Box, Skeleton } from '@mui/material';
import React from 'react';

export const DoctorLoaders = () => {
    return <Box flexBasis={'32%'}>
        <Box>
            <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
        <Box>
            <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
        <Box>
            <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
    </Box >
}