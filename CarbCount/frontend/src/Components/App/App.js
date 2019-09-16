// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

// Smaller components:
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

// Call stylesheet last:
import './App.css';


const initialState = {
    route: 'signin',
    isSignedIn: false
}

class App extends Component {
    // const checkUserAuthentication = () => {
    //     let loggedIn = true;
    //     console.log(loggedIn)
    //     return loggedIn;
    // }

    constructor() {
        super();
        this.state = {
            route: 'signin',
            isSignedIn: false
        }
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState);
        } else if (route === 'home') {
            this.setState({isSignedIn: true});
        }
        this.setState({route: route});
    }

    render() {
        // const isAuthenticated = null;
        // const isAuthenticated = true;
        // console.log('App is authenticated')

        const { isSignedIn, route } = this.state;
    
        return (
            <Router>
                <div id="App">
                    <div id='page-container'>
                        {/* <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} /> */}
                        <OurNavBar />
                        {/* <Main isLoggedIn={isAuthenticated} /> */}
                        
                        {/* { route === 'home'
                            ? // User is logged in. */}
                            <Main route={route} />
                            {/* : // User is not logged in.
                              <div>Not home</div>
                        } */}
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
