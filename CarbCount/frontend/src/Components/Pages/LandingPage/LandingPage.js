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

import image1 from './Images/burger.jpg'
import image2 from './Images/eastermeal.jpg'
import image3 from './Images/noodles.jpg'


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
                <h3>Track over x number foods</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <h3>Delicious recipes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <h3>Third thing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                
            </section>
        <BackgroundSlideshow images={[ image1, image2, image3 ]} />
        </section> 
        );
    }
}


export default LandingPage;
