import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Call stylesheet last:
import './SignIn.css';

// import axios from 'axios'
import axios from '../../../axiosConfig'

// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = 'csrftoken'


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
      }


    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

 

    handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        axios.post("/login/", {
            username: form.elements.username.value,
            password: form.elements.password.value
        }).then((e)=> {
            // redirect etc
        }).catch((e)=> {

        })

    }

    render() {

        return (
            <section className='borderBox'>
                <h2>SignIn.js</h2>
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

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </section>
        );
    }
}

export default SignIn;
