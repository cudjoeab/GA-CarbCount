// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';


// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// All pages:
// import About from '../Pages/About/About.js';
// import Contact from '../Pages/Contact/Contact.js';
// import FAQ from '../Pages/FAQ/FAQ.js';
import FoodLogs from '../Pages/FoodLogs/FoodLogs.js';
// import Homepage from '../Pages/Homepage/Homepage.js';
import LandingPage from '../Pages/LandingPage/LandingPage.js';
import NewCount from '../Pages/NewCount/NewCount.js';
import NewRecipe from '../Pages/NewRecipe/NewRecipe.js';
import SavedRecipes from '../Pages/SavedRecipes/SavedRecipes.js';
// import SignIn from '../Pages/SignIn/SignIn.js';
// import Register from '../Pages/Register/Register.js';

import logo from './Logo/logo-03.png';

// Call stylesheet last:
import "./NavBar.css"


import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'

class OurNavBar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            redirectToReferrer: false
        };
      }

    handleClick = (event) => {
        event.preventDefault();
        console.log('User clicked Logout')

        axios.post("/logout/", {
        //     username: this.getUser.userId
        }).then((response)=> {
            console.log('Then:', response)
        //     // console.log(this.props)
        //     // redirect etc
            
        //     // browserHistory.push("/path-to-link");
        //     // <Route path="/FAQ" component={FAQ} />

        //     // window.location

        //     // this.props.history.push("/");
        //     // render (
        //     //     <Redirect push to="/FAQ"/>
        //     // )

        //     // return <Redirect to='/FAQ' />

        //     this.setState({
        //         errorMessage: '',
        //         // redirectToReferrer: true
        //     });

            localStorage.removeItem('user'); // Is this right?

            this.setState({
                errorMessage: '',
                redirectToReferrer: true
            });

        }).catch((error)=> {
            console.log('Error:', error)
        //     // this.history.pushState(null, 'homepage');

        //     this.setState({
        //         // errorMessage: <Alert variant="danger">Invalid credentials</Alert>
        //     });
        });
        return false;
    }

    
    render() {
        // const getUser = 7;

        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            return <Redirect to='/' />
        }

        let getUser;

        if (localStorage.getItem('user')) {
            console.log(localStorage.getItem('user'))
            getUser = JSON.parse(localStorage.getItem('user'));
            console.log('a', getUser.userId)
            console.log('a', getUser.userName)
        } else {
            getUser = '';
            console.log('b')
        }
    

    return (
        <header>
            <Navbar className="nav" expand="lg">
                
                <Link to='/' className="navbar-brand">
                    <img className="logo" src={logo} alt="The CarbCount logo which resembles a glucose molecule." />
                    CarbCount
                    
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <Link to='/new_count' className="dropdown-item">
                                New Count
                            </Link>
                            <Link to='/new_recipe' className="dropdown-item">
                                New Recipe
                            </Link>
                            <Link to='/saved_recipes' className="dropdown-item">
                                Saved Recipes
                            </Link>
                            <NavDropdown.Divider />
                            <Link to='/food_logs' className="dropdown-item">
                                Food Log
                            </Link>
                        </NavDropdown>
                    </Nav>

                    

                    <Form inline>
                        <FormControl type="text" placeholder="Search for any food!" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                <Form inline>

                    { getUser === ''
                    ?
                        <>
                            <p>
                                <Link to='/sign_in'>Login</Link> -- <Link to='/register'>Sign Up</Link>
                            </p>

                        </>
                    :
                    <>
                        <p>Id:{getUser.userId} --</p>
                        <p>Name: {getUser.userName} --</p>
                        {/* <p><a href='' onClick={this.handleClick}>Logout</a></p> */}
                        <p><Link to='/' onClick={this.handleClick} component={LandingPage}>Logout</Link></p>
                        {/* <p>UserName saved: {getUser.userName}</p> */}
                    </>
                    
                }
                    


                </Form>
            </Navbar>
        </header>
    );
};
}

export default OurNavBar