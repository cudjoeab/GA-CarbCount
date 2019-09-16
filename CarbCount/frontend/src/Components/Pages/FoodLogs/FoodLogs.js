// Vanilla React:
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Bootstrap-React components:
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faTint } from '@fortawesome/fontawesome-free-solid';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

// Smaller components:
// import FoodLog from './FoodLog/FoodLog.js';

// Call stylesheet last:
import './FoodLogs.css';


class FoodLogs extends Component {
    JSONresponse = [
        { date: 'September 7', food: 'Pizza', carbs: 42, fibre: 15, meal_type: 'Dinner', blood_glucose: 20, insulin_dose: 2  }, 
        { date: 'September 8', food: 'Hamburger', carbs: 50, fibre: 9, meal_type: 'Dinner', blood_glucose: 15, insulin_dose: 4 }, 
        { date: 'September 8', food: 'Cereal', carbs: 60, fibre: 16, meal_type: 'Breakfast', blood_glucose: 18, insulin_dose: 3 }, 
        { date: 'September 8', food: 'Bagel', carbs: 70, fibre: 10, meal_type: 'Lunch', blood_glucose: 16, insulin_dose: 8 }, 
        { date: 'September 9', food: 'Apple', carbs: 30, fibre: 12, meal_type: 'Snack', blood_glucose: 13, insulin_dose: 1 }, 
        { date: 'September 10', food: 'Orange', carbs: 40, fibre: 14, meal_type: 'Snack', blood_glucose: 12, insulin_dose: 1 }
    ];

    state = {
        meals: this.JSONresponse,
        show: false,
        currItem: ''
    }

    handleShow = (event) => {
        event.preventDefault();

        // console.log(event.target)
        // console.log(event.key)
        // console.log(event.target.key)
        // console.log(event.id)
        console.log(this.JSONresponse[event.target.id])

        this.setState({
            show: true,
            currItem: this.JSONresponse[event.target.id]
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    componentDidMount() {
        console.log('Component did mount!');
        window.scrollTo(0, 0); //Brings user to top of page.
    }

    render() {
        // const logElements = this.state.logs.map(
        //     (log, id) => <p>{log.date} - {log.food} - {log.carbs} carbs - {log.fibre} fibre - {log.meal_type} - {log.blood_glucose} blood glucose</p>
        // )

        const mealElements = this.state.meals.map(
            // (log, id) => <p key={id}><Link to={`/food_logs/${id}`} key={`food_logs/${id}`}>{log.date}</Link> - {log.food} - {log.meal_type}</p>

            (log, id) => <p key={id}><a href={id} onClick={this.handleShow} alt={`A summary of ${log.date} ${log.food}.`} id={id}>{log.date}</a> - {log.meal_type}</p>
        )

        return (
            <section className='borderBox'>
                <h2>Food Logs</h2>          
                {mealElements}

                {/* This only appears when user clicks on one of the links. */}
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.currItem.date}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            <li>{this.state.currItem.food} <FontAwesomeIcon icon={faAppleAlt} /></li>
                            <li>{this.state.currItem.meal_type}</li>
                            <li>{this.state.currItem.carbs} carbs</li>
                            <li>{this.state.currItem.fibre} fibre</li>
                            <li>{this.state.currItem.blood_glucose} <FontAwesomeIcon icon={faTint} /></li>
                            <li>{this.state.currItem.insulin_dose} <FontAwesomeIcon icon={faSyringe} /></li>
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        );
    }
}

export default FoodLogs;
