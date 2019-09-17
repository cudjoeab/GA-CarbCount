// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Smaller components:
import abigail from './Images/placeholder.jpg';
import mark from './Images/placeholder.jpg';
import osemeke from './Images/placeholder.jpg';
import adam from './Images/placeholder.jpg';
import larry from './Images/placeholder.jpg';


// Call stylesheet last:
import './Contact.css';


class Contact extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        return (
            <section className='borderBox'>
                <article>
                    <h3>The Web Developers</h3>
                    <section>
                        <h4>Abigail Cudjoe</h4>
                        <p>
                            <img src={abigail} className='profile_photo rounded-circle' alt='Abigail Cudjoe' align='left' />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis nisi in luctus. Vivamus pretium volutpat eleifend. Sed et hendrerit est. Quisque eget vulputate erat. Sed aliquet purus non dui mollis tincidunt. Phasellus urna tellus, suscipit nec facilisis pretium, congue eget lectus.
                        </p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                            <li>Phone Number: </li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h4>Mark Jarvis</h4>
                        <p>
                            <img src={mark} className='profile_photo rounded-circle' alt='Mark Jarvis.' align='right' />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis nisi in luctus. Vivamus pretium volutpat eleifend. Sed et hendrerit est. Quisque eget vulputate erat. Sed aliquet purus non dui mollis tincidunt. Phasellus urna tellus, suscipit nec facilisis pretium, congue eget lectus.</p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                            <li>Phone Number: </li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h4>Osemeke Nwaka</h4>
                        <p>
                            <img src={osemeke} className='profile_photo rounded-circle' alt='Osemeke Nwaka.' align='left' />
                            Brand statement? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis nisi in luctus. Vivamus pretium volutpat eleifend. Sed et hendrerit est. Quisque eget vulputate erat.</p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                            <li>Phone Number: </li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h4>Adam Weiler</h4>
                        <p>
                            <img src={adam} className='profile_photo rounded-circle' alt='Adam Weiler.' align='right' />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis nisi in luctus. Vivamus pretium volutpat eleifend. Sed et hendrerit est. Quisque eget vulputate erat. Sed aliquet purus non dui mollis tincidunt. Phasellus urna tellus, suscipit nec facilisis pretium, congue eget lectus. Sed venenatis condimentum nibh quis pulvinar. Aliquam lacinia, metus posuere tempor mollis, orci lorem mattis libero, nec mollis purus magna id ante. Nullam id tristique odio, sit amet viverra dolor. Nam cursus placerat felis, non ullamcorper tortor pharetra eget.</p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                            <li>Phone Number: </li>
                        </ul>
                    </section>
                </article>
                <hr/>
                
                <article>
                    <h3>The UX Designer</h3>
                    <section>
                        <h4>Larry Medina</h4>
                        <p>
                            <img src={larry} className='profile_photo rounded-circle' alt='Larry Medina.' align='left' />Brand statement? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis nisi in luctus. Vivamus pretium volutpat eleifend. Sed et hendrerit est. Quisque eget vulputate erat. Sed aliquet purus non dui mollis tincidunt. Phasellus urna tellus, suscipit nec facilisis pretium, congue eget lectus. Sed venenatis condimentum nibh quis pulvinar. Aliquam lacinia, metus posuere tempor mollis, orci lorem mattis libero, nec mollis purus magna id ante. Nullam id tristique odio, sit amet viverra dolor. Nam cursus placerat felis, non ullamcorper tortor pharetra eget. Donec facilisis molestie arcu vel aliquet.</p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                            <li>Phone Number: </li>
                        </ul>
                    </section>
                </article>
            </section>
        );
    }
}

export default Contact;
