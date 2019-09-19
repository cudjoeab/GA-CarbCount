// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Smaller components:
import abigail from './Images/abigail_cudjoe.jpeg';
import mark from './Images/mark_jarvis.jpeg';
import osemeke from './Images/osemke_nwaak.jpeg';
import adam from './Images/adam_weiler.jpeg';
import larry from './Images/larry_medina.jpeg';


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
                <article className='contactInfo'>
                    <h1>The Web Developers</h1>
                    <section>
                        <h2>Abigail Cudjoe</h2>
                        <p>
                            <img src={abigail} className='profile_photo rounded-circle' alt='Abigail Cudjoe' align='left' />
                            Abigail is a full-stack web developer, artist and enthusiastic learner. Through her interactions, she strives to provide solutions to provide the safest and most equitable spaces. Whether, she is coding, creating or teaching, her goal is to continuously connect with folks as a means to empower them.
                        </p>
                        <ul>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/abigailcudjoe/" target="_blank">Abigail's LinkedIn</a></li>
                            <li>GitHub: <a href="https://github.com/cudjoeab" target="_blank">Abigail's GitHub</a></li>
                            {/* <li>Personal Portfolio: </li> */}
                            <li>Email: <a href="mailto:cudjoeab@gmail.com">cudjoeab@gmail.com</a></li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h2>Mark Jarvis</h2>
                        <p>
                            <img src={mark} className='profile_photo rounded-circle' alt='Mark Jarvis.' align='right' />
                            I’m an adventurous seeker of life in all its myriad forms.  From running my own business to travelling off the beaten path, I relish in overcoming challenges both individually and as a team. I am excited to apply my passionate attitude and hard won skills in the field of full stack web development.</p>
                        <ul>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/mtgjarvis/" target="_blank">Mark's LinkedIn</a></li>
                            <li>GitHub: <a href="https://github.com/mtgjarvis" target="_blank">Mark's GitHub</a></li>
                            {/* <li>Personal Portfolio: </li> */}
                            <li>Email: <a href="mailto:mtgjarvis@gmail.com">mtgjarvis@gmail.com</a></li>
                        </ul>
                    </section>
                    <hr/>

                    

                    <section>
                        <h2>Adam Weiler</h2>
                        <p>
                            <img src={adam} className='profile_photo rounded-circle' alt='Adam Weiler.' align='left' />
                            As a dedicated self-learner, I am enjoying the challenge of learning new coding languages. People find me to be a reliable and diligent worker who works independently or in a team. I am an attentive listener and have a good eye for details so I can create the best product for my client.</p>
                        <ul>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/adamweiler/" target="_blank">Adam's LinkedIn</a></li>
                            <li>GitHub: <a href="https://github.com/adam-weiler" target="_blank">Adam's GitHub</a></li>
                            {/* <li>Personal Portfolio: </li> */}
                            <li>Email: <a href="mailto:adam.weiler3@gmail.com">adam.weiler3@gmail.com</a></li>
                        </ul>
                    </section>
                    <hr/>

                    <section>
                        <h2>Osemeke Nwaka</h2>
                        <p>
                            <img src={osemeke} className='profile_photo rounded-circle' alt='Osemeke Nwaka.' align='right' />
                            A full-stack web developer that likes learning new things. Living by the principles of fairness and kindness, I believe that I can use my skills to provide positive outcomes for my teammates, my company, and society. 
                        </p>    
                        <ul>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/onwaka/" target="_blank">Osemeke's LinkedIn</a></li>
                            <li>GitHub: <a href="https://github.com/Mekenwaka1" target="_blank">Osemeke's GitHub</a></li>
                            {/* <li>Personal Portfolio: </li> */}
                            <li>Email: <a href="mailto:oc.hn.waka@gmail.com">o.ch.nwaka@gmail.com</a></li>
                        </ul>
                    </section>
                </article>
                <hr/>
                
                <article className='contactInfo'>
                    <h2>The UX Designer</h2>
                    <section>
                        <h2>Larry Medina</h2>
                        <p>
                            <img src={larry} className='profile_photo rounded-circle' alt='Larry Medina.' align='left' />Product manager and social butterfly who is passionate about leveraging leadership and strategy skills to grow revenue. I love creating user centered designs by using my experience in the design industry and strong business acumen to build meaningful and effective product.</p>
                        <ul>
                            <li>LinkedIn: <a href="https://www.linkedin.com/in/larry-medina/" target="_blank">Larry's LinkedIn</a></li>
                            {/* <li>Personal Portfolio: </li> */}
                            <li>Email: <a href="mailto:medinaclarry@gmail.com">medinaclarry@gmail.com</a></li>
                        </ul>
                    </section>
                </article>
            </section>
        );
    }
}

export default Contact;
