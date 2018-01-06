import React, {Component} from 'react'
import logo from '../../../../assets/images/ketrin.jpg'
import Link from 'react-router-dom'

export default class UsersCard extends Component {
    render(){
        return (
            <div className="users-card">
                <div className="users-card__header">
                    <img src={logo} alt=""/>
                    <div className="users-card__header-desc">
                        <div className="left">
                            <h3>{"MR.Ketrin"}</h3>
                            <p>{"Ketrin"}</p>
                        </div>
                        <div className="right">
                            <p>{"12.12.12"}</p>
                            <p>{"eatigo-pwa"}</p>
                        </div>
                    </div>
                </div>
                <div className="user-card__content">
                    <div className="stendup">
                        <h3>12.12.12</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, 
                        molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio.
                        </p>
                    </div>

                    <div className="stendup">
                        <h3>12.12.13</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, 
                        molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio.
                        </p>
                    </div>

                    <div className="stendup">
                        <h3>12.12.14</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, 
                        molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio.
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}