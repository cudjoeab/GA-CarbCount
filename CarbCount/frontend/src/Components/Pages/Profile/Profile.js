// Vanilla React:
import React, { Component } from 'react';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";

// Smaller components:
// none

// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faBullseye, faChartLine, faClock, faSyringe, faUserMd } from '@fortawesome/fontawesome-free-solid';
// import { faBreadSlice, faAppleAlt } from '@fortawesome/free-solid-svg-icons';

// Call stylesheet last:
import './Profile.css';


import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFToken"
axios.defaults.xsrfCookieName = 'csrftoken'


class Profile extends Component {
    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.

        // axios.get("/api/diabetic/")
        // .then((response)=> {
        //     console.log('Then:', response.data)
        // })
        // .catch((error)=> {
        //     console.log('Error:', error)
        // })


        // axios.get("/api/users/")
        // .then((response)=> {
        //     console.log('Then:', response.data)
        // })
        // .catch((error)=> {
        //     console.log('Error:', error)
        // })


    }

    render() {
        return (
            <section className='borderBox'>
                <h1>Abigail Cudjoe's profile <Button variant="secondary" type="submit" onClick="">Edit</Button></h1>
                <p>Email: diabeticwithasweettooth@gmail.com</p>

                <div class='profile-table'>
                    <div>
                        <h4><FontAwesomeIcon icon={faBalanceScale} /> Insulin to Carb Ratio:</h4>
                        <p>Morning: 1:5</p>
                        <p>Afternoon: 1:5</p>
                        <p>Evening: 1:5</p>
                        <p>Night: 1:5</p>
                    </div>
                    <div>
                        <h4><FontAwesomeIcon icon={faChartLine} /> Correction Factor:</h4>
                        <p>Morning: 1.3</p>
                        <p>Afternoon: 1.3</p>
                        <p>Evening: 1.3</p>
                        <p>Night: 1.3</p>
                    </div>
                    <div>
                        <h4><FontAwesomeIcon icon={faBullseye} /> Daily Target:</h4>
                        <p>Morning: 6.7</p>
                        <p>Afternoon: 6.7</p>
                        <p>Evening: 6.7</p>
                        <p>Night: 6.7</p>
                    </div>
                    <div>
                        <h4><FontAwesomeIcon icon={faClock} /> Insulin Duration:</h4>
                        <p>4 hours</p>
                        <h4><FontAwesomeIcon icon={faSyringe} /> Insulin Type:</h4>
                        <p>Fiasp</p>
                        <h4><FontAwesomeIcon icon={faUserMd} /> Practioner:</h4>
                        <p>Dr. Millar</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Profile;
