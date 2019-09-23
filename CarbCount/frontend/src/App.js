// Vanilla React:
    // import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

        // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
        // import { Redirect } from 'react-router-dom';

// Bootstrap-React components:
// import Jumbotron from "react-bootstrap/Jumbotron";

import axios from 'axios';


import Counters from './Components/Counters';
import Users from './Components/Users';
import Home from './Components/Home.js';
import Login from './Components/Login/Login.js';

import useGlobal from './AppState.js';

// Smaller components:
        // import Main from './Components/Main/Main.js';
        // import Footer from './Components/Footer/Footer.js';
        // import OurNavBar from './Components/NavBar/NavBar.js';

// Call stylesheet last:
import './App.css';


// const Users = () => {
//     const [store, update] = useGlobal();
  
//     const username = useRef(null);
//     const email = useRef(null);
  
//     const onSubmit = (event) => {
//         event.preventDefault();
    
//         axios.post("/api/users/", {
//             "username": username.current.value,
//             "email": email.current.value,
//             "groups": []
//         }).then((response) => {
//             console.log("Create user", response);
//         }).catch((error) => {
//             console.log("Error:", error);
//         });
//     }
  
//     useEffect(()=> {
//         axios.get("/api/users/", {})
//         .then((response) => {
//             update.SET_USERS(response.data);
//         }).catch((error) => {
//             console.log("Error:", error);
//         });
//     }, []);
  
//     return (
//       <>
//         <p>
//           user:
//           {store.user}
//         </p>
//         <ul>
//           {
//             store.users.map((user, index) => {
//               return <li key={index}>{user.username} - {user.email}</li>
//             })
//           }
//         </ul>
  
//         <form onSubmit={onSubmit}>
//           <input ref={username}></input>
//           <br/>
//           <input ref={email}></input>
//           <br/>
//           <button type='submit'>Create New User</button>
//         </form>
//       </>
//     )
// }


        // const initialState = {
        //     route: 'signin',
        //     isSignedIn: false
        // }

        // class App extends Component {
    const App = () => {

        const [store, update] = useGlobal();





        // TODO: Just straight up drop this implementation in and go from there
        // https://reacttraining.com/react-router/web/example/auth-workflow

        // const [state, setState] = useState();
        const [users, setUsers] = useState([]);
        // const [errors, setErrors] = useState([]);

        const [practitioners, setPractitioners] = useState([]);
        const [diabetics, setDiabetics] = useState([]);
        const [profiles, setProfiles] = useState([]);
        const [recipes, setRecipes] = useState([]);
        const [meals, setMeals] = useState([]);
        const [logs, setLogs] = useState([]);

        // const username = useRef(null);
        // const email = useRef(null);

        useEffect(() => {
            axios.get("/api/it/", {})
            .then((response) => {
                console.log(response);
        //       setState(response.data.it)
            }).catch((error) => {
                // setErrors(error)
                console.log("Error:", error)
            });
        
            axios.get("/api/users.json", {})
            .then((response) => {
                console.log("Api Response", response.data)
                setUsers(response.data)
            }).catch((error) => {
                // setErrors(error)
                console.log("Error:", error)
            });

            // axios.get("/api/groups.json", {})
            // .then((response) => {
                // console.log("Api Response", response.data)
            //   setGroups(response.data)
            // }).catch((error) => {
            //     // setErrors(error)
            //     console.log("Error:", error)
            // });

            axios.get('/api/practitioner.json')
            .then((resp) => {
                console.log("Api Response", resp.data)
                setPractitioners(resp.data)
            });

            axios.get('/api/diabetic.json')
            .then((resp) => {
                console.log("Api Response", resp.data)
                setDiabetics(resp.data)
            });

            // axios.get('/api/profiles.json')
            // .then((resp) => {
            //     console.log("Api Response", resp.data)
            //     setProfiles(resp.data)
            // });

            axios.get('/api/meal.json')
            .then((resp) => {
                console.log("Api Response", resp.data)
                setMeals(resp.data)
            });

            axios.get('/api/recipe.json')
            .then((resp) => {
                console.log("Api Response", resp.data)
                setRecipes(resp.data)
            });

            axios.get('/api/log.json')
            .then((resp) => {
                console.log("Api Response", resp.data)
                setLogs(resp.data)
            });
        
          }, []);



        
        
        

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
                            <li>
                                <Link to="/login/">Login</Link>
                            </li>
                        </ul>
                        <h1>
                            HTTP verb test is: "{store.verb}"
                        </h1>
                        <h1>
                            User is {store.user}.
                        </h1>
                        <h1>
                            Count is {store.counter}.
                        </h1>
                    </nav>
                    <ul>
          {
            practitioners.map((practitioner, index) => {
              return <li key={index}>{practitioner.first_name} {practitioner.last_name} {practitioner.clinic_name}</li>
            })
          }

        </ul>


                    <Route path="/" exact component={Home} />
                    <Route path="/counters/" component={Counters} />
                    <Route path="/users/" component={Users} />
                    <Route path="/login/" component={Login} />
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
