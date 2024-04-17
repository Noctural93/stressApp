import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/s-m-logo.png'

const Header = () => {
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
      </div>
    </nav>
  )
}

export default Header
