import React from 'react';
import './App.css';
import { AppointmentsContainer, DashboardContainer, DeparmentsInfoContainer, DoctorProfileContainer, DoctorsInfoContainer, MainContainer, PatientsContainer, PaymentsContainer } from './containers';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { ContextProvider } from './context';
import { EditAccountContainer } from './containers/EditAccountContainer/EditAccountContainer';

function App() {
  return <ContextProvider>
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/doctors" element={<DoctorsInfoContainer />} />
          <Route path="/departments" element={<DeparmentsInfoContainer />} />
          <Route path="/appointments" element={<AppointmentsContainer />} />
          <Route path="/patients" element={<PatientsContainer />} />
          <Route path="/payments" element={<PaymentsContainer />} />
          <Route path="/profile" element={<DoctorProfileContainer />} />
          <Route path="/account" element={<EditAccountContainer />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  </ContextProvider>
}

export default App;
