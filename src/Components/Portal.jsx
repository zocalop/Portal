
import React from 'react';
import { useState, useEffect } from 'react';

function Portal() {
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
        href="/derive"
        className="portal-text"
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        Quod Est Forma Somniorum
      </a>

      <div className="scroll-space"></div>
    </div>
  );
}

export default Portal;
