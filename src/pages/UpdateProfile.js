import React, { Component } from 'react';
import Axios from 'axios';


class UpdateProfile extends Component {

    state = {
        user: {
            email: '',
            userName: '',
            password: '',
            role: 'user',
            emailOptIn: false
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempUser = {...this.state.user};
        tempUser[name] = value;
        this.setState({
            user: tempUser
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:8080/updateUserDetails', this.state.user)
        .then(response => {
            //nav to a thank you page
            console.log('user updated');
            this.props.history.push('/portal')
        })
        .catch(error => {
            //display error message
        })
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
                <form onSubmit={this.handleSubmit} className="container">
                    <div className="form-group container col-4">
                        <label for="email">Update Email address:</label>
                        <input onChange={this.handleChange} value={this.state.user.email} type="email" className="form-control" name="email" id="email" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="user_name">Update User Name:</label>
                        <input onChange={this.handleChange} value={this.state.user.userName} type="text" className="form-control" name="userName" id="userName" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="password">Update Password:</label>
                        <input onChange={this.handleChange} value={this.state.user.password} type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name="emailOptIn" id="emailOptIn" />
                        <label for="email_opt_in">Opt into email alerts </label>
                        <br/>
                        <small>leave unchecked if you do not want to receavie email alerts</small>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default UpdateProfile;