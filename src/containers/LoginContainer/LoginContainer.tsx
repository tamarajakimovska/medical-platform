import { LoadingButton } from "@mui/lab";
import { Box, styled } from "@mui/system";
import React from "react";
import { LoginButton } from "../../components";
import LoginImage from "../../images/login4.jpeg";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useAuth0 } from "@auth0/auth0-react";

const LoginBackground = styled('div')({
    width: '50%',
    height: '90vh',
    maxHeight: '900px',
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '32px',
    opacity: '0.8'
})

const LoginTitle = styled('div')({
    fontSize: "46px",
    letterSpacing: '16px',
    fontFamily: 'Playfair Display',
    color: '#3e403f'
})

const LoginPage = styled('p')({
    fontSize: "18px",
    letterSpacing: '3px',
    fontFamily: 'Playfair Display',
    color: '#3e403f'
})

export const LoginContainer = () => {
    return <Box width="100%" maxWidth="1140px" margin="0 auto" display='flex' >
        <LoginBackground>
        </LoginBackground>
        <Box ml="18%" mt="32%">
            <Box>
                <LoginTitle>WELCOME</LoginTitle>
                <LoginPage>Log in to continue to Medic-App</LoginPage>
            </Box>
            <Box textAlign={'center'}>
                <LoginButton />
            </Box>
        </Box>
    </Box>
}