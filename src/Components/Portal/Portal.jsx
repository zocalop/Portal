
import React from 'react';
import { useState, useEffect } from 'react';

function Portal() {
  const [scroll, setScroll] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = Math.min(1, 0.01 + scroll / 5000);

  const handleMessageClick = (e) => {
    setShowForm(true);
    setShowMessage(false);
    e.preventDefault();
  };

  const handleIdentifyYourself = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Portal">
     {showMessage && (
      <div
        className="portal-text"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
        onClick={(e) => handleMessageClick(e)}
      >
        Quod Est Forma Somniorum
      </div>
     )}

      {showForm && (
        <form className="user-reg-form">
          <button 
            type="submit"
            onClick={(e) => handleIdentifyYourself(e)}
          >
            Identify yourself,
          </button>
          <input type="text" placeholder="Stranger" />
        </form>
      )}

      <div className="scroll-space"></div>
    </div>
  );
}

export default Portal;
