import { Box, Button, TextField, styled } from "@mui/material";
import React, { useContext } from "react";
import logo from "../../images/logo.svg";
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Payment } from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import { useLocation, useNavigate } from "react-router";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import image from '../../images/patient1.jpeg';
import { Context } from "../../context";
import { DialogContainer } from "../DialogContainer";


interface Props {
    children: any;
}

const LogoStyle = styled('div')({
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    paddingTop: '7px',

})

const Title = styled('div')({
    opacity: '.3',
    paddingTop: '24%',
    marginLeft: '10%'
})

const Units = styled('div')({
    margin: '10%',
    display: 'flex',
    alignItems: 'center',
})

const NavItem = styled('div')((props) => ({
    color: props.className === 'active' ? '#336cfb' : 'black',
    fontWeight: props.className === 'active' ? 'bold' : 'normal',
    cursor: props.className === 'active' ? 'default' : 'pointer'
}));

const ButtonStyle = styled('div')({
    margin: '10%'
})

// const SearchInput = styled('div')({
//     backgroundColor: 'var(--input - bg - color)',
//     border: '1px solid #ebebeb',
//     borderRadius: '20px',
//     boxShadow: 'none',
//     color: '#1f2022',
//     display: 'flex',

// })

export const MainContainer = ({ children }: Props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = useContext(Context);

    const onAddPatient = () => {
        state.setDialogMode('add');
        state.setIsAddPatientDialogOpen(true)
    }

    return <Box display={'flex'}>
        <Box width={'240px'} height={'100vh'} bgcolor={'#fbfbfb'}>
            <LogoStyle> <img src={logo} /></LogoStyle>
            <Title>MEDICINE</Title>
            <Units onClick={() => navigate('/')}>
                <DashboardCustomizeRoundedIcon />
                <Box ml={1}>
                    <NavItem className={location.pathname === '/' ? 'active' : ''}>Dashboard</NavItem>
                </Box>
            </Units>
            <Units onClick={() => navigate('/appointments')}> <PersonSearchIcon />
                <Box ml={1}>
                    <NavItem className={location.pathname === '/appointments' ? 'active' : ''}>Appointments</NavItem>
                </Box>
            </Units>
            <Units onClick={() => navigate('/doctors')}> <GroupsIcon />  <Box ml={1}>
                <NavItem className={location.pathname === '/doctors' ? 'active' : ''}>Doctors</NavItem>
            </Box></Units>
            <Units onClick={() => navigate('/departments')}> <LocalHospitalIcon />  <Box ml={1}>
                <NavItem className={location.pathname === '/departments' ? 'active' : ''}>Departments</NavItem>
            </Box></Units>
            <Units onClick={() => navigate('/patients')}> <VaccinesIcon /> <Box ml={1}>
                <NavItem className={location.pathname === '/patients' ? 'active' : ''}>Patients</NavItem>
            </Box></Units>
            <Units onClick={() => navigate('/payments')}> <PaymentsIcon />  <Box ml={1}>
                <NavItem className={location.pathname === '/payments' ? 'active' : ''}>Payments</NavItem>
            </Box></Units>
            <ButtonStyle>
                <Button variant="contained" onClick={() => onAddPatient()}> <AddIcon /> Add Patient</Button>
            </ButtonStyle>
        </Box>
        <Box width={'100%'}>
            <Box maxWidth={'1140px'} margin={'0 auto'} pt={3}>
                <Box mb={4} display={'flex'} justifyContent={'space-between'}>
                    <Box> <TextField id="outlined-basic" label="Search" variant="outlined" size="small" /> </Box>
                    <Box>
                        <NotificationsActiveIcon />
                        <img src={image} alt="profile" width={'50%'} style={{ borderRadius: '50%' }} />
                    </Box>
                </Box>
                <Box>{children}</Box>
            </Box>
        </Box>
        <DialogContainer />
    </Box>
}