import { Box, Button, styled } from "@mui/material";
import React from "react";

interface Props {
    image: string;
    name: string;
    specialty: string;
    adress: string;
}

const InfoBox = styled('div')({
    background: '#fff',
    borderRadius: '6px',
    boxShadow: '0 18px 24px rgba(0, 0, 0, .12)',
    display: 'block',
    margin: '0 auto 6rem',
    textAlign: 'center',
    paddingBottom: '20px'
})

export const DoctorInfo = ({ image, name, specialty, adress }: Props) => {
    return <Box display="flex" flexDirection="column">
        <InfoBox>
            <Box>
                <Box maxWidth="100%" height="auto">  <img src={image} width="100%" alt="doctor" style={{ borderRadius: '4px' }} /> </Box>
                <h2>{name}</h2>
                <span>{specialty}</span>
                <div>{adress}</div>
                <Box pt={2}> <Button variant="contained">View Profile</Button></Box>
            </Box>
        </InfoBox>
    </Box>
}