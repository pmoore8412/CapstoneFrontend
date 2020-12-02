import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component {

    state = {
        user: {},
        posts: {}
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

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempPosts = {...this.state.posts};
        tempPosts[name] = value;
        this.setState({
            posts: tempPosts
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8080/submitPost', this.state.posts)
        .then(response => {
            //nav to a thank you page
            console.log('post added');
            this.props.history.push('main')
        })
        .catch(error => {
            //display error message
        })
    }


    render() {
        return (
            <div>
                <h1>Welcome {this.state.user.userName}</h1>
                <div>
                    <Link to="/adminMain" type="button" className="btn btn-primary mr-1">Edit Main Page</Link>
                    <button type="submit" className="btn btn-primary">Update Info</button>
                </div>
                <form onSubmit={this.handleSubmit} className="container">
                    <div className="form-group container col-4">
                        <label for="postID">Post ID:</label>
                        <input onChange={this.handleChange} value={this.state.posts.postID} type="text" className="form-control" name="postID" id="postID" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="postCategory">Post Category:</label>
                        <input onChange={this.handleChange} value={this.state.posts.postCategory} type="text" className="form-control" name="postCategory" id="postCategory" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="postTitle">Post Title:</label>
                        <input onChange={this.handleChange} value={this.state.posts.postTitle} type="text" className="form-control" name="postTitle" id="postTitle" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="postImageURL">Post Image:</label>
                        <input onChange={this.handleChange} value={this.state.posts.postImageURL} type="file" className="form-control-file" name="postImageURL" id="postImageURL" />
                    </div>
                    <div className="form-group container col-6">
                        <label for="post">Post Body:</label>
                        <textarea onChange={this.handleChange} value={this.state.posts.post} class="form-control" name="post" id="post" rows="7"></textarea>
                    </div>
                    <div className="form-group container col-4">
                        <label for="postDate">Post Date:</label>
                        <input onChange={this.handleChange} value={this.state.posts.postDate} type="date" className="form-control" name="postDate" id="postDate" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Post;