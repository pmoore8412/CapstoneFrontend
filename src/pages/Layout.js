import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import About from './About';
import Subscribe from './Subscribe';
import Contact from './Contact';
import HeaderTwo from './HeaderTwo';
import Diy from './Diy';
import Recipes from './Recipes';
import Homemaking from './Homemaking';
import Art from './Art';
import Favorites from './Favorites';
import Footer from './Footer';
import '../index.css'
import SignIn from './SignIn';
import AdminPage from './AdminPage';
import UserPortal from './UserPortal';
import AdminMain from './AdminMain';
import ReadPost from './ReadPost';
import UpdatePost from './UpdatePost';
import UpdateProfile from './UpdateProfile';


class Layout extends Component {
    render() {

        let routes = (
            <div>
                <Route exact path="/" component={Main} />
                <Route path="/main" component={Main} />
                <Route path="/sub" component={Subscribe} />
                <Route path="/signIn" component={SignIn} />
            </div>
        )

        if(localStorage.getItem("loggedInUser")) {
            if(localStorage.getItem("role") === "admin") {
            routes = (
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/main" component={Main} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/adminMain" component={AdminMain} />
                    <Route path="/updatePost" component={UpdatePost} />
                </div>
            )}
            else {
                routes = (
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/main" component={Main} />
                    <Route path="/portal" component={UserPortal} />
                </div>)
            }
        }

        return (
            <div>
                <div className="fixed-top">
                    <Header {...this.props} />
                    <HeaderTwo />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="container-fluid mb-5 mt-5">
                    {routes}
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/diy" component={Diy} />
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/homemaking" component={Homemaking} />
                    <Route path="/art" component={Art} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/readPost" component={ReadPost} />
                    <Route path="/updateProfile" component={UpdateProfile} />
                </div>
                <div className="container-fluid"><Footer /></div>
            </div>
        );
    }
}

export default withRouter(Layout);