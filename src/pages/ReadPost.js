import React, { Component } from 'react';
import Axios from 'axios';



class ReadPost extends Component {

    state = {
        post: {}
    }

    componentDidMount() {
        const postID = localStorage.getItem("fetchPost");
        const params = {postID}
        Axios.get("http://localhost:8080/findPost", {params})
        .then (response => {
            this.setState ({
                post: response.data
            })
        })
        .catch(error => {
            console.log('error retrieving posts');
        })
    }

    render() {

        const { post } = this.props.location

        let userComments = (
            <p style={{ fontFamily: "Century Gothic", textAlign: "left" }}>Please sign in to comment</p>
        )

        if (localStorage.getItem("loggedInUser") != null) {
            userComments = (
                <button style={{ fontFamily: "Century Gothic", float: "left" }} type="submit" className="btn btn-primary" data-toggle="modal" data-target="#commentModal">
                    Comment</button>
            );
        }

        return (
            <div className="container">
                

                <h1>{post.postTitle}</h1>
                <br />
                <h4>{post.month}/{post.day}/{post.year}</h4>
                <br />
                
                <pre style={{ fontFamily: "Century Gothic", fontSize: 18, textAlign: "left" }}>
                <aside className="about-image">
                    <img src={post.postImageURL} alt="Well this is embarasing" width="300px" height="250px" />
                </aside>
                    {post.post}</pre>
                <br />
                <br />
                <h6 style={{ fontFamily: "Century Gothic", textAlign: "left" }}>Comments:</h6>
                {userComments}
                <pre style={{ fontFamily: "Century Gothic", fontSize: 18, textAlign: "left" }}></pre>
            </div>
        );
    }
}

export default ReadPost;