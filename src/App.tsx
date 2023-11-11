import React from 'react';
import './App.css';
import { AppointmentsContainer, DeparmentsInfoContainer, DoctorsInfoContainer, MainContainer } from './containers';
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
      </Routes>
    </MainContainer>
  </BrowserRouter>
}

export default App;
