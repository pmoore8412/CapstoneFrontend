import React, { Component } from 'react';
import Logo from '../images/blog-logo-round.png'
import Axios from 'axios';

class SignIn extends Component {

    state = {
        user: {
            email: '',
            password: '',
        }
    }

    changeHandler = (event) => {
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
        Axios.post('http://localhost:8080/userLogin', this.state.user)
        .then(response => {
            console.log('logging in user');
            localStorage.setItem("loggedInUser", response.data.email);
            this.props.history.push("main");            
        })
        .catch(error => {
            //display error message
        })
    }

    render() {
        return (
            <div className="contaner">
                <br></br>
                <form class="form-signin" onSubmit={this.handleSubmit}>
                    <div class="text-center mb-4">
                        <img class="mb-4" src={Logo} alt="Simply Moore Making" width="300px" height="300px" />
                        <h1 class="mb-3">Sign In</h1>
                    </div>
                    <div class="form-label-group container col-2">
                        <input onChange={this.changeHandler} value={this.state.user.email} type="text" id="email" name="email" class="form-control" placeholder="email" />
                        <label for="user_name">Email</label>
                    </div>

                    <div class="form-label-group container col-2">
                        <input onChange={this.changeHandler} value={this.state.user.password} type="password" id="password" 
                        name="password" class="form-control" placeholder="Password" />
                        <label for="password">Password</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Sign in</button>
                </form>
            </div>
        );
    }
}

export default SignIn;