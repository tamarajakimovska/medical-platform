import React from "react";
import { EditAccount } from "../../components";
import Profile1 from '../../images/patient9.jpeg';
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
            <img src={Profile1} style={{ borderRadius: '50%' }} width={'66px'} />
            <Box ml={5}>
                <Button variant="contained">Select Image</Button>
            </Box>
        </Box>
        <EditAccount />
    </Box >
}