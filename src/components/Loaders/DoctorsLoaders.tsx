import { Box, Skeleton } from '@mui/material';
import React from 'react';

export const DoctorLoaders = () => {
    return <Box width="100%" display='flex' justifyContent='space-between' flexWrap="wrap" rowGap="32px">
        {[...Array(9)].map((elem) => {
            return <Box key={elem}>
                <Skeleton animation="wave" variant="rectangular" width={300} height={540} style={{ borderRadius: '8px' }} />
            </Box>
        })}
    </Box>
}