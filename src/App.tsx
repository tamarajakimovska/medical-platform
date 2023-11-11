import React from 'react';
import './App.css';
import { AppointmentsContainer, DeparmentsInfoContainer, DoctorsInfoContainer } from './containers';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<DoctorsInfoContainer />} />
      <Route path="/departments" element={<DeparmentsInfoContainer />} />
      <Route path="/appointments" element={<AppointmentsContainer />} />
    </Routes>
  </BrowserRouter>
}

export default App;
