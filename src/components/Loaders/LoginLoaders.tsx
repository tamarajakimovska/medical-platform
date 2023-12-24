import { Box, Skeleton } from '@mui/material';
import React from 'react';

export const LoginLoaders = () => {
    return <Box width="100%" maxWidth="1140px" margin="0 auto" display='flex'>
        <Box width="100%" display='flex' justifyContent='space-between' flexWrap="wrap" rowGap="32px">
            <Skeleton width="50%" height={'100vh'} style={{ maxHeight: '900px' }} />
            <Box width="50%" display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
                <Skeleton variant={'rectangular'} width='300px' height={'25px'} />
                <Box mt={3}>
                    <Skeleton variant={'rectangular'} width='300px' height={'25px'} />
                </Box>
            </Box>
        </Box>

    </Box >
};
