import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DoctorProfile, DoctorProfileLoaders, DoctorTimeline, DoctorTimelineLoaders } from "../../components";
import { useParams } from "react-router";
import axios from "axios";

export const DoctorProfileContainer = () => {
    const { id } = useParams();
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [doctor, setDoctor] = useState<any>({})

    useEffect(() => {
        const getDoctor = async () => {
            try {
                setIsFetching(true);
                const response = await axios.get(`https://651451b48e505cebc2eb2031.mockapi.io/doctors/${id}`);

                console.log('response', response)
                if (response.status === 200) {
                    console.log('setting data');
                    setIsFetching(false);
                    setDoctor(response.data)
                }
            } catch {
                setIsFetching(false);
                console.log('Fetching doctor failed')
            }
        }

        getDoctor();
    }, [])


    return <Box display={'flex'} justifyContent={'space-between'}>
        <Box sx={{
            width: {
                xs: '100%',
                sm: '48%'
            }
        }}>
            {isFetching ? <DoctorProfileLoaders /> : <DoctorProfile doctor={doctor} />}
        </Box>
        <Box sx={{
            width: {
                xs: '100%',
                sm: '48%'
            }
        }}>
            {isFetching ? <DoctorTimelineLoaders /> : <DoctorTimeline timeline={doctor?.timeline} />}
        </Box>
    </Box>
};
