import { login, register } from './PortalAPI.js';
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
  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showLastName, setShowLastName] = useState(false);

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

    if (!checked) {
      setShowUsername(false);
      setShowPassword(true);
    } else {
      setFirstName(username);
      setShowUsername(false);
      setShowLastName(true);
    }
  };

  const handleLastName = async (e) => {
    e.preventDefault();

    try {
      await register(firstName, lastName);

      // User successfully registered
      navigate('/derive');

    } catch (error) {
      console.log(error);
      setShowLastName(false);
      setShowUsername(true);
    }
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
          <br />
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
              Click before answering,<br />if this is your first time.
          </label>
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
      {showLastName && (
        <form
          className="user-reg-form"
          onSubmit={handleLastName}
        >
          <button type="submit">
            And your last name?
          </button>
          <input
            type="text"
            placeholder=''
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </form>
       )}
      <div className="scroll-space"></div>
    </div>
  );
}

export default Portal;
