import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Diy extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        Axios.get("http://localhost:8080/listPosts")
            .then(response => {
                this.setState({
                    posts: response.data
                })
            }).catch(error => {
                console.log('error retrieving posts');
            })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8080/findPost', this.state.posts)
        .then(response => {
            localStorage.setItem("fetchPost", response.data.postID);
        })
        .catch(error => {
            //display error message
        })
    }

    renderPostsDIY = () => {
        return this.state.posts.map((post, index) => {
            if(post.postCategory === "DIY") {
            return <div style={{width:400,height:400,margin:15}}>
            <aside>
                <img style={{width:400,height:300,margin:15}} src={post.postImageURL} alt="Well this is embarasing" />
            </aside>
            <Link style={{color: "#5f8976", fontSize: 24}} to={{pathname: "/readPost/postTitle="+post.postTitle, post}}>{post.postTitle}</Link>
        </div>
            }

        });
    }

    renderPostsDTD = () => {
        return this.state.posts.map((post, index) => {
            if(post.postCategory === "DTD") {
            return <div style={{width:400,height:400,margin:15}}>
                <aside>
                    <img style={{width:400,height:300,margin:15}} src={post.postImageURL} alt="Well this is embarasing" />
                </aside>
                <Link style={{color: "#5f8976", fontSize: 24}} to={{pathname: "/readPost/postTitle="+post.postTitle, post}}>{post.postTitle}</Link>
            </div>
            }

        });
    }

    render() {
        return (
            <div>
                <h1>DIY's</h1>
                <br/>
                <div className="container">
                    <h3 className="sub-title-font">Dollor Tree DIY Posts</h3>
                    <div style={{overflow:"auto"}}>
                    <div className="d-flex">
                        {this.renderPostsDTD()}
                    </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <h3 className="sub-title-font">DIY Posts</h3>
                    <div style={{overflow:"auto"}}>
                    <div class="d-flex">
                        {this.renderPostsDIY()}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diy;