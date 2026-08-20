import React from 'react';
import { useState, useEffect } from 'react';

import Portal from './Components/Portal.jsx';
import Derive from './Components/Derive.jsx';
import SeydaNeen from './Components/SeydaNeen.jsx';
import GamblersDen from './Components/GamblersDen.jsx';
import Trader from './Components/Trader/Trader.jsx';
import TraderProductList from './Components/Trader/TraderProductList.jsx';
import Bookhouse from './Components/Bookhouse.jsx';
import Inn from './Components/Inn.jsx';
import TheRoadOut from './Components/TheRoadOut.jsx';
import SeydaNeenLeave from './Components/SeydaNeenLeave.jsx';
import StrangerInventory from './Components/StrangerInventory.jsx';

import './Components/css/App.css';
import './Components/css/Trader.css';
/*import './Components/css/StrangerInventory.css';*/

import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function StrangerInventoryButton({ onOpenStrangerInventory }) {

  return (
    <div className="stranger-inventory-button">
      <p
        role="button"
        tabIndex={0}
        onClick={onOpenStrangerInventory}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onOpenStrangerInventory(e);
          }
        }}
        style={{ 'cursor':'pointer' }}
      >
        Stranger Inventory
      </p>
    </div>
  );
}

function StrangerInventoryUI({
  showStrangerInventory,
  onOpenStrangerInventory,
  onCloseStrangerInventory
}) {
  const location = useLocation();
  if (['/', '/derive'].includes(location.pathname)) {
    return null;
  }
  return (
  <>
    <StrangerInventoryButton
      onOpenStrangerInventory={onOpenStrangerInventory}
    />
    <div
      className={`stranger-inventory-item ${showStrangerInventory ? 'visible' : ''}`}
    >
      <StrangerInventory
        onCloseStrangerInventory={onCloseStrangerInventory}
      />
    </div>
  </>
  );
}

function App() {
  
  const [showStrangerInventory, setShowStrangerInventory] = useState(false);

  const handleOpenStrangerInventory = (e) => {
    e.preventDefault();
    setShowStrangerInventory(true);
  };

  const handleCloseStrangerInventory = (e) => {
    e.preventDefault();
    setShowStrangerInventory(false);
  };

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <StrangerInventoryUI
          showStrangerInventory={showStrangerInventory}
          onOpenStrangerInventory={handleOpenStrangerInventory}
          onCloseStrangerInventory={handleCloseStrangerInventory}
        />

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
          <Route path="/seydaneenleave" element={<SeydaNeenLeave />} />
        </Routes>

      </BrowserRouter>
    </div>
)}

export default App
 
