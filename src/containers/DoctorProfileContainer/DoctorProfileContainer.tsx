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

                if (response.status === 200) {
                    setIsFetching(false);
                    setDoctor(response.data)
                }
            } catch {
                setIsFetching(false);
            }
        }

        getDoctor();
    }, [id])


    return <Box display={'flex'} justifyContent={'space-between'} sx={{
        flexDirection: {
            xs: 'column',
            sm: 'row'
        },
        padding: {
            xs: '1.5rem 1.5rem 1.5rem 1.5rem',
            sm: '0'
        }
    }}>
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
