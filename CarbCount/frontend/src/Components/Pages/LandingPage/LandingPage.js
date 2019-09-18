// Vanilla React:
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './LandingPage.css';

// imports for the background slideshow 
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from './Images/1.png'
import image2 from './Images/2.png'
import image3 from './Images/3.png'

// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalculator, faBook } from '@fortawesome/fontawesome-free-solid';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

//Pages: 
import SignIn from '../SignIn/SignIn.js';
import Register from '../Register/Register.js';

class LandingPage extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
        <section className = 'landingPage'>
            
            <section className='landingPageInfo'>
                <h2>Carb Counting Made Easy:</h2>
                <br></br>
                <h3> <FontAwesomeIcon icon={faAppleAlt} />  Carbohydrate info for numerous foods</h3>
                <p>Access to thousands of foods including brand name and from restaurant chains </p>
                <h3><FontAwesomeIcon icon={faCalculator} /> Rapid Insulin Calculator</h3>
                <p>Get immediate calculations for your meal time doses without having to use multiple devices </p>
                <h3><FontAwesomeIcon icon={faBook} /> Keep track of meal history</h3>
                <p>Have easy access to your food log, keep track of your favorite meals and share data with your Diabetes Team</p>
                <section className = 'landingPageCTA'>
                <h4><Link to='/register'>NEW ACCOUNT</Link></h4> 
                <h4><Link to='/sign_in'>SIGN IN</Link> </h4>  
                </section>
                
                
                
            </section>
        <BackgroundSlideshow images={[ image1, image2, image3 ]} />
        </section> 
        );
    }
}


export default LandingPage;
