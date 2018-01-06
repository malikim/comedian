import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import arrow from '../../../../assets/images/arrow.png'
import logo from '../../../../assets/images/ketrin.jpg'


export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true,
            projects: [
                {
                    name: "Eatigo-pwa",
                    logo: "https://gitlab.com/uploads/-/system/project/avatar/3548238/eatigo_logo.png"
                },
                {
                    name: "Silkroadexplore",
                    logo: "https://cdn-images-1.medium.com/max/1200/1*4WwUOpgRvhKUL32bOTl2Aw.jpeg"
                },
                {
                    name: "Eatigo-merchant",
                    logo: "https://gitlab.com/uploads/-/system/project/avatar/3548238/eatigo_logo.png"
                },
                {
                    name: "Zentis",
                    logo: "https://cdn-images-1.medium.com/max/1200/1*4WwUOpgRvhKUL32bOTl2Aw.jpeg"
                },
                {
                    name: "Namba-taxi",
                    logo: "https://img14.androidappsapk.co/300/b/c/b/kg.nambaapps.taxiclient.png"
                },
                {
                    name: "Namba-food",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDORjezpK7RP7Kp8p6ir_M_hlpY7yML0aqhn3_EJnT2aixbfUUlg"
                },
                {
                    name: "Eatigo-billing",
                    logo: "https://gitlab.com/uploads/-/system/project/avatar/3548238/eatigo_logo.png"
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
        console.log(this.props)
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
                                <li key={index}><img src={item.logo} alt=""/><Link to={"/projects"}>{item.name}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
