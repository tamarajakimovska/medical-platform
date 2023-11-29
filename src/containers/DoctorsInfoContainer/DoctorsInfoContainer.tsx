import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DoctorInfo } from "../../components";
import axios from "axios";
import { useNavigate } from "react-router";

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',

})

export const DoctorsInfoContainer = () => {
    const [doctors, setDoctors] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getDoctors = async () => {
            const response = await axios.get('https://651451b48e505cebc2eb2031.mockapi.io/doctors');

            response.status === 200 ? setDoctors(response.data) : setDoctors([]);
        }

        getDoctors();
    }, []);

    const onDoctorClick = (id: any) => {
        navigate(`/profile/${id}`);
    }

    console.log('dd', doctors)

    return <React.Fragment>
        <Title>Doctors</Title>
        <Box display="flex" flexWrap='wrap' justifyContent='space-between' alignItems='center'
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>

            {doctors.map((currentDoctor: any) => {
                return <Box key={currentDoctor.name} flexBasis={'32%'} borderRadius={'4px'} onClick={() => onDoctorClick(currentDoctor.id)} >
                    <DoctorInfo image={currentDoctor.image} name={currentDoctor.name} specialty={currentDoctor.specialty} adress={currentDoctor.adress} />
                </Box>
            })}
        </Box>
    </React.Fragment>
}