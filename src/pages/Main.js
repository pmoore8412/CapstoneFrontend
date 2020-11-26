import React, { Component } from 'react';
import Axios from 'axios';

class Main extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        const email = localStorage.getItem("loggedInUser");
        const params = {email}
        Axios.get('http://localhost:8080/findUser', {params} )
        .then(response => {
            this.setState({
                user: response.data
            });
        })
        .catch(error => {
            // display error message
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <h3 className="sub-title-font">Blog Posts</h3>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" width="20px" height="20px">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Latest Blog Post</h3>
                                    <p className="card-text">Latest blog post of Simply Moore Making</p>
                                    <a href="#" className="btn btn-primary">Read Post</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" width="20px" height="20px">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">Middle Blog Post</h3>
                                    <p className="card-text">Middle blog post of Simply Moore Making</p>
                                    <a href="#" className="btn btn-primary">Read Post</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" width="20px" height="20px">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">First Blog Post</h3>
                                    <p className="card-text">First blog post of Simply Moore Making</p>
                                    <a href="#" className="btn btn-primary">Read Post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <h3 className="sub-title-font">Recipe Posts</h3>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" width="20px" height="20px">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">First recipe Post</h3>
                                    <p className="card-text">First recipe post of Simply Moore Making</p>
                                    <a href="#" className="btn btn-primary">Read Post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="sub-title-font">DIY Posts</h3>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" width="20px" height="20px">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">First DIY Post</h3>
                                    <p className="card-text">First DIY post of Simply Moore Making</p>
                                    <a href="#" className="btn btn-primary">Read Post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="sub-title-font">Homemaking Posts</h3>
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" width="20px" height="20px">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h3 className="card-title">First Homemaking Post</h3>
                                    <p className="card-text">First Homemaking post of Simply Moore Making</p>
                                    <a href="#" className="btn btn-primary">Read Post</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;