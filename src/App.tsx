import React from 'react';
import './App.css';
import { AppointmentsContainer, DashboardContainer, DeparmentsInfoContainer, DoctorsInfoContainer, MainContainer, PatientsContainer, PaymentsContainer } from './containers';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return <BrowserRouter>
    <MainContainer>
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="/doctors" element={<DoctorsInfoContainer />} />
        <Route path="/departments" element={<DeparmentsInfoContainer />} />
        <Route path="/appointments" element={<AppointmentsContainer />} />
        <Route path="/patients" element={<PatientsContainer />} />
        <Route path="/payments" element={<PaymentsContainer />} />
      </Routes>
    </MainContainer>
  </BrowserRouter>
}

export default App;
