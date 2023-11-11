import { Box } from "@mui/material";
import React from "react";
import { DoctorInfo } from "../../components";
import Doctor1 from "../../images/doctor01.jpeg";
import Doctor2 from "../../images/doctor02.jpeg";
import Doctor3 from "../../images/doctor03.jpeg";
import Doctor4 from "../../images/doctor04.jpeg";
import Doctor5 from "../../images/doctor05.jpeg";
import Doctor6 from "../../images/doctor06.jpeg";
import Doctor7 from "../../images/doctor07.jpeg";
import Doctor8 from "../../images/doctor08.jpeg";
import Doctor9 from "../../images/doctor09.jpeg";

const DOCTORS = [
    {
        image: Doctor1,
        name: 'Dr.Sophie',
        specialty: 'Gynecologist',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'
    },
    {
        image: Doctor2,
        name: 'Dr. Liam',
        specialty: 'Dentist',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    },
    {
        image: Doctor3,
        name: 'Dr.Noah',
        specialty: 'Nursing',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    },
    {
        image: Doctor4,
        name: 'Dr.Emma',
        specialty: 'Audiology',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    },
    {
        image: Doctor5,
        name: 'Dr. James',
        specialty: 'Physical Therapy',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    },
    {
        image: Doctor6,
        name: 'Dr. Olivia',
        specialty: 'Dentist',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    },
    {
        image: Doctor7,
        name: 'Dr.Logan',
        specialty: 'Physical Therapy',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    },
    {
        image: Doctor8,
        name: 'Dr.Benjamin',
        specialty: 'Nursing',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    },
    {
        image: Doctor9,
        name: 'Dr.Mason',
        specialty: 'Dentist',
        adress: '795 Folsom Ave, Suite 600 San Francisco, CADGE 94107'

    }
]



export const DoctorsInfoContainer = () => {
    return <Box display="flex" mt={'4%'} flexWrap='wrap' flexBasis='0 0 33.33333%' justifyContent='space-between' width='70%' alignItems='center' margin='0 auto' pt={5}
        sx={{
            flexDirection: {
                xs: 'column',
                sm: 'row'
            }
        }}
    >
        {DOCTORS.map((currentDoctor) => {
            return <Box key={currentDoctor.name}>
                <DoctorInfo image={currentDoctor.image} name={currentDoctor.name} specialty={currentDoctor.specialty} adress={currentDoctor.adress} />
            </Box>
        })}
    </Box>
}