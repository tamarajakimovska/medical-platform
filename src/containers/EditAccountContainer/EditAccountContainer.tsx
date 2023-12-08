import React from "react";
import { EditAccount } from "../../components";
import user from "../../images/userImage.jpeg";
import { Box, Button, styled } from "@mui/material";

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',

})

export const EditAccountContainer = () => {
    return <Box>
        <Title>Edit account</Title>
        <Box display={'flex'} alignItems={'center'}>
            <img src={user} style={{ borderRadius: '50%' }} width={'86px'} height={"92vh"} />
        </Box>
        <EditAccount />
    </Box >
}