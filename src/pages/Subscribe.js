import React, { Component } from 'react';
import Axios from 'axios';

class Subscribe extends Component {

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
        Axios.post('http://localhost:8080/submitUserDetails', this.state.user)
        .then(response => {
            //nav to a thank you page
            console.log('user added');
            this.props.history.push('main')
        })
        .catch(error => {
            //display error message
        })
    }

    render() {
        return (
            <div>
                <h1>Subscribe</h1>
                <br></br>
                <form onSubmit={this.handleSubmit} className="container">
                    <div className="form-group container col-4">
                        <label for="email">Email address:</label>
                        <input onChange={this.handleChange} value={this.state.user.email} type="email" className="form-control" name="email" id="email" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="user_name">User Name:</label>
                        <input onChange={this.handleChange} value={this.state.user.userName} type="text" className="form-control" name="userName" id="userName" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="password">Password:</label>
                        <input onChange={this.handleChange} value={this.state.user.password} type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name="emailOptIn" id="emailOptIn" />
                        <label for="email_opt_in">Opt into email alerts </label>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Subscribe;