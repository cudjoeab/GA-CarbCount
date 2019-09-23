// Vanilla React:
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Smaller components:
// none

// Call stylesheet last:
import './Register.css';

import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'


class Register extends Component {
    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     email: 'cudjoeab@gmail.com',
        //     password: 'doesthiswork',
        //     password2: 'doesthiswork'
        // };
      }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    handleRegister = (event) => {
        event.preventDefault();
        console.log('Lets register a user!')

        let username = event.currentTarget.elements.username.value;
        let password = event.currentTarget.elements.password.value;
        let password2 = event.currentTarget.elements.password2.value;

        if ((password != password2) || (password == '')) {
            console.log('Please check your passwords')
        } else {
            console.log('Passwords match, time to go!')

            const user = {
                username: username,
                password: password
            }


            axios.post("/api/users/", user)
            .then((response)=> {
                console.log('Then:', response)

                axios.post("/api-token-auth/", user)
                .then((response)=> {
                    console.log('Then:', response)
                    window.localStorage['token'] = response.data['token']
                    checkLogin();

                    this.setState({
                        errorMessage: '',
                        // redirectToReferrer: true
                    });
                })


            })
            .catch((error)=> {
                console.log('Error:', error)
            })



        }



        const checkLogin = () => {  // If user has a token, redirect to profile page.
            if (window.localStorage['token'] !== undefined) {
                window.location.href = '/profile'
            };
        };


        
        // const user = {
        //     username: username,
        //     password: password
        // }
        // const form = event.currentTarget.elements;

        // if (form.password.value !== form.password2.value) {
        //     console.log('Error; your passwords are not the same!');
        // } else {
        //     console.log('Same!');

        //     console.log(form)

        //     let userSubmission = 
        

        //     axios.post("api/register/", {
        //         email: form.email.value,
        //         password: form.password.value
        //     }).then((response)=> {
        //         console.log('Then:', response)
        //         console.log('Then:', response.data)

        //         localStorage.setItem('user', JSON.stringify(response.data));

        //         this.setState({
        //             errorMessage: '',
        //             redirectToReferrer: true
        //         });
        //     }).catch((error)=> {
        //         console.log('Error:', error)


        //         //  BAD PATTERN - dont save jsx in state only save a string
        //     //     this.setState({
        //     //         // errorMessage: <Alert variant="danger">Invalid credentials</Alert>
        //     //     });
        //     });
        // }

        // this.setState({
        //     errorMessage: '',
        //     redirectToReferrer: true
        // });
    }

    render() {
        // const { redirectToReferrer } = this.state

        // if (redirectToReferrer === true) {
        //     return <Redirect to='/homepage?register=success' />
        // }

        return (
            <section className='borderBox'>
                <h1>Get Started with Carb Count</h1>
                <p>Welcome to Carb Count!  Let's start by creating a free account.  Next, we'll define your goals and create your custom diet plan.</p>
                {/* <Form onSubmit={this.handleSubmit}> */}
                <Form onSubmit={this.handleRegister}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="username" 
                            placeholder="Enter username" 
                            />
                        <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group controlId="password2">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter password" />
                    </Form.Group>




                    {/* <Form.Group controlId="fname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group controlId="lname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="morning_ratio">
                        <Form.Label>Morning Ratio</Form.Label>
                        <Form.Control type="number" placeholder="Enter morning ratio" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="afternoon_ratio">
                        <Form.Label>Afternoon Ratio</Form.Label>
                        <Form.Control type="number" placeholder="Enter afternoon ratio" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="evening_ratio">
                        <Form.Label>Evening Ratio</Form.Label>
                        <Form.Control type="number" placeholder="Enter evening ratio" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="night_ratio">
                        <Form.Label>Night Ratio</Form.Label>
                        <Form.Control type="number" placeholder="Enter night ratio" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="morning_cor_factor">
                        <Form.Label>Morning Corrections Factor</Form.Label>
                        <Form.Control type="number" placeholder="Enter morning corrections factor" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="afternoon_cor_factor">
                        <Form.Label>Afternoon Corrections Factor</Form.Label>
                        <Form.Control type="number" placeholder="Enter afternoon corrections factor" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="evening_cor_factor">
                        <Form.Label>Evening Corrections Factor</Form.Label>
                        <Form.Control type="number" placeholder="Enter evening corrections factor" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="night_cor_factor">
                        <Form.Label>Night Corrections Factor</Form.Label>
                        <Form.Control type="number" placeholder="Enter night corrections factor" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="morning_target">
                        <Form.Label>Morning Corrections Target</Form.Label>
                        <Form.Control type="number" placeholder="Enter morning corrections target" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="afternoon_target">
                        <Form.Label>Afternoon Corrections Target</Form.Label>
                        <Form.Control type="number" placeholder="Enter afternoon corrections target" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="evening_target">
                        <Form.Label>Evening Corrections Target</Form.Label>
                        <Form.Control type="number" placeholder="Enter evening corrections target" step='0.001' />
                    </Form.Group>

                    <Form.Group controlId="night_target">
                        <Form.Label>Night Corrections Target</Form.Label>
                        <Form.Control type="number" placeholder="Enter night corrections target" step='0.001' />
                    </Form.Group>
                    
                    <Form.Group controlId="insulin_duraction">
                        <Form.Label>Insulin Duraction</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="insulin_type">
                        <Form.Label>Insulin Type</Form.Label>
                        <Form.Control as="select">
                            <option>Apidra</option>
                            <option>Fiasp</option>
                            <option>Humalog</option>
                            <option>NovoLog</option>
                            <option>NovoRapid</option>
                        </Form.Control>
                    </Form.Group> */}

                    {/* <Button variant="primary" onClick>
                        Create My Account
                    </Button> */}



                    {/* <h4 className="signup-button"><Link to='/homepage' onClick={this.props.handleLogin}>Create my Account</Link> </h4>  */}

                    <Button className="signup-button" type="submit">
                        Create my Account
                    </Button>


                    {/* <h4 className="signup-button"><Link to='/homepage'>Create my Account</Link> </h4> */}


                    
                </Form>
                <p>By selecting Continue, you agree to the <Link to='/terms'>Terms of Service</Link> and <a href=''>Privacy Policy</a>.</p>
                    <p>Already have an account? <Link to='/sign_in'>Log in here</Link></p>
            </section>
        );
    }
}

export default Register;
