import React from 'react';
import './App.css';
import { AppointmentsContainer, DeparmentsInfoContainer, DoctorsInfoContainer, MainContainer, PatientsContainer } from './containers';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return <BrowserRouter>
    <MainContainer>
      <Routes>
        <Route path="/" element={<DoctorsInfoContainer />} />
        <Route path="/departments" element={<DeparmentsInfoContainer />} />
        <Route path="/appointments" element={<AppointmentsContainer />} />
        <Route path="/patients" element={<PatientsContainer />} />
      </Routes>
    </MainContainer>
  </BrowserRouter>
}

export default App;
