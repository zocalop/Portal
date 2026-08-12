
import React from 'react';
import { useState, useEffect } from 'react';

function Derive() {
  const [scroll, setScroll] = useState(0);

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

  return (
    <div className="Portal">
      <a
        href="/seydaneen"
        className="portal-text"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        Welcome to Seyda Neen, traveller.<br />  
        Feel free to explore.
      </a>

      <div className="scroll-space"></div>
    </div>
  );
}

export default Derive;

