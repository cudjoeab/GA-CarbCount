// Vanilla React:
import React, { Component } from 'react';

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


class LandingPage extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
        <section className = 'landingPage'>
            
            <section className='landingPageInfo'>
                <h2>Carb Counting Made Easy</h2>
                <br></br>
                <h3> Carbohydrate info for numerous foods</h3>
                <p>Access to thousands of foods including brand name and from restaurant chains! </p>
                <h3>Rapid Insulin Calculator</h3>
                <p>Get immediate calculations for your meal time doses without having to use multiple devices! </p>
                <h3>Keep track of meal history</h3>
                <p>Have easy access to your food log to keep track of your favorite meals and share data with your Diabetes Team!</p>
                
            </section>
        <BackgroundSlideshow images={[ image1, image2, image3 ]} />
        </section> 
        );
    }
}


export default LandingPage;
