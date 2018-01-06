import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import arrow from '../../../../assets/images/arrow.png'


export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            users: [
                {
                    name: "Lolkekkek"
                },
                {
                    name: "lolkekkek"
                },
                {
                    name: "chkekeburek"
                },
                {
                    name: "sukkekkeka"
                },
                {
                    name: "vodkasuka"
                }
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
                                <li key={index}><Link to={"/users"}>{item.name}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
