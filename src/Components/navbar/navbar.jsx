
import React from 'react';
import { useState } from 'react';
import StrangerInventory from './StrangerInventory.jsx';
import { useLocation } from 'react-router-dom';
import { TraderNavbar } from '../Trader/TraderProductList.jsx';
import { Link } from 'react-router-dom';
import { TraderWares } from '../Trader/Trader.jsx';
import { RoadOutButton } from '../TheRoadOut/TheRoadOut.jsx';

function ReturnToButton() {
  const location = useLocation();
  const locations = {
    '/gamblersden': "Gambler's Den",
    '/trader': "Trader",
    '/inn': "Inn",
    '/bookhouse': "Bookhouse",
    '/theroadout': "The Road Out"
  };
  const whereAmI = locations[location.pathname];     
  if (['/', '/derive', '/seydaneen', '/seydaneenleave', '/traderproductlist'].includes(location.pathname)) {
    return null;
  }
  let returnTo;
  if (location.pathname === '/theroadout') {
    returnTo = `Stay in Seyda Neen`;
  } else {
    returnTo = `Leave ${whereAmI}`;
  }

  return (
    <>
      <Link className="stranger-inventory-button"
        to='/seydaneenleave'
      >
        {returnTo}
      </Link>
    </>
  );
}

function StrangerInventoryButton({ onOpenStrangerInventory }) {

  return (
    <>
      <button className="stranger-inventory-button"
        tabIndex={1}
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
      <ReturnToButton />
      <TraderWares />
      <TraderNavbar />
      <RoadOutButton />
    </div>
  );
}

export default Navbar;
