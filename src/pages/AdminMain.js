import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class AdminMain extends Component {

    state = {
        posts : []
    }
    
    componentDidMount() {
        Axios.get("http://localhost:8080/listPosts")
        .then (response => {
            this.setState ({
                posts: response.data
            })
        })
        .catch(error => {
            console.log('error retrieving posts');
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
        Axios.post('http://localhost:8080/updatePost', this.state.post)
            .then(response => {
                //nav to a thank you page
                console.log('post added');
                this.props.history.push('/adminMain')
            })
            .catch(error => {
                //display error message
            })
    }

    renderPostsAll = () => {
        return  this.state.posts.map((post, index) => {

            let isChecked = (
                <input id="featured" name="featured" type="checkbox" onChange={this.handleChange} value={post.featured} />
            )

            let isSecond = (
                <input id="subFeatured" name="subFeatured" type="checkbox" onChange={this.handleChange} value={post.subFeatured} />
            )

            let showFeature = (
                <p>No</p>
            )

            if(post.featured === true) {
                showFeature = (
                    <p>Top Featured</p>
                )
            }

            if(post.subFeatured === true) {
                showFeature = (
                    <p>{post.postCategory} Featured</p>
                )
            }

            return <tr>
                <th scope="row">{post.postID}</th>
                <td>{post.postTitle}</td>
                <td>{post.postCategory}</td>
                <td>{post.day}/{post.month}/{post.year}</td>
                <td><img src={post.postImageURL} alt="Well this is embarsing" width="75px" height="50px" /></td>
                <td>{showFeature}</td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        {isChecked}
                    </form>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        {isSecond}
                    </form>
                </td>
                <td><button type="submit" className="btn btn-primary">Update</button></td>
            </tr>
        });
    }

    render() {
        return (
            <div>
                <h1>Table of Posts</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Post ID</th>
                            <th scope="col">Post Title</th>
                            <th scope="col">Post Category</th>
                            <th scope="col">Post Date</th>
                            <th scope="col">Image</th>
                            <th scope="col">Is Featured?</th>
                            <th scope="col">Featured</th>
                            <th scope="col">Other Featured</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPostsAll()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminMain;