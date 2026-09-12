import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Portal from './Components/Portal.jsx';
import Derive from './Components/Derive.jsx';
import SeydaNeen from './Components/SeydaNeen.jsx';
import GamblersDen from './Components/GamblersDen.jsx';
import Trader from './Components/Trader/Trader.jsx';
import TraderProductList from './Components/Trader/TraderProductList.jsx';
import Bookhouse from './Components/Bookhouse.jsx';
import Inn from './Components/Inn.jsx';
import TheRoadOut from './Components/TheRoadOut/TheRoadOut.jsx';
import Parallax from './Components/TheRoadOut/Parallax.jsx';
import SeydaNeenLeave from './Components/SeydaNeenLeave.jsx';

import Navbar from './Components/navbar/navbar.jsx';
import CartPersistence from './Components/Cart/CartPersistence.jsx';

import './Components/css/App.css';
import './Components/css/Trader.css';
import './Components/css/navbar.css';
import './Components/css/TheRoadOut.css';
import './Components/css/Parallax.css';
import './Components/css/CartItem.css';
import './Components/css/Portal.css';

import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {

  return (
    <div>
      <BrowserRouter>

        <ScrollToTop />

        <Navbar />

        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/derive" element={<Derive />} />
          <Route path="/seydaneen" element={<SeydaNeen />} />
          <Route path="/gamblersden" element={<GamblersDen />} />
          <Route path="/trader" element={<Trader />} />
          <Route path="/traderproductlist" element={<TraderProductList />} />
          <Route path="/bookhouse" element={<Bookhouse />} />
          <Route path="/inn" element={<Inn />} />
          <Route path="/theroadout" element={<TheRoadOut />} />
          <Route path="/parallax" element={<Parallax />} />
          <Route path="/seydaneenleave" element={<SeydaNeenLeave />} />
        </Routes>

      </BrowserRouter>
    </div>
)}

export default App
 
