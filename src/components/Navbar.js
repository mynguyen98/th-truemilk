import React from 'react'
import logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='wrapper navbar'>
      <div className=''>
        <img src={logo} alt='' className='logo-th' />
      </div>
      <ul className='navbar--list-item'>
        <li className='navbar-item'>TH TRUE STORY</li>
        <li className='navbar-item navbar--active'>PRODUCT</li>
        <li className='navbar-item'>PROMOTION</li>
        <li className='navbar-item'>STORE</li>
      </ul>
    </div>
  )
}

export default Navbar
