import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import arrow from '../../../../assets/images/arrow.png'


export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            projects: [
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
    //     this.setState({projects: this.props.projects})
    // }
    openAcardeon = (e) => {
        e.preventDefault()
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <div className="projects">
                <div className="acardeon">
                    <div className="acardeon__title" onClick={this.openAcardeon}>
                        <h1>Projects</h1>
                        <img src={arrow} className={(this.state.isOpen ? 'up' : 'down' )} />
                    </div>

                    <ul className={"acardeon__description " + (this.state.isOpen ? 'show' : 'hidden')}>
                        {this.state.projects.map((item, index) => {
                            return (
                                <li key={index}><Link to={"/projects"}>{item.name}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
