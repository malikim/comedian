import React, {Component} from 'react'
import arrow from '../../../../assets/images/white-arrow.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className='header-projects'>
        <div className="header-logo">
          <Link to={'/'}><img src="https://cdn-images-1.medium.com/max/1200/1*4WwUOpgRvhKUL32bOTl2Aw.jpeg" alt='comedian logo' /></Link>
        </div>
        <div className="header-text">
          <ul className="breadcrumbs">
            <li>
              <Link to={'/'}>
                <h1>Comedian</h1>
              </Link>  
            </li>
            <li><h2>Projects</h2></li>
          </ul>
        </div>
      </div>
    )
  }
}
