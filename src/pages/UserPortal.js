import React, { Component } from 'react';
import Axios from 'axios';

class UserPortal extends Component {

    state = {
        user: {}
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

    render() {
        return (
            <div>
                <h1>Welcome {this.state.user.userName}</h1>
                <br/>
                <form className="container">
                    <button type="submit" className="btn btn-primary">Delete Profile</button>
                </form>
            </div>
        );
    }
}

export default UserPortal;