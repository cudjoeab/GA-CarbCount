// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './LandingPage.css';


class LandingPage extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <section className='landingPage'>
                <h2>Carb Counting Made Easy (LandingPage.js)</h2>
                <p>Description</p>
                <h3>Track over x number foods</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <h3>Delicious recipes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
                <h3>Third thing</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc sed nisl fringilla venenatis.</p>
            </section>
        );
    }
}

export default LandingPage;
