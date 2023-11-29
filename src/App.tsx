import React from 'react';
import './App.css';
import { AppointmentsContainer, DashboardContainer, DeparmentsInfoContainer, DoctorProfileContainer, DoctorsInfoContainer, MainContainer, PatientsContainer, PaymentsContainer, UserProfileContainer } from './containers';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { ContextProvider } from './context';
import { EditAccountContainer } from './containers/EditAccountContainer/EditAccountContainer';
import { ThemeProvider } from '@mui/material';
import { defaultTheme } from './theme';

function App() {
  return <ContextProvider>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <MainContainer>
          <Routes>
            <Route path="/" element={<DashboardContainer />} />
            <Route path="/doctors" element={<DoctorsInfoContainer />} />
            <Route path="/departments" element={<DeparmentsInfoContainer />} />
            <Route path="/appointments" element={<AppointmentsContainer />} />
            <Route path="/patients" element={<PatientsContainer />} />
            <Route path="/payments" element={<PaymentsContainer />} />
            <Route path="/profile/:id" element={<DoctorProfileContainer />} />
            <Route path="/account" element={<EditAccountContainer />} />
            <Route path="/user" element={<UserProfileContainer />} />
          </Routes>
        </MainContainer>
      </ThemeProvider>
    </BrowserRouter>
  </ContextProvider>
}

export default App;
