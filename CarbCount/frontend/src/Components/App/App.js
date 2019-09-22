// Vanilla React:
    // import React, { Component } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
        // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
        // import { Redirect } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

// Smaller components:
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer';
import OurNavBar from '../NavBar/NavBar';

// Call stylesheet last:
import './App.css';


        // const initialState = {
        //     route: 'signin',
        //     isSignedIn: false
        // }

        // class App extends Component {
    function App() {

        const [state, setState] = useState();
        const [users, setUsers] = useState([]);
        const [errors, setErrors] = useState({});

        const username = useRef(null);
        const email = useRef(null);

        useEffect(()=> {
            axios.get("/api/it/", {})
            .then((response) => {
              setState(response.data.it)
            }).catch((error) => {
                setErrors(error)
                console.log("Error:", error)
            });
        
            axios.get("/api/users/", {})
            .then((response) => {
              setUsers(response.data)
            }).catch((error) => {
                setErrors(error)
                console.log("Error:", error)
            });
        }, []);

        const onSubmit = (event) => {
            event.preventDefault();
        
            axios.post("/api/users/", {
              "username": username.current.value,
              "email": email.current.value,
              "groups": []
            }).then((response) => {
              console.log("Create user", response)
            }).catch((error) => {
              setErrors(error)
              console.log("Error:", error)
            });
        }


        // constructor() {
        //     super();
        //     this.state = {
        //         // route: 'signin',
        //         // isSignedIn: false,
        //         userName: ''
        //     }
        //     this.handleLogin = this.handleLogin.bind(this);
        // }

        // handleLogin = (event) => {
        //     // event.preventDefault(); //This doesn't work
        //     console.log('LOGGING IN USER:')

        //     this.setState({
        //         userName: 'Abigail'
        //     })
        // }

        // handleLogout = (event) => {
        //     // event.preventDefault(); //This doesn't work
        //     console.log('LOGGING OUT USER:')
        //     // console.log(event)

        //     this.setState({
        //         userName: ''
        //     })
        // }

        //     // onRouteChange = (route) => {
        //     //     if (route === 'signout') {
        //     //         this.setState(initialState);
        //     //     } else if (route === 'home') {
        //     //         this.setState({
        //     //             isSignedIn: true 
        //     //         });
        //     //     }
        //     //     this.setState({ 
        //     //         route: route 
        //     //     });
        //     // }

        // render() {
        // const { isSignedIn, route } = this.state;
    
        return (
            // <Router>
                <div id="App">
                    <p>Hello World!

                    It is: {state}</p>

                    <ul>
                    {
                        users.map((user) => {
                        return <li key={user.id}>{user.username} - {user.email}</li>
                        })
                    } 
                    </ul>
                    {/* <form onSubmit={onSubmit}>
                        {
                            errors.map((key, value)=> {
                            return <li
                            })
                        }

                        <input ref={username}></input>
                        <br/>
                        <input ref={email}></input>
                        <br/>
                        <button type='submit'>Create New User</button>
                    </form> */}

                        {/* <div id='page-container'> */}
                            {/* <OurNavBar handleLogin={this.handleLogin} handleLogout={this.handleLogout} userName={this.state.userName} /> */}
                                {/* <Main route={route} /> */}
                            {/* <Main handleLogin={() => this.handleLogin()} handleLogout={() => this.handleLogout()} /> */}
                        {/* </div> */}
                        {/* <Footer /> */}
                </div>
            // </Router>
        );
            // }
}

export default App;
