import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Link, withRouter } from "react-router-dom";
import {  } from "react-router";

// Bootstrap-React components:
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// All pages:
import FAQ from '../FAQ/FAQ.js'

// Call stylesheet last:
import './SignIn.css';

// import axios from 'axios'
import axios from '../../../axiosConfig'

// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = 'csrftoken'


class SignIn extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
            errorMessage: '',
            redirectToReferrer: false
        };
      }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget.elements;

        axios.post("/login/", {
            username: form.username.value,
            password: form.password.value
        }).then((response)=> {
            console.log('Then:', response)
            // console.log(this.props)
            // redirect etc
            
            // browserHistory.push("/path-to-link");
            // <Route path="/FAQ" component={FAQ} />

            // window.location

            // this.props.history.push("/");
            // render (
            //     <Redirect push to="/FAQ"/>
            // )

            // return <Redirect to='/FAQ' />

            localStorage.setItem('user', JSON.stringify(response.data)); // Is this right?

            this.setState({
                errorMessage: '',
                redirectToReferrer: true
            });
        }).catch((error)=> {
            console.log('Error:', error)
            // this.history.pushState(null, 'homepage');

            this.setState({
                errorMessage: <Alert variant="danger">Invalid credentials</Alert>
            });
        });
    }

    render() {
            const { redirectToReferrer } = this.state

            if (redirectToReferrer === true) {
                return <Redirect to='/homepage?login=success' />
            }

            return (
            <section className='borderBox'>
                <h1>SignIn.js</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                        />
                    </Form.Group>
                    {this.state.errorMessage}

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </section>
        );
    }
}

export default SignIn;
