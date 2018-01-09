import React, {Component} from 'react'
import logo from '../../../../assets/images/ketrin.jpg'
import Link from 'react-router-dom'

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stendups: [
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "eatigo-merchanta",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste fLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingacere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "eatigo-billing",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "silkroadexplore",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiaLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicinge tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "showmebishkek",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "namba taxi",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "namba food",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipfacere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
            ]
        }
    }
    render(){
        return (
            <div className="user-cards">
                {this.state.stendups.map((item, index) => {
                    return (
                        <div key={index} className="user-card">
                            <div className="user-card__header">
                                <img src={item.logo} alt=""/>
                                <div className="user-card__header-desc">
                                    <div className="left">
                                        <h3>{item.nickname}</h3>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="right">
                                        <p>{"12.12.12"}</p>
                                        <p>{item.project}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="user-card__content">
                                {item.stendup}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}