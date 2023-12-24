import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { DialogContainer } from "../DialogContainer";
import { BodyMenu, LoginButton, LoginLoaders, MobileMenu, NavigationMenu } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginContainer } from "..";


interface Props {
    children: any;
}

export const MainContainer = ({ children }: Props) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading && !isAuthenticated) {
        return <Box width="100%" height="100vh" display='flex' justifyContent='space-between' alignItems='center'>
            <LoginLoaders />
        </Box >
    }

    if (!isAuthenticated && !isLoading) {
        return <Box width="100%" height="100vh" display='flex' justifyContent='space-between' alignItems='center' style={{
            background: "linear-gradient(90deg, rgba(31,115,189,1) 3%, rgba(164,216,229,1) 38%, rgba(112,182,226,1) 100%)"
        }}>
            <LoginContainer />
        </Box >
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