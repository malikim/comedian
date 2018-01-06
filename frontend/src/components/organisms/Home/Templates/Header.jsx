import React, {Component} from 'react'
import logo from '../../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="header-logo">
          <Link to={'/'}><img src={logo} alt='comedian logo' /></Link>
        </div>
        <div className="header-text">
          <Link to={'/'}><h1>Comedian</h1></Link>
        </div>
      </div>
    )
  }
}
