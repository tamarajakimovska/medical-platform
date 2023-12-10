import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { DialogContainer } from "../DialogContainer";
import { BodyMenu, MobileMenu, NavigationMenu } from "../../components";


interface Props {
    children: any;
}

export const MainContainer = ({ children }: Props) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return <Box display={'flex'}
        sx={{
            flexDirection: {
                xs: 'column',
                sm: 'row'
            }
        }}>
        {isMobile ? <MobileMenu /> : <NavigationMenu />}
        <Box width={'100%'}>
            <Box margin={'0 auto'} pt={3}
                sx={{
                    maxWidth: {
                        xs: '100%',
                        sm: '1140px'
                    }
                }}>
                {isMobile ? null : <BodyMenu />}
                <Box>{children}</Box>
            </Box>
        </Box>
        <DialogContainer />
    </Box>
}