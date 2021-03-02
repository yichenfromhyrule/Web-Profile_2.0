import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';
import logo from '../../images/logo/LOGO.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960){
          setButton(false)
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left-col" />
          <Link 
            to="/" 
            className="navbar-logo"
            onClick = {closeMobileMenu}
          >
            <img src={logo} alt="Logo" height="70px" width="auto" />
            <div className='nav-divider' />
          </Link>
          <div className="navbar-left-col" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
