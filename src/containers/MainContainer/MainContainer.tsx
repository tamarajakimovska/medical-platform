import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { DialogContainer } from "../DialogContainer";
import { BodyMenu, LoginButton, MobileMenu, NavigationMenu } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginContainer } from "..";


interface Props {
    children: any;
}

export const MainContainer = ({ children }: Props) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const { isAuthenticated } = useAuth0();

    console.log('isAuthenticated', isAuthenticated);

    if (!isAuthenticated) {
        return <Box width="100%" height="100vh" display='flex' justifyContent='space-between' alignItems='center' bgcolor="pink">
            <LoginContainer />
        </Box>
    }

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
                    },
                    paddingLeft: {
                        xs: '0',
                        sm: '240px'
                    }
                }}>
                {isMobile ? null : <BodyMenu />}
                <Box>{children}</Box>
            </Box>
        </Box>
        <DialogContainer />
    </Box>
}