import { LoadingButton } from "@mui/lab";
import { Box, styled } from "@mui/system";
import React from "react";
import { LoginButton } from "../../components";
import LoginImage from "../../images/login4.jpeg";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useAuth0 } from "@auth0/auth0-react";

const LoginBackground = styled('div')(({ theme }) => ({
    width: '100%',
    height: '90vh',
    maxHeight: '900px',
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '32px',
    opacity: '0.8',
    [theme.breakpoints.down("sm")]: {
        height: '37vh',
        width: '87%',
        marginBottom: '12%'
    }
}))

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
    return <Box width="100%" display='flex' sx={{
        maxWidth: {
            // xs: '0',
            sm: '1140px'
        },
        margin: {
            xs: '0',
            sm: '0 auto'
        },
        marginTop: {
            // xs: '74%',
            sm: '0'
        },
        // marginLeft: {
        //     xs: '13%',
        // }
        flexDirection: {
            xs: 'column',
            sm: 'row'
        },
        alignItems: {
            xs: 'center'
        }
    }} >
        <LoginBackground>
        </LoginBackground>
        <Box width='100%' textAlign='center'>
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