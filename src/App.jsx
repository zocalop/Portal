import React from 'react';
import Portal from './Components/Portal.jsx';
import Derive from './Components/Derive.jsx';
import SeydaNeen from './Components/SeydaNeen.jsx';
import GamblersDen from './Components/GamblersDen.jsx';
import Trader from './Components/Trader.jsx';
import Bookhouse from './Components/Bookhouse.jsx';
import Inn from './Components/Inn.jsx';
import TheRoadOut from './Components/TheRoadOut.jsx';
import SeydaNeenLeave from './Components/SeydaNeenLeave.jsx';
import './Components/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/derive" element={<Derive />} />
          <Route path="/seydaneen" element={<SeydaNeen />} />
          <Route path="/gamblersden" element={<GamblersDen />} />
          <Route path="/trader" element={<Trader />} />
          <Route path="/bookhouse" element={<Bookhouse />} />
          <Route path="/inn" element={<Inn />} />
          <Route path="/theroadout" element={<TheRoadOut />} />
          <Route path="/seydaneenleave" element={<SeydaNeenLeave />} />
        </Routes>
      </BrowserRouter>
    </div>
)}

export default App
