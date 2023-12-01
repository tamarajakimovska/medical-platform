import { Box, styled } from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PlaceIcon from '@mui/icons-material/Place';

const ContactInfoTitle = styled('div')({
    fontWeight: '500',
    letterSpacing: '.2px',
    fontSize: '32px',
    marginBottom: '26px',
    background: '#D8E8F2',
    padding: '8px',
    borderRadius: '4px'
})

export const UserContactInformation = () => {
    return <Box style={{ backgroundColor: '#FBFBFB', boxShadow: '0 18px 34px rgba(0, 0, 0, .12)' }} width={'100%'} height={'22vh'} borderRadius={'2%'} py={2} px={2} mt={3}>
        <Box pt={2}>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
        </Box>
        <Box display={'flex'} alignItems={'center'} mb={2}>
            <LinkedInIcon style={{ fontSize: '26px', marginRight: '6px', color: '#1776D1' }} />
            <a href="https://www.linkedin.com/in/tamara-jakimovska-869211240/">tamarajakimovska</a>
        </Box>
        <Box display={'flex'} alignItems={'center'} mb={2}>
            <ContactPhoneIcon style={{ fontSize: '26px', marginRight: '6px', }} />
            <div>+49 178 1432889</div>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
            <PlaceIcon style={{ fontSize: '26px', marginRight: '6px', color: '#F70100' }} />
            <div>Berlin, Germany</div>
        </Box>
    </Box >
}