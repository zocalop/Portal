import React from 'react';
import Portal from './Components/Portal.jsx';
import Derive from './Components/Derive.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/derive" element={<Derive />} />
        </Routes>
      </BrowserRouter>
    </div>
)}

export default App
