import React, { Component } from 'react';
import top from '../images/top.png'

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid footer-align">
                <footer className="blog-footer fixed-bottom">
                    <a href="#"><img src={top} alt="Back to top" width="50px" height="50px" /></a>
                </footer>
            </div>
        );
    }
}

export default Footer;