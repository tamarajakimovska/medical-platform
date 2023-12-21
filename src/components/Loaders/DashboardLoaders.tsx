import { Skeleton } from "@mui/lab";
import { Box } from "@mui/system";
import React from "react";
import { TableLoaders } from "./TableLoaders";

export const DashboardLoaders = () => {
    return <Box display='flex' justifyContent='space-between' flexWrap="wrap" rowGap="32px" flexDirection='column' pt={3}
        sx={{
            marginTop: {
                xs: '3.5rem',
                sm: 0
            },
            width: {
                xs: '95%',
                sm: '100%'
            }
        }}>
        <Box display='flex' justifyContent='space-between' flexBasis="20%">
            {[...Array(4)].map((elem) => {
                return <Box key={elem} width="100%" marginRight="8px">
                    <Skeleton animation="wave" variant="rectangular" width={'100%'} height={75} style={{ borderRadius: '8px' }} />
                </Box>
            })}
        </Box>
        <Box display='flex' flexDirection='column'>
            {[...Array(3)].map((elem, index) => {
                return <Box key={elem} mt={4}>
                    <TableLoaders height={index === 2 ? 250 : 320} />
                </Box>
            })}
        </Box>
    </Box>
}