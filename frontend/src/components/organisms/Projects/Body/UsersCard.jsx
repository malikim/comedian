import React, {Component} from 'react'
import logo from '../../../../assets/images/ketrin.jpg'
import Link from 'react-router-dom'

export default class UsersCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stendups: [
                {
                    logo: logo,
                    nickname: "MR.Ketrin",
                    name: "Ulukbek Dzhunusov",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: "https://avatars1.githubusercontent.com/u/17123372?s=64&v=4",
                    nickname: "Metr1ckzu",
                    name: "Emir Sabyrkulov",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: "https://avatars3.githubusercontent.com/u/24412021?s=64&v=4",
                    nickname: "Zoxon",
                    name: "Ahmed Asadov",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: "https://avatars0.githubusercontent.com/u/24238226?s=60&v=4",
                    nickname: "Anima",
                    name: "Ekaterina Smoliaeva",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: "https://avatars0.githubusercontent.com/u/24238226?s=60&v=4",
                    nickname: "Alex",
                    name: "Diada Sasha",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: "https://avatars2.githubusercontent.com/u/153196?s=64&v=4",
                    nickname: "Gen1us2k",
                    name: "Andrew Minkin",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: "https://avatars0.githubusercontent.com/u/24238226?s=60&v=4",
                    nickname: "Mirotvorez",
                    name: "Vladimir Shebarshow",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                },
                {
                    logo: "https://avatars2.githubusercontent.com/u/22574900?s=64&v=4",
                    nickname: "An4morph",
                    name: "Polina",
                    project: "eatigo-pwa",
                    stendup: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Inventore possimus mollitia iste facere ex? Sit vel voluptatum facilis velit, molestiae tenetur inventore vitae minima quos dolorem autem, iste vero distinctio."
                }
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