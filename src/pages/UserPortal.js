import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
                    <label style={{margin: 10}}>Click here to update your profile: </label>
                    <Link to="/updateProfile" className="btn btn-primary">Update Profile</Link>
                <br/>
                <br/>
                    <label style={{margin: 10}}>Click here to delete your profile:</label>
                    <button type="submit" className="btn btn-primary">Delete Profile</button>
            </div>
        );
    }
}

export default UserPortal;