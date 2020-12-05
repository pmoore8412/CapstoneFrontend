import React, { Component } from 'react';

class ReadPost extends Component {

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
                <aside className="about-image">
                    <img src={post.postImageURL} alt="Well this is embarasing" width="300px" height="250px" />
                </aside>
                <pre style={{ fontFamily: "Century Gothic", fontSize: 18, textAlign: "left" }}>{post.post}</pre>
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