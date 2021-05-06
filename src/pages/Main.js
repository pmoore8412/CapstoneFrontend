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
            return <div style={{width:350,height:300,marginRight:15}}>
            <aside>
                <img style={{width:350,height:300}} src={post.postImageURL} alt="Well this is embarasing" />
            </aside>
            <Link style={{color: "#5f8976", fontSize: 24}} to={{pathname: "/readPost/postTitle="+post.postTitle, post}}>{post.postTitle}</Link>
        </div>
            }
        });
    }

    renderPostsDTD = () => {
        return this.state.posts.map((post, index) => {
            if(post.postCategory === "DTD") {
                if(post.subFeatured === true) {
                    return <div style={{width:210,height:150,marginRight:15}}>
                                <aside>
                                    <img style={{width:210,height:150}} src={post.postImageURL} alt="Well this is embarasing" />
                                </aside>
                                <Link style={{color: "#5f8976", fontSize: 24}} to={{pathname: "/readPost/postTitle="+post.postTitle, post}}>{post.postTitle}</Link>
                            </div>
                }
            }
        })
    }

    renderPostsRecipes = () => {
        return this.state.posts.map((post, index) => {
            if(post.postCategory === "Recipes") {
                if(post.subFeatured === true) {
                    return <div style={{width:350,height:300,marginRight:15}}>
                                <aside>
                                    <img style={{width:350,height:300}} src={post.postImageURL} alt="Well this is embarasing" />
                                </aside>
                                <Link style={{color: "#5f8976", fontSize: 24}} to={{pathname: "/readPost/postTitle="+post.postTitle, post}}>{post.postTitle}</Link>
                            </div>
                }
            }
        }) 
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
                    <div class="d-flex">
                        {this.renderPostsFetured()}
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <h3 className="sub-title-font">Dollar Tree DIYs</h3>
                    <div class="card-deck">
                        {this.renderPostsDTD()}
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container">
                    <h3 className="sub-title-font">Recipes</h3>
                    <div class="card-deck">
                        {this.renderPostsRecipes()}
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Main;