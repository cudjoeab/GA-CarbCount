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
                <h2>Carb Counting Made Easy (LandingPage.js)</h2>
                <p>Description</p>
                <h3> Carbohydrate info for numerous foods</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <h3>Rapid Insulin Calculator</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <h3>Keep track of meal history</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                
            </section>
        <BackgroundSlideshow images={[ image1, image2, image3 ]} />
        </section> 
        );
    }
}


export default LandingPage;
