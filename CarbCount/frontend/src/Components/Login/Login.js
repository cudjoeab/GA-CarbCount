// import React, { Component } from 'react';
import React, { useState } from 'react';
import './Login.css';

import AuthService from '../../Services/AuthService.js'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

// class Login extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         username: '',
    //         password: ''
    //     }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // this.Auth = new AuthService();
    // }

    // componentWillMount(){
    // if(this.Auth.loggedIn())
    //     this.props.history.replace('/');
    // }

    const handleLogin = (event) => {
        event.preventDefault();
        const user = {
            username: username,
            password: password
        }

        console.log("AXIOS HERE")
        console.log(username)
        console.log(password)


        // axios.post("/api/users/", {
        //     "username": username.current.value,
        //     "email": email.current.value,
        //     "groups": []
        // }).then((response) => {
        //     console.log("Create user", response);
        // }).catch((error) => {
        //     console.log("Error:", error);
        // });

    }

    // handleFormSubmit(event){
    //     event.preventDefault();

    //     console.log('User submitting form!')

    //     this.Auth.login(this.state.username,this.state.password)
    //         .then(res =>{
    //            this.props.history.replace('/');
    //         })
    //         .catch(error =>{
    //             alert(error);
    //         });
    // }

    // render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    {/* <form onSubmit={this.handleFormSubmit}> */}
                    <form onSubmit={handleLogin}>
                        <input
                            className="form-item"
                            placeholder="Username goes here..."
                            name="username"
                            type="text"
                            onChange = {(e)=> setUsername(e.target.value)}
                            required
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange = {(e)=> setPassword(e.target.value)}
                            required
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    // handleChange(event){
    //     this.setState(
    //         {
    //             [event.target.name]: event.target.value
    //         }
    //     )
    // }
// }

export default Login; 