import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Post extends Component {

    state = {
        user: {},
        post: {}
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
        const tempPost = {...this.state.post};
        tempPost[name] = value;
        this.setState({
            post: tempPost
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8080/submitPost', this.state.post)
        .then(response => {
            //nav to a thank you page
            console.log('post added');
            this.props.history.push('adminMain')
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
                    <Link to="/adminMain" type="button" className="btn btn-primary mr-1">Edit Featured Posts</Link>
                    <button type="submit" className="btn btn-primary">Update Info</button>
                </div>
                <br />
                <form onSubmit={this.handleSubmit} className="container">                
                    <div className="form-group container col-4">
                        <label for="postCategory">Post Category:</label>
                        <input onChange={this.handleChange} value={this.state.post.postCategory} type="text" className="form-control" name="postCategory" id="postCategory" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="postTitle">Post Title:</label>
                        <input onChange={this.handleChange} value={this.state.post.postTitle} type="text" className="form-control" name="postTitle" id="postTitle" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="postImageURL">Post Image:</label>
                        <input onChange={this.handleChange} value={this.state.post.postImageURL} type="text" className="form-control-file" name="postImageURL" id="postImageURL" />
                    </div>
                    <div className="form-group container col-6">
                        <label for="post">Post Body:</label>
                        <textarea onChange={this.handleChange} value={this.state.post.post} class="form-control" name="post" id="post" rows="7"></textarea>
                    </div>
                    <div className="form-group container col-4">
                        <label>Post Date:</label>
                        <div className="d-inline-flex">
                            <input onChange={this.handleChange} value={this.state.post.day} type="text" className="form-control" name="day" id="day" placeholder="DD" />
                            <input onChange={this.handleChange} value={this.state.post.month} type="text" className="form-control" name="month" id="month" placeholder="MM" />
                            <input onChange={this.handleChange} value={this.state.post.year} type="text" className="form-control" name="year" id="year" placeholder="YYYY" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Post;