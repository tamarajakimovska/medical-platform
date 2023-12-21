import { Box, Skeleton } from '@mui/material';
import React from 'react';

interface Props {
    height?: string | number;
}

export const TableLoaders = ({ height = 540 }: Props) => {
    return <Box width="100%" display='flex' justifyContent='space-between' flexWrap="wrap" rowGap="32px">
        <Skeleton animation="wave" variant="rectangular" width={'100%'} height={height} style={{ borderRadius: '8px' }} />
    </Box>
}