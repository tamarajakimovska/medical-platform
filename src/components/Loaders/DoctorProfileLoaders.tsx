import { Box, Skeleton } from '@mui/material';
import React from 'react';

export const DoctorProfileLoaders = () => {
    return <Box my={4}>
        <Skeleton variant="circular" width={'100px'} height={'100px'} />
        <Box mt={3}>
            <Skeleton variant={'rounded'} width={'30%'} height={'32px'} />
        </Box>
        <Box my={3} display={'flex'}>
            <Skeleton variant={'rounded'} width={'30%'} height={'32px'} />
            <Box ml={'5%'} width="30%">
                <Skeleton variant={'rounded'} width={'100%'} height={'32px'} />
            </Box>
        </Box>
        <Skeleton variant={'rounded'} width={'65%'} height={'32px'} />
    </Box>
}