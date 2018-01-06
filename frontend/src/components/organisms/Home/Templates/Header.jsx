import React from 'react'
import logo from '../../../../assets/images/logo.png'

const Header = () => (
  <div className='header'>
    <div className="header-logo">
      <img src={logo} alt='comedian logo' />
    </div>
    <div className="header-text">
      <h1>Comedian</h1>
    </div>
  </div>
)

export default Header;
