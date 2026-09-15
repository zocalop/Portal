import { login } from './PortalAPI.js';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Portal() {
  const [scroll, setScroll] = useState(0);
  const [showUsername, setShowUsername] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

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

  const handlePassword = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);

      // User successfully logged in 
      navigate('/derive');

    } catch (error) {
      console.log(error);
      setShowPassword(false);
      setShowUsername(true);
    }
  };

  const handleUsername = (e) => {
    e.preventDefault();
    setShowUsername(false);
    setShowPassword(true);
  };

  const handleMessageClick = (e) => {
    setShowUsername(true);
    setShowMessage(false);
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

      {showUsername && (
        <form 
          className="user-reg-form"
          onSubmit={handleUsername}
        >
          <button type="submit">
            Identify yourself,
          </button>
          <input
            type="text"
            placeholder="Stranger"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
      )}
      {showPassword && (
        <form
          className="user-reg-form"
          onSubmit={handlePassword}
        >
          <button type="submit">
            And your last name?
          </button>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      )}

      <div className="scroll-space"></div>
    </div>
  );
}

export default Portal;
