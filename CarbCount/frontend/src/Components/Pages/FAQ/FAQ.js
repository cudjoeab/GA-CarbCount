// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
// none

// Smaller components:
// none

// Call stylesheet last:
import './FAQ.css';


class FAQ extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <section className='borderBox'>
                <h1>Frequently Asked Questions</h1>
                <p>FAQ Info</p>
            </section>
        );
    }
}

export default FAQ;
