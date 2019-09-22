// Vanilla React:
    // import React, { Component } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import useGlobalHook from 'use-global-hook';
import axios from 'axios';
        // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
        // import { Redirect } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

import actions from './actions.js';

// Smaller components:
import Main from './Components/Main/Main.js';
import Footer from './Components/Footer/Footer.js';
import OurNavBar from './Components/NavBar/NavBar.js';

// Call stylesheet last:
import './App.css';

const initialState = {
    counter: 0,
    user: null,
    users: [],
    verb: null
};

const useGlobal = useGlobalHook(React, initialState, actions);

const Index = () => {
    const [store, update] = useGlobal();
  
    useEffect(()=> {
        axios.get("/api/it/", {})
        .then((response) => {
            update.SET_VERB(response.data.it);
        }).catch((error) => console.log("Error:", error));
    }, []);
  
    return (
        <header className="App-header">
            <h1>
            It is {store.verb}.
            </h1>
        </header>
    );
}


const Counters = () => {
    const [store, update] = useGlobal();
  
    return (
        <>
            <p>
            counter:
            {store.counter}
            </p>
            <button type="button" onClick={() => update.INCREMENT(1)}>
            +1 to global
            </button>
            <button type="button" onClick={() => update.DECREMENT(1)}>
            -1 to global
            </button>
            <button type="button" onClick={() => update.SET_USER("josh")}>
            Set User
            </button>
        </>
    );
}


const Users = () => {
    const [store, update] = useGlobal();
  
    const username = useRef(null);
    const email = useRef(null);
  
    const onSubmit = (event) => {
        event.preventDefault();
    
        axios.post("/api/users/", {
            "username": username.current.value,
            "email": email.current.value,
            "groups": []
        }).then((response) => {
            console.log("Create user", response);
        }).catch((error) => {
            console.log("Error:", error);
        });
    }
  
    useEffect(()=> {
        axios.get("/api/users/", {})
        .then((response) => {
            update.SET_USERS(response.data);
        }).catch((error) => {
            console.log("Error:", error);
        });
    }, []);
  
    return (
      <>
        <p>
          user:
          {store.user}
        </p>
        <ul>
          {
            store.users.map((user, index) => {
              return <li key={index}>{user.username} - {user.email}</li>
            })
          }
        </ul>
  
        <form onSubmit={onSubmit}>
          <input ref={username}></input>
          <br/>
          <input ref={email}></input>
          <br/>
          <button type='submit'>Create New User</button>
        </form>
      </>
    )
}


        // const initialState = {
        //     route: 'signin',
        //     isSignedIn: false
        // }

        // class App extends Component {
    const App = () => {

        // const [state, setState] = useState();
        // const [users, setUsers] = useState([]);
        // const [errors, setErrors] = useState([]);

        // const username = useRef(null);
        // const email = useRef(null);

        // useEffect(()=> {
        //     axios.get("/api/it/", {})
        //     .then((response) => {
        //       setState(response.data.it)
        //     }).catch((error) => {
        //         setErrors(error)
        //         console.log("Error:", error)
        //     });
        
        //     axios.get("/api/users/", {})
        //     .then((response) => {
        //       setUsers(response.data)
        //     }).catch((error) => {
        //         setErrors(error)
        //         console.log("Error:", error)
        //     });
        // }, []);

        // const onSubmit = (event) => {
        //     event.preventDefault();
        
        //     axios.post("/api/users/", {
        //       "username": username.current.value,
        //       "email": email.current.value,
        //       "groups": []
        //     }).then((response) => {
        //       console.log("Create user", response)
        //     }).catch((error) => {
        //       setErrors(error)
        //       console.log("Error:", error)
        //     });
        // }


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
            <>
                {/* <div id="App"> */}

                <Router>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/counters/">Counters</Link>
                            </li>
                            <li>
                            <Link to="/users/">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/counters/" component={Counters} />
                    <Route path="/users/" component={Users} />
                </Router>



                    {/* <p>Hello World!

                    It is: {state}</p>

                    <ul>
                    {
                        users.map((user, index) => {
                            return <li key={index}>{user.username} - {user.email}</li>
                        })
                    } 
                    </ul>
                    <form onSubmit={onSubmit}>
                        {
                            errors.map((key, value)=> {
                                return <li key={key}>{key} - {value}</li>
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
                {/* </div> */}
            {/* </Router> */}
            </>
        );
            // }
}

export default App;
