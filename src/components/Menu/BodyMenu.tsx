import { Box, IconButton, InputBase, Paper, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { UserMenu } from "../UserMenu";
import SearchIcon from '@mui/icons-material/Search';

export const BodyMenu = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return <Box sx={{
        marginBottom: {
            xs: '0',
            sm: 4
        }
    }} display={'flex'} justifyContent={'space-between'}>
        {isMobile ? null : <Box>
            <Paper
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>}

        <Box position={'relative'}>
            <UserMenu onClose={() => console.log('123...')} />
        </Box>
    </Box>
}