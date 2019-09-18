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
                    <h1>The Web Developers</h1>
                    <section>
                        <h2>Abigail Cudjoe</h2>
                        <p>
                            <img src={abigail} className='profile_photo rounded-circle' alt='Abigail Cudjoe' align='left' />
                            Abigail is a full-stack web developer, artist and enthusiastic learner. Through her interactions, she strives to provide solutions to provide the safest and most equitable spaces. Whether, she is coding, creating or teaching, her goal is to continuously connect with folks as a means to empower them.
                        </p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: cudjoeab@gmail.com </li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h2>Mark Jarvis</h2>
                        <p>
                            <img src={mark} className='profile_photo rounded-circle' alt='Mark Jarvis.' align='right' />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis nisi in luctus. Vivamus pretium volutpat eleifend. Sed et hendrerit est. Quisque eget vulputate erat. Sed aliquet purus non dui mollis tincidunt. Phasellus urna tellus, suscipit nec facilisis pretium, congue eget lectus.</p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h2>Osemeke Nwaka</h2>
                        <p>
                            <img src={osemeke} className='profile_photo rounded-circle' alt='Osemeke Nwaka.' align='left' />
                            A full-stack web developer that likes learning new things. Living by the principles of fairness and kindness, I believe that I can use my skills to provide positive outcomes for my teammates, my company, and society. 
                        </p>    
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h2>Adam Weiler</h2>
                        <p>
                            <img src={adam} className='profile_photo rounded-circle' alt='Adam Weiler.' align='right' />
                            After a brief career in health care, I returned to Web Development where I enjoyed learning about the new libraries and techniques that have been created in recent years. As a dedicated self-learner, I am enjoying the challenge of learning new languages while incorporating my previous knowledge. People find me to be a reliable and diligent worker who works independently or in a team. I am an attentive listener who interprets the message behind the words and I have a good eye for details so I can create the best product for my client.</p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                        </ul>
                    </section>
                </article>
                <hr/>
                
                <article>
                    <h2>The UX Designer</h2>
                    <section>
                        <h2>Larry Medina</h2>
                        <p>
                            <img src={larry} className='profile_photo rounded-circle' alt='Larry Medina.' align='left' />Brand statement? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce laoreet venenatis nisi in luctus. Vivamus pretium volutpat eleifend. Sed et hendrerit est. Quisque eget vulputate erat. Sed aliquet purus non dui mollis tincidunt. Phasellus urna tellus, suscipit nec facilisis pretium, congue eget lectus. Sed venenatis condimentum nibh quis pulvinar. Aliquam lacinia, metus posuere tempor mollis, orci lorem mattis libero, nec mollis purus magna id ante. Nullam id tristique odio, sit amet viverra dolor. Nam cursus placerat felis, non ullamcorper tortor pharetra eget. Donec facilisis molestie arcu vel aliquet.</p>
                        <ul>
                            <li>LinkedIn: </li>
                            <li>GitHub: </li>
                            <li>Personal Portfolio: </li>
                            <li>Email: </li>
                        </ul>
                    </section>
                </article>
            </section>
        );
    }
}

export default Contact;
