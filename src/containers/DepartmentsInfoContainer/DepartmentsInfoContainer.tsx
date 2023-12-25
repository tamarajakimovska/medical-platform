import { Box } from "@mui/system";
import { DepartmentsInfo } from "../../components";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material";
import axios from "axios";
import { DepartmentLoaders } from "../../components/Loaders/DepartmentLoaders";

interface Department {
    image: string;
    department: string;
    purpose: string;
}

const Title = styled('h3')({
    color: 'rgba(31, 32, 34, .5)',
    fontSize: '2rem',
    width: '100 %',
})

export const DeparmentsInfoContainer = () => {
    const [departments, setDepartments] = useState<any>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false)

    useEffect(() => {
        const getDepartments = async () => {
            setIsFetching(true);

            try {
                const response = await axios.get('https://6554a22a63cafc694fe6bb57.mockapi.io/departments');

                response.status === 200 ? setDepartments(response.data) : setDepartments([]);
            }
            catch {
                setIsFetching(false)
            }
            finally {
                setIsFetching(false)
            }
        }

        getDepartments();
    }, []);
    return <Box sx={{
        padding: {
            xs: '1.5rem 1.5rem 1.5rem 1.5rem',
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
            sx={{
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
            {isFetching ? <DepartmentLoaders /> : departments.map((currentDepartment: Department) => {
                return <Box key={currentDepartment.image} flexBasis={'32%'}>
                    <DepartmentsInfo image={currentDepartment.image} department={currentDepartment.department} purpose={currentDepartment.purpose} />
                </Box>
            })}
        </Box>
    </Box>
}