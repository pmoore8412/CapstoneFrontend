import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Main extends Component {

    state = {
        user: {},
        posts: []
    }

    componentDidMount() {
        const email = localStorage.getItem("loggedInUser");
        const params = { email }
        Axios.get('http://localhost:8080/findUser', { params })
            .then(response => {
                this.setState({
                    user: response.data
                });
            })
            .catch(error => {
                // display error message
            })
        Axios.get("http://localhost:8080/listPosts")
        .then (response => {
            this.setState ({
                posts: response.data
            })
        }).catch(error => {
            console.log('error retrieving posts');
        })
    }

    renderPostsFetured = () => {
        return  this.state.posts.map((post, index) => {
            if(post.featured === true) {
            return <div className="col mb-4">
            <aside>
                <img className="h-100 w-100" src={post.postImageURL} alt="Well this is embarasing" />
            </aside>
            <Link style={{color: "#5f8976", fontSize: 24}} to={{pathname: "/readPost/postTitle="+post.postTitle, post}}>{post.postTitle}</Link>
        </div>
            }
        });
    }

    render() {
        return (
            <div>
                <br></br>
                <aside style={{float: "right", marginRight: 50, marginTop: 100, background: "white"}}>
                    <div class="card-deck">
                        <div class="card" style={{width: 200, height: 400}}>
                            <div class="card-body">
                                <h4>Archive</h4>
                                <p>Archive comming soon</p>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="container">
                    <h3 className="sub-title-font">Featured Posts</h3>
                    <div class="card-deck">
                        {this.renderPostsFetured()}
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <h3 className="sub-title-font">Dollar Tree DIYs</h3>
                    <div class="card-deck">
                        <div class="card" style={{width: 200, height: 200}}>
                            <img src="..." class="card-img-top" alt="..." />
                            
                        </div>
                        <div class="card" style={{width: 200, height: 200}}>
                            <img src="..." class="card-img-top" alt="..." />
                            
                        </div>
                        <div class="card" style={{width: 200, height: 200}}>
                            <img src="..." class="card-img-top" alt="..." />
                            
                        </div>
                        <div class="card" style={{width: 200, height: 200}}>
                            <img src="..." class="card-img-top" alt="..." />
                            
                        </div>
                        <div class="card" style={{width: 200, height: 200}}>
                            <img src="..." class="card-img-top" alt="..." />
                            
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <h3 className="sub-title-font">Recipes</h3>
                    <div class="card-deck">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <h3 className="sub-title-font">Homemaking</h3>
                    <div class="card-deck">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;