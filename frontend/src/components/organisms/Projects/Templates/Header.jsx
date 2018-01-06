import React, {Component} from 'react'
import logo from '../../../../assets/images/logo.png'
import arrow from '../../../../assets/images/white-arrow.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className='header-projects'>
        <div className="header-logo">
          <Link to={'/'}><img src={logo} alt='comedian logo' /></Link>
        </div>
        <div className="header-text">
          <Link to={'/'}>
            <h1>Comedian</h1>
          </Link>
          <img src={arrow} alt=""/>
           <h2>Projects</h2>
        </div>
      </div>
    )
  }
}
