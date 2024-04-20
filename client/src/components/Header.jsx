import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/s-m-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

  const [active, setActive] = useState(false);

  return (
    <nav className='nav-container'>
      <div className='header-container'>
        <div className='logo-container'>
            <img src={logo} alt='s-m'/>
        </div>
        <div className='navigation-path-container'>
            <ul>
                <li><Link reloadDocument to='/'>Home</Link></li>
                <li><Link reloadDocument to='/blogs'>Blogs</Link></li>
                <li><Link reloadDocument to='/lectures'>Lectures</Link></li>
                <li><Link reloadDocument to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div className='hamburger-container' onClick={() => setActive(prev => !prev)}>
          {
            active ? (
              <IoMdClose/>
            ) : (
              <GiHamburgerMenu/>
            )
          }
        </div>
      </div>
        <div className={`navigation-path-small-devices-container ${active && 'active'}`}>
          <ul>
            <li><Link reloadDocument to='/'>Home</Link></li>
            <li><Link reloadDocument to='/blogs'>Blogs</Link></li>
            <li><Link reloadDocument to='/lectures'>Lectures</Link></li>
            <li><Link reloadDocument to='/contact'>Contact</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Header
