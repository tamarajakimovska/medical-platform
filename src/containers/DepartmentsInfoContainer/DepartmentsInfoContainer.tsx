import { Box } from "@mui/system";
import { DepartmentsInfo } from "../../components";
import React from "react";
import Department1 from '../../images/department-1.jpeg';
import Department2 from '../../images/department-2.jpeg';
import Department3 from '../../images/department-3.jpeg';
import Department4 from '../../images/department-4.jpeg';
import Department5 from '../../images/department-5.jpeg';
import Department6 from '../../images/department-6.jpeg';
import Department7 from '../../images/department-7.jpeg';
import Department8 from '../../images/department-8.jpeg';
import Department9 from '../../images/department-9.jpeg';

const DEPARTMENTS = [
    {
        image: Department1,
        department: 'Cardiology',
        purpose: 'Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine.'
    },
    {
        image: Department2,
        department: 'Dentistry',
        purpose: 'Dentistry is largely based on maintaining proper oral health, but is also an aesthetically focused practice. A large part of dentistry involves restoring teeth and making a smile beautiful, one that the patient is happy to show to others. Work as part of a team.'
    },
    {
        image: Department3,
        department: 'Laboratory',
        purpose: 'A laboratory  is a facility that provides controlled conditions in which scientific or technological research, experiments, and measurement may be performed.'
    },
    {
        image: Department4,
        department: 'Pulmonology',
        purpose: 'Pulmonologists treat conditions of the respiratory system, especially of the lungs. These conditions can be caused by things like inflammation, tissue overgrowth and infections. Many of these illnesses may require long-term, even lifelong, treatment plans.'
    },
    {
        image: Department5,
        department: 'Gynecology',
        purpose: 'A gynecologist is a doctor who specializes in female reproductive health. They diagnose and treat issues related to the female reproductive tract. This includes the uterus, fallopian tubes, ovaries, and breasts. Anyone with female organs may see a gynecologist.'
    },
    {
        image: Department6,
        department: 'Gastrology',
        purpose: 'Gastroenterologists, sometimes called "gastros" for short, are trained to diagnose and treat problems in your gastrointestinal (GI) tract and liver. These doctors also do routine procedures such as colonoscopies, which look at the inside of your colon.'
    },
    {
        image: Department7,
        department: 'Neurology',
        purpose: 'Neurology is the branch of medicine concerned with the study and treatment of disorders of the nervous system. The nervous system is a complex, sophisticated system that regulates and coordinates body activities. It has two major divisions: Central nervous system: the brain and spinal cord.'
    },
    {
        image: Department8,
        department: 'Physical rehabilitation',
        purpose: 'Rehabilitation helps to minimize or slow down the disabling effects of chronic health conditions, such as cardiovascular disease, cancer and diabetes by equipping people with self-management strategies and the assistive products they require, or by addressing pain or other complications.'
    },
    {
        image: Department9,
        department: 'Pediatrics',
        purpose: 'Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18. The word “paediatrics” means “healer of children”; they are derived from two Greek words: (pais = child) and (iatros = doctor or healer).'
    },
]


export const DeparmentsInfoContainer = () => {
    return <Box
        display="flex"
        mt={'4%'}
        flexWrap='wrap'
        width='70%'
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
        {DEPARTMENTS.map((currentDepartment) => {
            return <Box key={currentDepartment.image} flexBasis={'33.33%'}>
                <DepartmentsInfo image={currentDepartment.image} department={currentDepartment.department} purpose={currentDepartment.purpose} />
            </Box>
        })}
    </Box>
}