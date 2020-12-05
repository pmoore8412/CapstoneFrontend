import React, { Component } from 'react';
import Axios from 'axios';


class UpdatePost extends Component {

    state = {
        post: {}
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempPost = { ...this.state.post };
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

    render() {
        const postid = this.props.location

        return (
            <div>
                <h1>{postid.postID}</h1>
                <form className="container">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">1</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default UpdatePost;