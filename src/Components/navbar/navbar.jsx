
import React from 'react';
import { useState } from 'react';
import StrangerInventory from './StrangerInventory.jsx';
import { useLocation } from 'react-router-dom';
import { TraderNavbar } from '../Trader/TraderProductList.jsx';

function StrangerInventoryButton({ onOpenStrangerInventory }) {

  return (
    <>
      <button className="stranger-inventory-button"
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
      </button>
    </>
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

function Navbar() {
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
    <div className="navbar">
      <StrangerInventoryUI
        showStrangerInventory={showStrangerInventory}
        onOpenStrangerInventory={handleOpenStrangerInventory}
        onCloseStrangerInventory={handleCloseStrangerInventory}
      />
      
      <TraderNavbar />

    </div>
  );
}

export default Navbar;
