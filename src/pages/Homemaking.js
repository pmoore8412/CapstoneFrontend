import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Homemaking extends Component {

    state = {
        posts : []
    }
    
    componentDidMount(){
        Axios.get("http://localhost:8080/listPosts")
        .then (response => {
            this.setState ({
                posts: response.data
            })
        }).catch(error => {
            console.log('error retrieving posts');
        })
    }

    renderPosts = () => {
        return this.state.posts.map((post, index) => {
            if(post.postCategory === "Homemaking") {
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
                <h1>Homemaking Posts</h1>
                <br/>
                <div className="container">
                    <div class="row row-cols-1 row-cols-md-3">
                        {this.renderPosts()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Homemaking;