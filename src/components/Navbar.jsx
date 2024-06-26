import { useState} from 'react';
import './Navbar.css';
import logo from '../assets/SIP.jpg'; // Make sure you have a logo image at this path

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <img src={logo} alt="SIP Logo" className="logo" />
      <h1>SIP CALCULATOR</h1>
      <button onClick={toggleMode} className="mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Navbar;
