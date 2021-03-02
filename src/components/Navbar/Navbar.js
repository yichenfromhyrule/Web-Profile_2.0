import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';

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
            LOGO
            <div className='nav-divider' />  
            <i className='fab fa-fort-awesome-alt' />
          </Link>
          <div className='menu-icon' onClick = {handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
                to='/' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            

            <li>
              <Link 
                to='/about-me' 
                className='nav-links-mobile' 
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
          </ul>
          {button && 
          <Button buttonStyle='btn--outline'>
              About Me
            </Button>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
