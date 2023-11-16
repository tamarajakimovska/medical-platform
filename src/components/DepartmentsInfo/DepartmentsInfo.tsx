import { Button } from "@mui/base";
import { Box, styled } from "@mui/system";
import React from "react";

interface Props {
    image: string;
    department: string;
    purpose: string;
}

const InfoBoxDepartments = styled('div')({
    background: '#fff',
    borderRadius: '13px',
    dow: '0 18px 34px rgba(0, 0, 0, .12)',
    display: 'block',
    margin: '0 auto 6rem',
    minHeight: '442px',
    textAlign: 'center',
    paddingBottom: '20px',
})

export const DepartmentsInfo = ({ image, department, purpose }: Props) => {
    return <Box display='flex' flexDirection='column'>
        <InfoBoxDepartments>
            <Box maxWidth='100%' height='auto'> <img src={image} alt="departments" width='100%' style={{ borderRadius: '4px' }} /> </Box>
            <Box>  <h2>{department}</h2>
                <p>{purpose}</p>
            </Box>
        </InfoBoxDepartments>
    </Box>
}