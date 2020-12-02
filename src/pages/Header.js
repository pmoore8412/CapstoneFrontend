import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import twitter from '../images/twitter-logo-white.png'
import facebook from '../images/facebook-white.png'
import insta from '../images/instagram-white.png'
import pintrest from '../images/pintrest-white.png'
import youtube from '../images/white-youtube-logo.png'

class Header extends Component {
    state = {
        user: {
            email: '',
            password: '',
            role: ''
        }
    }

    signOut = () => {
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("role");
        this.props.history.push("main");
    }


    render() {

        let signInSignOut = (
            <Link to="/signIn" className="btn btn-outline-light my-2 my-sm-0" type="button">Sign In</Link>
        )

        let userLogedIn = (
            <Link className="nav-link" to="/sub">Subscribe</Link>
        )

        if(localStorage.getItem("loggedInUser") != null) {
            signInSignOut = (
                <button onClick={this.signOut} className="btn btn-outline-light my-2 my-sm-0" type="submit">Sign Out</button>
            );
            if(localStorage.getItem("role") === "admin") {
            userLogedIn = (
                <Link className="nav-link" to="/admin">Admin</Link>
            );}
            else {
                userLogedIn = (
                    <Link className="nav-link" to="/portal">User Portal</Link>
                )
            }
        }

        return (
            <div className="mb-0">
                <nav className="navbar navbar-expand-sm navbar-dark nav-color nav-font">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                                <a className="nav-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer" data-toggle="tooltip" 
                                data-placement="bottom" title="Link to my Facebook page"><img src={facebook} alt="Facebook" width="15px" height="25px" /></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="https://twitter.com/SimplyMoore_" target="_blank" rel="noreferrer" data-toggle="tooltip" 
                                data-placement="bottom" title="Link to my Twitter page"><img src={twitter} alt="Twitter" width="30px" height="25px" /></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" data-toggle="tooltip" 
                                data-placement="bottom" title="Link to my Instagram page"><img src={insta} alt="Instagram" width="25px" height="25px" /></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="https://www.pinterest.com/" target="_blank" rel="noreferrer" data-toggle="tooltip" 
                                data-placement="bottom" title="Link to my Pinterest page"><img src={pintrest} alt="Pintrest" width="25px" height="25px" /></a>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item active">
                                {userLogedIn}
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer" data-toggle="tooltip" 
                                data-placement="bottom" title="Link to my YouTube page"><img src={youtube} alt="YouTube" width="35px" height="25px" /></a>
                            </li>
                        </ul>
                        
                    </div>
                    {signInSignOut}
                </nav>
            </div>
        );
    }
}

export default withRouter(Header);