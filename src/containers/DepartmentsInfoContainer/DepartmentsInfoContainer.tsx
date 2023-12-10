import { Box } from "@mui/system";
import { DepartmentsInfo } from "../../components";
import React, { useEffect, useState } from "react";
import Department1 from '../../images/department-1.jpeg';
import Department2 from '../../images/department-2.jpeg';
import Department3 from '../../images/department-3.jpeg';
import Department4 from '../../images/department-4.jpeg';
import Department5 from '../../images/department-5.jpeg';
import Department6 from '../../images/department-6.jpeg';
import Department7 from '../../images/department-7.jpeg';
import Department8 from '../../images/department-8.jpeg';
import Department9 from '../../images/department-9.jpeg';
import { styled } from "@mui/material";
import axios from "axios";

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',
})


export const DeparmentsInfoContainer = () => {
    const [departments, setDepartments] = useState<any>([]);

    useEffect(() => {
        const getDepartments = async () => {
            const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/departments');

            response.status === 200 ? setDepartments(response.data) : setDepartments([]);
        }

        getDepartments();
    }, []);
    return <Box sx={{
        padding: {
            xs: '0 1.5rem 1.5rem 1.5rem',
            sm: '0'
        }
    }}>
        <Title>Departments</Title>
        <Box
            display="flex"
            mt={'4%'}
            flexWrap='wrap'
            justifyContent='space-between'
            alignItems='center'
            margin='0 auto'
            pt={5}
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>

            {departments.map((currentDepartment: any) => {
                return <Box key={currentDepartment.image} flexBasis={'32%'}>
                    <DepartmentsInfo image={currentDepartment.image} department={currentDepartment.department} purpose={currentDepartment.purpose} />
                </Box>
            })}
        </Box>
    </Box>
}