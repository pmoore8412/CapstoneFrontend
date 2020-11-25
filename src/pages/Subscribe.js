import React, { Component } from 'react';
import { Axios } from 'axios';

class Subscribe extends Component {

    state = {
        user: {
            email: '',
            user_name: '',
            password: '',
            role: '',
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

    handleSubmit = () => {
        Axios.post('http://localhost:8080/submitUserDetails', this.state.student)
        .then(response => {
            //nav to a thank you page
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
                <form className="container">
                    <div className="form-group container col-4">
                        <label for="email">Email address:</label>
                        <input onChange={this.handleChange} value={this.state.user.email} type="email" className="form-control" name="email" id="email" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="user_name">User Name:</label>
                        <input onChange={this.handleChange} value={this.state.user.user_name} type="text" className="form-control" name="user_name" id="user_name" />
                    </div>
                    <div className="form-group container col-4">
                        <label for="password">Password:</label>
                        <input onChange={this.handleChange} value={this.state.user.password} type="password" className="form-control" name="password" id="password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name="email_opt_in" id="email_opt_in" />
                        <label for="email_opt_in">Opt into email alerts </label>
                    </div>
                    <input onChange={this.handleChange} value={this.state.user.role} type="hidden" id="role" name="role" value="user" />
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Subscribe;