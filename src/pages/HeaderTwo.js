import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderTwo extends Component {
    render() {
        return (
            <div>
                <div className="mb-1">
                    <nav className="navbar navbar-expand-sm navbar-light nav-h2-color page-background">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link style={{color:"#5f8976"}} className="nav-link" to="/main">HOME</Link>
                        </li>
                        <li className="nav-item active">
                            <Link style={{color:"#5f8976"}} className="nav-link" to="/diy">DIY</Link>
                        </li>
                        <li className="nav-item active">
                            <Link style={{color:"#5f8976"}} className="nav-link" to="/recipes">RECIPES</Link>
                        </li>
                        <li className="nav-item active">
                            <Link style={{color:"#5f8976"}} className="nav-link" to="/homemaking">HOMEMAKING</Link>
                        </li>
                        <li className="nav-item active">
                            <Link style={{color:"#5f8976"}} className="nav-link" to="/art">GALLERY</Link>
                        </li>
                        <li className="nav-item active">
                            <Link style={{color:"#5f8976"}} className="nav-link" to="/favorites">MY FAVORITES</Link>
                        </li>
                        <li className="nav-item active">
                        <a style={{color:"#5f8976"}} className="nav-link" href="https://www.etsy.com/shop/SimplyMooreMaking" target="_blank" rel="noreferrer" data-toggle="tooltip" 
                                data-placement="bottom" title="Link to my Etsy page">SHOP</a>
                        </li>
                    </ul>
                    </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default HeaderTwo;