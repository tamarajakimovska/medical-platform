import { LoadingButton } from "@mui/lab";
import { Box, styled } from "@mui/system";
import React from "react";
import { LoginButton } from "../../components";
import LoginImage from "../../images/loginimage.jpeg";

const LoginBackground = styled('div')({
    width: '50%',
    height: '100vh',
    maxHeight: '900px',
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '32px'
})

export const LoginContainer = () => {
    return <Box width="100%" maxWidth="1140px" margin="0 auto" display='flex'>
        <LoginBackground>
        </LoginBackground>
        <Box>
            <LoginButton />
        </Box>
    </Box>
}