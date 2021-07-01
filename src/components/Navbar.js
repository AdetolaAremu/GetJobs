import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
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
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TheJob
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/postjobs' className='nav-links' onClick={closeMobileMenu}>
                Post Job Ad
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/seejobs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                See Jobs
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dashboard'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Github Repo
              </Link>
            </li>
            <li>
              <Link
                to='/register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Create Account
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Create Account</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;