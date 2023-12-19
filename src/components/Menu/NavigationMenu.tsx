import { Box, Button, styled } from '@mui/material';
import React, { useContext } from 'react';
import logo from "../../images/logo.svg";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PaymentsIcon from '@mui/icons-material/Payments';
import AddIcon from '@mui/icons-material/Add';
import { useLocation, useNavigate } from 'react-router';
import { Context } from '../../context';


const Units = styled('div')({
    margin: '10%',
    display: 'flex',
    alignItems: 'center',
})

const Title = styled('div')({
    opacity: '.3',
    paddingTop: '24%',
    marginLeft: '10%'
})
const ButtonStyle = styled('div')({
    margin: '10%'
})

const LogoStyle = styled('div')({
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingTop: '7px',

})

const NavItem = styled('div')((props) => ({
    color: props.className === 'active' ? '#336cfb' : 'black',
    fontWeight: props.className === 'active' ? 'bold' : 'normal',
    cursor: props.className === 'active' ? 'default' : 'pointer'
}));

interface Props {
    onNavItemClick?: () => void;
}

export const NavigationMenu = ({ onNavItemClick }: Props) => {
    const location = useLocation();
    console.log('location', location)
    const navigate = useNavigate();
    const state = useContext(Context);

    const onAddPatient = () => {
        if (onNavItemClick) {
            onNavItemClick();
        }

        state.setDialogMode('add');
        state.setDialogPatient({
            date: new Date()
        })
        state.setIsAddPatientDialogOpen(true)
    }

    const onNavigationItemClick = (page: string) => {
        if (onNavItemClick) {
            onNavItemClick();
        }

        navigate(page);
    }

    return <Box width={'240px'} height={'100vh'} bgcolor={'#fbfbfb'} position='fixed'>
        <LogoStyle> <img src={logo} /></LogoStyle>
        <Title>MEDICINE</Title>
        <Units onClick={() => onNavigationItemClick('/')}>
            <DashboardCustomizeRoundedIcon style={{ color: '#9D9D9D' }} />
            <Box ml={1}>
                <NavItem className={location.pathname === '/' ? 'active' : ''}>Dashboard</NavItem>
            </Box>
        </Units>
        <Units onClick={() => onNavigationItemClick('/appointments')}> <PersonSearchIcon style={{ color: '#9D9D9D' }} />
            <Box ml={1}>
                <NavItem className={location.pathname === '/appointments' ? 'active' : ''}>Appointments</NavItem>
            </Box>
        </Units>
        <Units onClick={() => onNavigationItemClick('/doctors')}> <GroupsIcon style={{ color: '#9D9D9D' }} />  <Box ml={1}>
            <NavItem className={location.pathname === '/doctors' ? 'active' : ''}>Doctors</NavItem>
        </Box></Units>
        <Units onClick={() => onNavigationItemClick('/departments')}> <LocalHospitalIcon style={{ color: '#9D9D9D' }} />  <Box ml={1}>
            <NavItem className={location.pathname === '/departments' ? 'active' : ''}>Departments</NavItem>
        </Box></Units>
        <Units onClick={() => onNavigationItemClick('/patients')}> <VaccinesIcon style={{ color: '#9D9D9D' }} /> <Box ml={1}>
            <NavItem className={location.pathname === '/patients' ? 'active' : ''}>Patients</NavItem>
        </Box></Units>
        <Units onClick={() => onNavigationItemClick('/payments')}> <PaymentsIcon style={{ color: '#9D9D9D' }} />  <Box ml={1}>
            <NavItem className={location.pathname === '/payments' ? 'active' : ''}>Payments</NavItem>
        </Box></Units>
        <ButtonStyle>
            <Button variant="contained" onClick={() => onAddPatient()}> <AddIcon /> Add Patient</Button>
        </ButtonStyle>
    </Box>
}