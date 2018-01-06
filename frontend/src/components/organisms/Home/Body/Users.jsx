import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import arrow from '../../../../assets/images/arrow.png'
import logo from '../../../../assets/images/ketrin.jpg'

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            users: [
                {
                    name: "Ketrin",
                    logo: logo,
                    counter: 123
                },
                {
                    name: "Metr1ckzu",
                    counter: 1223,
                    logo: "https://avatars1.githubusercontent.com/u/17123372?s=64&v=4"
                },
                {
                    name: "Zoxon",
                    counter: 12223,
                    logo: "https://avatars3.githubusercontent.com/u/24412021?s=64&v=4"
                },
                {
                    name: "Anima",
                    counter: 123,
                    logo: "https://avatars0.githubusercontent.com/u/24238226?s=60&v=4"
                },
                {
                    name: "Alex",
                    counter: 223,
                    logo: "https://avatars0.githubusercontent.com/u/24238226?s=60&v=4"
                },
                {
                    name: "Gen1us2k",
                    counter: 133,
                    logo: "https://avatars2.githubusercontent.com/u/153196?s=64&v=4"
                },
                {
                    name: "Mirotvorez",
                    counter: 412,
                    logo: "https://avatars0.githubusercontent.com/u/24238226?s=60&v=4"
                },
                {
                    name: "An4morph",
                    counter: 1232,
                    logo: "https://avatars2.githubusercontent.com/u/22574900?s=64&v=4"
                },
            ]
        }
    }
    // componentWillMount(){
    //     this.setState({users: this.props.users})
    // }
    openAcardeon = (e) => {
        e.preventDefault()
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <div className="users">
                <div className="acardeon">
                    <div className="acardeon__title" onClick={this.openAcardeon}>
                        <h1>Users</h1>
                        <img src={arrow} className={(this.state.isOpen ? 'up' : 'down' )} />
                    </div>

                    <ul className={"acardeon__description " + (this.state.isOpen ? 'show' : 'hidden')}>
                        {this.state.users.map((item, index) => {
                            return (
                                <li key={index}><img src={item.logo} alt=""/><Link to={"/users"}>{item.name}</Link><p>{item.counter}</p></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
